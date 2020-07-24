import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';

const SigninScreen = ({navigation, route}) => {
  const changeLoginStatus = route.params.changeLoginStatus;
  return (
    <View style={styles.container}>
      <Text h3 style={styles.header}>Sign in to Tracker</Text>
      <Input placeholder='Email'/>
      <Input placeholder='Password'/>
      <Button
        title="Sign in"
        onPress={ () => changeLoginStatus()}
        buttonStyle={styles.button}
      />
      <Button
        title="Go to Sign up"
        onPress={ () => navigation.navigate('Signup') }
        type="clear"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    marginBottom: 5
  },
  button: {
    marginHorizontal: 10
  },
  container: {
    marginTop: 100
  }
});

export default SigninScreen;
