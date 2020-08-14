import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {name} = route.params;
  const {locations} = route.params;

  let avgLat = 0;
  let avgLong = 0;
  locations.forEach(location => {
    avgLat += location.coords.latitude;
    avgLong += location.coords.longitude;
  });

  avgLat /= locations.length;
  avgLong /= locations.length;

  let coords = {latitude: avgLat, longitude: avgLong};

  console.log(coords);

  return (
    <>
      <Text>{name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...coords,
          latitudeDelta: .01,
          longitudeDelta: .01
        }}
      >
        <Polyline coordinates={locations.map(loc => loc.coords)}/>
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetailScreen;
