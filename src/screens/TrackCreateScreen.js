import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h3>Create a track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;
