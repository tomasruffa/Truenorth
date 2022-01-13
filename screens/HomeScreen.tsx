import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../auth/auth';

/* 
  Implement form using any user/pass combination 
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
const windowWidth = Dimensions.get('window').width - 40;

export default function HomeScreen() {
  const navigation = useNavigation()
  const {value, setValue} = useContext(UserContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const Buffer = require("buffer").Buffer;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput value={name} onChangeText={(value) => setName(value)} placeholderTextColor="#6c727f" style={styles.input} placeholder="Enter your name" />
      <TextInput value={password} secureTextEntry={true} onChangeText={(value) => setPassword(value)} placeholderTextColor="#6c727f" style={[styles.input, {marginTop: 20}]} placeholder="Enter your passowrd" />
      <TouchableOpacity style={styles.button} onPress={() => {setValue({name: name, password: new Buffer(password).toString("base64")}); navigation.navigate('List')}}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  input: {
    fontSize: 20,
    width: windowWidth,
    height: 50,
    borderWidth: 1,
    borderColor: '#d7d9de',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#5dc1d8',
    width: windowWidth - 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
