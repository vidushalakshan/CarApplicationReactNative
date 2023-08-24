import { View, Text, FlatList, Box, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'


export default function VehicalFlatList({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.Topic}>Vehicals Details</Text>

            {/* <Image
                source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/66/220/943/bmw-cars-car-sport-car-wallpaper-preview.jpg' }}
                resizeMode="cover" style={styles.image}></Image> */}
                 <Image
                source={{ uri: 'https://images.hindustantimes.com/auto/img/2021/05/12/600x338/Jaguar_F_type_1608525415757_1620802459454.jpg' }}
                resizeMode="cover" style={styles.image}></Image>

            <Image
                source={{ uri: 'https://www.financialexpress.com/wp-content/uploads/2016/11/Mercedes-Benz-C-Class-Large.jpg' }}
                resizeMode="cover" style={styles.image2}></Image>

            <Image
                source={{ uri: 'https://images.hindustantimes.com/auto/img/2021/05/12/600x338/Jaguar_F_type_1608525415757_1620802459454.jpg' }}
                resizeMode="cover" style={styles.image3}></Image>

            <Image
                source={{ uri: 'http://bsmedia.business-standard.com/_media/bs/img/article/2017-03/08/full/1488982935-9565.jpg?im=Resize,width=640' }}
                resizeMode="cover" style={styles.image4}></Image>

            <Image
                source={{ uri: 'https://images.hindustantimes.com/auto/img/2021/05/12/600x338/Jaguar_F_type_1608525415757_1620802459454.jpg' }}
                resizeMode="cover" style={styles.image5}></Image>

            <Image
                source={{ uri: 'https://images.hindustantimes.com/auto/img/2021/05/12/600x338/Jaguar_F_type_1608525415757_1620802459454.jpg' }}
                resizeMode="cover" style={styles.image6}></Image>



            <View style={styles.container}></View>

            <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate("AddVehicals") }}>
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
        top: '5%',
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: "blue",
        height: 50,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: '60%',
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
    image: {
        width: 160,
        height: 100,
        position: 'absolute',
        right: '3%',
        top: '14%'
    },
    image2: {
        width: 160,
        height: 100,
        position: 'absolute',
        right: '3%',
        top: '29.5%'

    },

    image3: {
        width: 160,
        height: 100,
        position: 'absolute',
        right: '3%',
        top: '45%'
    },
    image4: {
        width: 160,
        height: 100,
        position: 'absolute',
        left: '3%',
        top: '14%'
    },
    image5: {
        width: 160,
        height: 100,
        position: 'absolute',
        left: '3%',
        top: '29.5%'

    },
    image6: {
        width: 160,
        height: 100,
        position: 'absolute',
        left: '3%',
        top: '45%'
    }


});