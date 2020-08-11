import  "../_mockLocation";

import React, {useEffect, useState, useContext}from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';
import Map from '../components/Map';
import {Context as LocationContext} from "../context/LocationContext";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const {addLocation} = useContext(LocationContext);

  async function startWatching() {
    try {
      const response = await requestPermissionsAsync();
      if (response.status === "granted") {
        await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000, //once every second
          distanceInterval: 10 //once every ten meters
        }, (location) => {
          addLocation(location);
        });
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

  return (
    <SafeAreaView>
      <Text h3 style={styles.container}>Create a track</Text>
      <Map />
      {err ? <Text style={styles.errorMessage}>Please enable location services.</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  errorMessage: {
    marginHorizontal: 10,
    color: 'red'
  }

});

export default TrackCreateScreen;
