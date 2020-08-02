import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';

const SignupScreen = ({navigation, route}) => {
  const changeLoginStatus = route.params.changeLoginStatus;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text h3 style={styles.header}>Sign up for Tracker</Text>
      <Input
        placeholder='Email'
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder='Password'
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
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
    marginBottom: 15,
    marginHorizontal: 10
  },
  button: {
    marginHorizontal: 10
  },
  container: {
    marginTop: 100
  }
});

export default SignupScreen;
