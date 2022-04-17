import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [nameMain, setNameMain] = useState('');
  const [passMain, setPassMain] = useState('');

  console.log(nameMain, passMain);

  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: 'Log in',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0d',
    paddingTop: 50,
    paddingLeft: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;