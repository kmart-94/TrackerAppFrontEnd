import {useState, useEffect, useContext} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, recording, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  async function startWatching() {
    //only called once per page render
    try {
      const response = await requestPermissionsAsync();
      if (response.status === "granted") {
        const sub = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, //once every second
          //distanceInterval: 0 //once every ten meters
        }, callback);
        setSubscriber(sub);
      }
      else {
        setErr('err');
      }
    } catch (err) {
      setErr(err);
    }
  }

//idea, pass in another flag "recording" alongside shouldTrack and callback
//change useEffect such that it will run again when this "recording" flag changes
//then inside if (shouldTrack) replace with
//   {
//     if (subscriber) {
//       subscriber.remove();
//       setSubscriber(null);
//     }
//     startWatching();
//   }
//should only run once each time "recording changes"

  useEffect(() => {
    if (shouldTrack) {
      if (subscriber) {
        subscriber.remove();
        setSubscriber(null);
      }
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack, recording]);

  return [err];

};
