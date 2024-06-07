import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

const Workoutplans = () => {

    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formatteddate = today.toLocaleDateString(undefined, options);

    const workoutPlansData = [
        { id: 1, name: 'Running' ,reps: '5 reps',sets: '3 sets',minutes :'5 Mins'},
        { id: 2, name: 'Shoulder Press' ,reps: '10 reps',sets: '4 sets',minutes :'15 Mins'},
        { id: 3, name: 'Dumbbell Rows' ,reps: '15 reps',sets: '2 sets',minutes :'10 Mins'},
        { id: 4, name: 'Push Ups' ,reps: '15 reps',sets: '2 sets',minutes :'10 Mins'},
        { id: 5, name: 'Squats' ,reps: '15 reps',sets: '2 sets',minutes :'10 Mins'},
        { id: 6, name: 'Planks' ,reps: '15 reps',sets: '2 sets',minutes :'10 Mins'},
    ];

    const renderWorkoutPlanItem = ({ item }) => {
        return (
            <View style={styles.workoutPlan}>
                <Text style={styles.workoutPlanText}>{item.name}</Text>
                <Text>{item.reps}</Text>
                <Text>{item.sets}</Text>
                <Text>{item.minutes}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Workout Tracker</Text>
            <Text style={[styles.header, { fontWeight: 300, fontSize: 17, color: 'grey' }]}>{formatteddate}</Text>

            <View style={styles.sessionContainerHeader}>
                <Text style={[styles.header, { fontSize: 25 }]}>Today's Sessions</Text>
                <Text style={[styles.header, { fontSize: 17, alignSelf: 'center', fontWeight: '400', color: 'grey' }]}>Edit</Text>
            </View>

            <View style={styles.sessionContainer}>
                <FlatList
                    data={workoutPlansData}
                    renderItem={renderWorkoutPlanItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default Workoutplans

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black'
    },
    sessionContainerHeader: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    sessionContainer: {
        flex: 1,
        //backgroundColor: 'red',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    workoutPlan: {
        backgroundColor:'white',
        height: 70,
        width: "100%",
        borderWidth: 1,
        borderColor: 'orange',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 10,
        flexDirection:'row',
        padding:10,
        elevation:3
    },
    workoutPlanText:{
        color:'black',
        fontWeight:'500',
        fontSize:20
    }
})