import React, { useState, useContext } from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';

const AuthForm = ({header, type, onSubmit, errorMessage}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Text h3 style={styles.header}>{header}</Text>
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
      {errorMessage !== '' ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Button
        title={type}
        onPress={ () => onSubmit({email, password}) }
        buttonStyle={styles.button}
      />
    </>
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
  errorMessage: {
    marginHorizontal: 10,
    color: 'red'
  }
});

export default AuthForm;
