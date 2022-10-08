import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box ,VStack ,Input , Button} from 'native-base'

export default function Login() {
    return (
        <NativeBaseProvider>
            <VStack space={4} alignItems="center">
                <Box width={'32'} height={'12'} alignItems={"center"} justifyContent="center" mt={"16"}>
                    <Text style={{ color: "#192a56", fontSize: 34, fontStyle: "italic", fontWeight: "600" }}>Login</Text>
                </Box>

                <Box mt={"12"}>
                    <Input variant="rounded" placeholder="Username" width={'80%'}/>
                    <Input mt={"5"} variant="rounded" placeholder="Password" width={'80%'}/>
                </Box>

                <Button mt={'10%'} size="md" variant="outline" colorScheme="success" width={'30%'}
                >
                    Login
                </Button>

                <Button mt={'2%'} size="md" variant="outline" colorScheme="primary" width={'30%'}
                >
                    Register
                </Button>


            </VStack>
        </NativeBaseProvider>
    )
}