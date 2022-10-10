import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Signup from './screens/Signup'
import AddVehical from './screens/AddVehical'
import VehicalFlatList from './screens/VehicalFlatList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


export default function App() {
  return (
    <Login/>
  )
}

