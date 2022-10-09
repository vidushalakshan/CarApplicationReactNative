import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function AddVehical() {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 34, fontWeight: 'bold' }}>Add Vehical</Text>

            <TouchableOpacity>
                <View style={styles.buttonCam}>
                    <Text style={styles.buttonText}>
                        Upload Image
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.buttonCapture}>
                    <Text style={styles.buttonText}>
                        Capture
                    </Text>
                </View>
            </TouchableOpacity>

            <Image
                source={{ uri: 'https://i.imgflip.com/6e6bpc.gif' }} resizeMode="cover" style={styles.image}></Image>


            <TextInput
                placeholderTextColor="black"
                style={styles.input1}
                placeholder="Register No"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input2}
                placeholder="Brand"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input3}
                placeholder="Price"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input4}
                placeholder="Fuel Type"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input4}
                placeholder="Date"
            />

            <TextInput
                placeholderTextColor="black"
                style={styles.input4}
                placeholder="Location"
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
        backgroundColor: 'blue',
    },

    input1: {
        marginTop: '15%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        color: '#000000',
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },

    input2: {
        marginTop: '3%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },

    input3: {
        marginTop: '3%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },

    input4: {
        marginTop: '3%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },

    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 1,
        backgroundColor: '#F24C4C',
        position: 'relative',
        top: 26,
        width: 151
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    },
    buttonCam: {
        position: 'relative',
        right: '26%',
        borderRadius: 12,
        paddingVertical: 19,
        paddingHorizontal: 1,
        backgroundColor: '#293462',
        position: 'relative',
        top: 40,
        width: 120
    },
    buttonCapture: {
        position: 'relative',
        right: '26%',
        borderRadius: 12,
        paddingVertical: 19,
        paddingHorizontal: 1,
        backgroundColor: '#FFA500',
        position: 'relative',
        top: 45,
        width: 120
    },
    image:{
        width: 180, 
        height: 100,
        position:'absolute',
       right:'5%',
      top:'14%'
        
    }

});
