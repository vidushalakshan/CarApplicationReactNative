import { View, Text, FlatList, Box, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


export default function VehicalFlatList() {
    return (
        <View style={styles.container}>

            <Text style={styles.Topic}>Vehicals Details</Text>

            <View style={styles.container}></View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.Text}>Add New Car</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}>
                <Text style={styles.Text}>Add New Car</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 900,
        backgroundColor: '#181718',
    },
    Topic: {
        color: '#f6c708',
        fontSize: 30,
        marginRight: '35%',
        position: 'absolute',
        top: '8%',
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: "blue",
        height: 50,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: '17%',
        borderRadius: 12,
    },
    Test: {
        color: 'white'
    },
    btn2: {
        backgroundColor: "blue",
        height: 50,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: '30%',
        borderRadius: 12,
    },

});