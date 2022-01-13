import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoScreen from './screens/ToDoScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import WalletScreen from './screens/WalletScreen';
import { Image } from 'react-native';
import { UserContext } from './auth/auth';

/**
 * Use `HomeScreen` as the initial route
 * Replace the screen title with the `Logo` component
 *
 * 💯  Usage of TypeScript is a plus
 */

// import Logo from './components/ui/Logo';

const Stack = createStackNavigator();

function App() {
  const [value, setValue] = React.useState()
  const LogoTitle = () => {
    return (
      <Image
        style={{ width: 30, height: 25 }}
        source={require('./assets/logo.png')}
      />
    );
  }

  return (
    <NavigationContainer>
      <UserContext.Provider value={{value, setValue}}>
        <Stack.Navigator>
          <Stack.Screen name="To Do" component={ToDoScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Wallet" component={WalletScreen} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <LogoTitle /> }} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </UserContext.Provider>
    </NavigationContainer>
  );
}

export default App;
