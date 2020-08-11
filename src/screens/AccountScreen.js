import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ({navigation}) => {
  const {state, signout, clearErrorMessage} = useContext(AuthContext);

  React.useEffect(() => {
    const listener = navigation.addListener('blur', clearErrorMessage);

    return () => listener;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text h3>Account</Text>
      <Button title="Sign Out" onPress={signout} buttonStyle={styles.button}/>
      {state.errorMessage !== '' ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  button: {
    marginTop: 30
  }
});

export default AccountScreen;
