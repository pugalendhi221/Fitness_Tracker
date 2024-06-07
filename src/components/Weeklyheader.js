import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const Weeklyheader = ({ weeklyDateRange, onNextWeek, onPrevWeek }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPrevWeek}>
                <Icon name='arrow-left' size={30} color='white' />
            </TouchableOpacity>
            <Text>{weeklyDateRange}</Text>
            <TouchableOpacity onPress={onNextWeek}>
                <Icon name='arrow-right' size={30} color='white' />
            </TouchableOpacity>
        </View>
    );
}

export default Weeklyheader;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: 'red',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center'
    }
});
