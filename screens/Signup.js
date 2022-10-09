import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Signup() {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#f6c708', fontSize: 50, position: 'absolute' }}>Sign up</Text>

            <TextInput 
                placeholderTextColor="black"
                style={styles.input1}
                placeholder="Username"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input1}
                placeholder="Username"
            />


            <TextInput
                placeholderTextColor="black"
                style={styles.input1}
                placeholder="Username"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input1}
                placeholder="Username"
            />
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
        marginTop: '22%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        color: '#000000',
        backgroundColor: '#ffffff',
        borderRadius: 10,
    }

});


