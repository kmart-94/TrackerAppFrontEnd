import React, {useEffect, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  React.useEffect(() => {
    const listener = navigation.addListener('blur', clearErrorMessage);

    return () => listener;
  });

  return (
    <View style={styles.container}>
      <AuthForm
        header='Sign up for Tracker'
        type="Sign up"
        onSubmit={signup}
        errorMessage={state.errorMessage}
      />
      <Button
        title="Go to Sign in"
        onPress={ () => navigation.navigate('Signin')}
        type="clear"
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  }
});

export default SignupScreen;
