import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

import {Context as LocationContext} from "../context/LocationContext";
import {Context as TrackContext} from "../context/TrackContext";

const TrackForm = () => {
  const {state: {name, recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext);
  const {createTrack} = useContext(TrackContext);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Track Name"
        style={styles.spacerVert}
        value={name}
        onChangeText={(newName) => changeName(newName)}
        autoCapitalize="none"
        autoCorrect={false}
      />

      { !recording ?
          <Button
            title="Start Recording"
            onPress={ () => {
                startRecording();
                changeName(name);
              }
            }
          />
        :
          <Button
            title="Stop"
            onPress={ () => {
              stopRecording();
            } }
          />
      }

      {!recording && locations.length > 1 ?
        (<Button
          title="Save"
          onPress={ () => createTrack(name, locations) }
          buttonStyle={styles.spacerVert}
         />
        ) :
         null
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  spacerVert: {
    marginVertical: 10
  }

});

export default TrackForm;
