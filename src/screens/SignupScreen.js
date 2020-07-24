import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';

const SignupScreen = ({navigation, route}) => {
  const changeLoginStatus = route.params.changeLoginStatus;
  return (
    <View style={styles.container}>
      <Text h3 style={styles.header}>Sign up for Tracker</Text>
      <Input placeholder='Email'/>
      <Input placeholder='Password'/>
      <Button
        title="Sign up"
        onPress={ () => changeLoginStatus()}
        buttonStyle={styles.button}
      />
      <Button
        title="Go to Sign in"
        onPress={ () => navigation.navigate('Signin') }
        type="clear"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 15
  },
  button: {
    marginHorizontal: 10
  },
  container: {
    marginTop: 100
  }
});

export default SignupScreen;
