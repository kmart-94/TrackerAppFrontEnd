import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ({navigation}) => {
  const {state, signout, clearErrorMessage} = useContext(AuthContext);

  React.useEffect(() => {
    const listener = navigation.addListener('blur', clearErrorMessage);

    return () => listener;
  });

  return <View style={styles.container}>
    <Text style={styles.header}>Account</Text>
    <Button title="Sign Out" onPress={signout} buttonStyle={styles.button}/>
    {state.errorMessage !== '' ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
  </View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10
  },
  header: {
    fontSize: 30
  },
  button: {
    marginTop: 30
  }
});

export default AccountScreen;
