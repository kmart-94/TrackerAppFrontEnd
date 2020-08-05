import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';

const SigninScreen = ({navigation}) => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);

  React.useEffect(() => {
    const listener = navigation.addListener('blur', clearErrorMessage);

    return () => listener;
  });

  return (
    <View style={styles.container}>
      <AuthForm
        header='Sign in to Tracker'
        type="Sign in"
        onSubmit={signin}
        errorMessage={state.errorMessage}
      />
      <Button
        title="Go to Sign up"
        onPress={ () => navigation.navigate('Signup')}
        type="clear"
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  button: {
    marginHorizontal: 10
  }
});

export default SigninScreen;
