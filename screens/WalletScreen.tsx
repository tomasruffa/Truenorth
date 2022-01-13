import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { UserContext } from '../auth/auth';

/**
 * ToDo: Create a Bottom Tab Navigation for: Account and Partners sections
 * ToDo: In the Account tab, print the name submited in the Sign-In form
 * ToDo: In the Partners tab, manually list some apps you create
 *
 * 💯 Published apps where you been involved is great plus
 */

const Tab = createBottomTabNavigator();

export default function WalletScreen() {
  return (
    <Tab.Navigator tabBarOptions={{
      labelStyle: {
        fontSize: 15,
      },
    }}>
      <Tab.Screen name="Account" component={AccountSection} />
      <Tab.Screen name="Partners" component={PartnersSection} />
    </Tab.Navigator>
  );
}

function AccountSection() {
  const {value, setValue} = useContext(UserContext)
  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={require('../assets/finish-illustration.png')} />
      <Text style={styles.title}>Hello, {value.name}</Text>
      <Text>Glad you are here. Hope to see you soon.</Text>
    </View>
  );
}

function PartnersSection() {
  const partnerList = [
    { name: 'App1', url: '#', comments: 'Description of the application and what you did.' },
    { name: 'App2', url: '#', comments: 'Description of the application and what you did.' },
    { name: 'App3', url: '#', comments: 'Description of the application and what you did.' },
  ];

  const ListItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.comments}</Text>
        <Text>URL: {item.url}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partners</Text>
      <Text>Some apps I was involved:</Text>
      {partnerList && partnerList.length > 0 ? (
        <ScrollView>
          {partnerList.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </ScrollView>
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  illustration: {
    width: 256,
    height: 160,
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    marginVertical: 6,
    padding: 8,
  },
});
