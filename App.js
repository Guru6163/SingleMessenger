import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OuterScreen from './screens/OuterScreen';
import HomeScreen from "./screens/HomeScreen"


export default function App() {
  const Stack = createStackNavigator();
  const globalScreenOptions = {
    headerStyle: { backgroundColor: '#2C6BED' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
    headerShown:false
    
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{ headerTitleAlign: 'center' }}
          name="Single Messenger"
          component={OuterScreen}
        />
        <Stack.Screen
          options={{ headerTitleAlign: 'center' }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerTitleAlign: 'center' }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ headerTitleAlign: 'center' }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


