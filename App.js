// File: App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CheckOut from './CheckOut';
import ListAlamat from './ListAlamat';
import TambahAlamat from './TambahAlamat';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CheckOut">
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="ListAlamat" component={ListAlamat} />
        <Stack.Screen name="TambahAlamat" component={TambahAlamat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
