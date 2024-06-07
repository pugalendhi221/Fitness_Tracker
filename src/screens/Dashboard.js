import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const Dashboard = () => {

  const navigation = useNavigation();

  const handlenavigation = (screenName) =>{
    navigation.navigate(screenName);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Fitness Tracker</Text>
      <TouchableOpacity style={styles.card} onPress={()=>handlenavigation('Workoutplans')}>
        <Text style={styles.cardTitle}>Today's Workout</Text>
        {/* Display today's workout details */}
        <Text>Workout details go here</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={()=>handlenavigation('RecentActivity')}>
        <Text style={styles.cardTitle}>Recent Activity</Text>
        {/* Display recent activity */}
        <Text>Recent activity details go here</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={()=>handlenavigation('DateScreen')}>
        <Text style={styles.cardTitle}>Weekly Progress</Text>
        {/* Display weekly progress charts or stats */}
        <Text>Weekly progress details go here</Text>
      </TouchableOpacity>
      {/* Repeat the above card for each day of the week */}
      {/* Add additional cards or components for other features */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Dashboard;
