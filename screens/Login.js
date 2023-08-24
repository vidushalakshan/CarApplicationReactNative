import { View, Text, ImageBackground, Dimensions, ScrollView, Image, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box, VStack, Input, Button } from 'native-base'
import { err } from 'react-native-svg/lib/typescript/xml';

export default function Login({ navigation }) {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const[id,setId]=useState('');
    
const saveData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'title',
            body: 'body',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => {Alert.alert("Loging Successfully..")})
        .catch((err)=>{Alert.alert("Error occured !")});
}
    return (
        <NativeBaseProvider style={styles.context}>


            <View style={{ backgroundColor: "#130f40", height: "100%" }}>
                <Box style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/2/23/White_BMW_car_seen_from_front.jpg',
                        }}
                    />
                </Box>
                <ScrollView h="380">
                    <VStack space={1} alignItems="center">
                        <Box width={'32'} height={'12'} alignItems={"center"} justifyContent="center" mt={"5"}>
                            <Text style={{ color: "white", fontSize: 34, fontWeight: "bold" }}>Login</Text>
                        </Box>

                        <Box mt={"5"}>
                            <Input mt={"1"} variant="rounded" placeholder="Username" width={'80%'} color={"#ffffff"} onChangeText={(e) => {setTitle(e) }}/>
                            <Input mt={"1"} variant="rounded" placeholder="Password" width={'80%'} color={"#ffffff"} onChangeText={(e) => {setBody(e) }}/>
                        </Box>
                        <Button.Group isAttached mx={{
                            base: "auto",
                            md: 0
                        }} size='md' borderRadius={100}>
                            <Button colorScheme={"blue"} width={'32'} onPress={() => {{saveData} navigation.navigate("VehicalDetails") }}>Login</Button>
                            <Button width={'32'} onPress={() => { navigation.navigate("Signup") }}>  Register</Button>
                        </Button.Group>
                    </VStack>
                </ScrollView>
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    context: {
        backgroundColor: "white"
    },
    container: {
        flex: 5,
    },
    image: {
        flex: 12,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        // backgroundColor: "#000000c0"
    }
})