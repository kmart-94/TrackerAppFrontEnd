import {useState, useEffect, useContext} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber = null;
    async function startWatching() {
      //only called once per page render
      try {
        const response = await requestPermissionsAsync();
        if (response.status === "granted") {
          subscriber = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000, //once every second
            //distanceInterval: 0 //once every ten meters
          }, callback);
        }
        else {
          setErr('err');
        }
      } catch (err) {
        setErr(err);
      }
    }

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
        subscriber = null;
      }
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
        subscriber = null;
      }
    };
  }, [shouldTrack, callback]);

  return [err];

};
