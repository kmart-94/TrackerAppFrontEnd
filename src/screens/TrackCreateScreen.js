import  "../_mockLocation";

import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

import useLocation from "../hooks/useLocation";

import {Context as LocationContext} from "../context/LocationContext";



const TrackCreateScreen = () => {
  const {state, addLocation} = useContext(LocationContext);
  const isFocused = useIsFocused();

  const [err] = useLocation(isFocused, state.recording, (location) => addLocation(location, state.recording));

  return (
    <SafeAreaView>
      <Text h3 style={styles.container}>Create a track</Text>
      <Map />
      {err ? <Text style={styles.errorMessage}>Please enable location services.</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  errorMessage: {
    marginHorizontal: 10,
    color: 'red'
  }

});

export default TrackCreateScreen;
