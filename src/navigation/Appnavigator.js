import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Workoutplans from '../screens/Workoutplans';
import RecentActivity from '../screens/RecentActivity';
import WeeklyProgress from '../screens/WeeklyProgress';
import DateScreen from '../screens/DateScreen';

const Appnavigator = () => {

  const Stack = createStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
      <Stack.Screen name="Workoutplans" component={Workoutplans} options={{headerShown:false}}/>
      <Stack.Screen name="RecentActivity" component={RecentActivity} options={{headerShown:false}}/>
      <Stack.Screen name="WeeklyProgress" component={WeeklyProgress} options={{headerShown:false}}/>
      <Stack.Screen name="DateScreen" component={DateScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Appnavigator