import {useState, useEffect, useContext} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (callback) => {
  const [err, setErr] = useState(null);

  async function startWatching() {
    try {
      const response = await requestPermissionsAsync();
      if (response.status === "granted") {
        await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, //once every second
          distanceInterval: 10 //once every ten meters
        }, callback);
      }
      else {
        setErr('err');
      }
    } catch (err) {
      setErr(err);
    }
  }

  useEffect(() => {
      startWatching();
  }, []);

  return [err];

};
