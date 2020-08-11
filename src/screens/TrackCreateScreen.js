import  "../_mockLocation";

import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';

import useLocation from "../hooks/useLocation";

import {Context as LocationContext} from "../context/LocationContext";



const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);

  const [err] = useLocation((location) => addLocation(location));

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
