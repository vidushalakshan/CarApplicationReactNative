import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Signup from './screens/Signup'
import AddVehical from './screens/AddVehical'
import VehicalFlatList from './screens/VehicalList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="VehicalDetails" component={VehicalFlatList} />
          <Stack.Screen name="AddVehicals" component={AddVehical} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

