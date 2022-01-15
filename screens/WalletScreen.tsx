import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Linking } from 'react-native';
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
    <Tab.Navigator
      screenOptions={{  
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#019FB5',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarIconStyle: {
          display: 'none'
        },
        headerShown: false
      }}
    >
      <Tab.Screen name="Account" component={AccountSection} options={{
        tabBarLabel: ({ focused }) => (
          <View style={[styles.tabContainer, (focused ? styles.tabBorder : {})]}>
            <Text style={[styles.tabLabel, (focused ? styles.tabSelected : {})]}>Account</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Partners" component={PartnersSection} options={{
          tabBarLabel: ({ focused }) => (
            <View style={[styles.tabContainer, (focused ? styles.tabBorder : {})]}>
              <Text style={[styles.tabLabel, (focused ? styles.tabSelected : {})]}>Partners</Text>
            </View>
          )
        }} />
    </Tab.Navigator>
  );
}

function AccountSection() {
  const {value, setValue} = useContext(UserContext)
  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={require('../assets/finish-illustration.png')} />
      <Text style={styles.title}>Hello, {value.name}</Text>
      <Text style={styles.description}>Glad you are here. Hope to see you soon.</Text>
    </View>
  );
}

function PartnersSection() {
  const partnerList = [
    { name: 'Sandlot', url: 'https://apps.apple.com/app/id1540255774', comments: 'Social media for trainers and trainees made it in React Native.' },
    { name: 'NarnjaX', url: 'https://www.naranjax.com', comments: 'Fintech webpage from Argentina made it in Angular.' },
    { name: 'Disney', url: 'https://adn.disneylatino.com', comments: 'Disney Plus ADN discover for kids made it in ReactJS.' },
  ];

  const ListItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.comments}</Text>
        <Text style={[styles.itemDescription, {marginBottom: 0}]}>URL: <Text onPress={() => Linking.openURL(item.url)} style={styles.itemUrl}>{item.url}</Text></Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: '#E5E5E5'}]}>
      <Text style={[styles.title, {marginVertical: 24}]}>Partners</Text>
      <Text style={styles.descriptionPartner}>Here are somes apps I was involved in:</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  illustration: {
    width: 256,
    height: 160,
    marginTop: 170
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 6,
    padding: 20,
    borderRadius: 8,
    shadowOffset:{  width: 1,  height: 0,  },
    shadowColor: 'black',
    shadowOpacity: 0.01,
  },
  itemTitle: {
    color: '#019FB5',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12
  },
  itemDescription: {
    fontSize: 16,
    marginBottom: 24
  },
  itemUrl: {
    color: '#6B7280'
  },
  description: {
    fontSize: 14,
  },
  tabLabel: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  tabBorder: {
    borderTopColor: '#019FB5',
    borderTopWidth: 4
  },
  tabSelected: {
    color: '#019FB5',
  },
  descriptionPartner: {
    fontSize: 16,
    marginBottom: 16
  }
});
