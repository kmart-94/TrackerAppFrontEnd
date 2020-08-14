import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

import {Context as TrackContext} from "../context/TrackContext";

const TrackListScreen = ({navigation}) => {
  const {state, fetchTracks} = useContext(TrackContext);


  useEffect(() => {
    const listener = navigation.addListener('focus', fetchTracks);

    return () => listener;
  }, []);


  const trackCard = ({item}) => {
    const {name, locations} = item;

    return (
      <TouchableOpacity onPress={() => navigation.navigate("TrackDetail", {id: item._id, name, locations})}>
        <ListItem
          chevron
          title={name}
        />
      </TouchableOpacity>
    );
  };


  return (
      <>
        <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={trackCard}
        />
      </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
