import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Button } from 'react-native'
import React from 'react'
import { TestScheduler } from 'jest';

export default function Signup() {
    return (
        <View style={styles.container}>

            <Text style={{ color: '#f6c708', fontSize: 50, position: 'absolute', fontWeight:'bold', top:15 }}>Sign up</Text>

            <TextInput
                placeholderTextColor="black"
                style={styles.input1}
                placeholder="Username"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input2}
                placeholder="Password"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input3}
                placeholder="Email"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input4}
                placeholder="Address"
            />

            <TouchableOpacity>
                <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Register
                </Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#181718',
    },
    input1: {
        marginTop: '35%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        color: '#000000',
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    input2: {
        marginTop: '15%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    input3: {
        marginTop: '15%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    input4: {
        marginTop: '15%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },

    button: {
        borderRadius:8,
        paddingVertical: 14,
        paddingHorizontal:50,
        backgroundColor: '#1746A2',
        position:'relative',
        top:40
    },

    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
});


