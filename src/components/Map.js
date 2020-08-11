import React, {useContext} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
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
          latitudeDelta: .01,
          longitudeDelta: .01
        }}

      >
        <Circle
          center = {currentLocation.coords}
          radius={50}
          strokeColor="rgba(158, 158, 255, 1)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
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
