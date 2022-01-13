import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={require('../assets/home-illustration.png')} />
      <Text style={styles.title}>Howdy partner!</Text>
      <Text style={styles.description}>This is your assignment.{"\n"}Follow the instructions on the Readme file.</Text>
      <Text style={styles.description}>Don’t worry, it’s easy! You should have the app looking smooth in no time.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
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
    padding: 20,
  },
  illustration: {
    width: 256,
    height: 256,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  description: {
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5dc1d8',
    width: 300,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
