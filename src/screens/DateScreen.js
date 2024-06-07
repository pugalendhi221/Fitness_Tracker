import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Weeklyheader from '../components/Weeklyheader';

const DateScreen = () => {
    const [startDate, setStartDate] = useState(new Date());

    const renderDays = () => {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const weeklyDaysArray = [];
    
        // Iterate through the days of the week
        for (let i = 0; i < 7; i++) {
            // Calculate the date for the current day by adding the index to the start date
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
    
            // Push the entire date object to the array
            weeklyDaysArray.push(currentDate);
        }
    
        return (
            <View style={styles.daysContainer}>
                <View style={styles.leftSection}>
                    {daysOfWeek.map((day, index) => (
                        <View key={index} style={styles.cardContainer}>
                            <Text style={styles.dayText}>{day}</Text>
                            <Text style={styles.dayText}>{weeklyDaysArray[index].getDate()}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    const onNextWeek = () => {
        const newStartDate = new Date(startDate);
        newStartDate.setDate(newStartDate.getDate() + 7);
        setStartDate(newStartDate);
    };

    const onPrevWeek = () => {
        const newStartDate = new Date(startDate);
        newStartDate.setDate(newStartDate.getDate() - 7);
        setStartDate(newStartDate);
    };

    const startDateFormat = startDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    const endDateFormat = endDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    const weeklyDateRange = `${startDateFormat} - ${endDateFormat}`;

    return (
        <View style={styles.container}>
            <Weeklyheader weeklyDateRange={weeklyDateRange} onNextWeek={onNextWeek} onPrevWeek={onPrevWeek} />
            {renderDays()}
        </View>
    );
}

export default DateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    leftSection: {
        flex: 1,
        marginRight: 5
    },
    rightSection: {
        flex: 1,
        marginLeft: 5,
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150, // Adjust height as needed
        marginBottom: 10
    },
    dayText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    centeredCard: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});
