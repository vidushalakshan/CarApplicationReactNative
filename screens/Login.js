import { View, Text, ImageBackground, Dimensions, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, VStack, Input, Button } from 'native-base'

export default function Login() {
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
                            <Input mt={"1"} variant="rounded" placeholder="Username" width={'80%'} color={"#ffffff"} />
                            <Input mt={"1"} variant="rounded" placeholder="Password" width={'80%'} color={"#ffffff"} />
                        </Box>
                        <Button.Group isAttached mx={{
                            base: "auto",
                            md: 0
                        }} size='md' borderRadius={100}>
                            <Button colorScheme={"blue"} width={'32'}>Login</Button>
                            <Button width={'32'}>  Register</Button>

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