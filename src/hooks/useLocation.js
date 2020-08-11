import {useState, useEffect, useContext} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
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
          distanceInterval: 10 //once every ten meters
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

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [err];

};
