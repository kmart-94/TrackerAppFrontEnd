import React, {useContext} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

function Map() {
  const {state: {currentLocation}} = useContext(LocationContext);
  console.log(currentLocation);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop: 200}} />;
  }

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: .1,
          longitudeDelta: .1
        }}
      >

      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
