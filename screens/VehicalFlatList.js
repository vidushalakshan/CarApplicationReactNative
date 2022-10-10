import { View, Text, FlatList, Box ,TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, NativeBaseProvider } from 'native-base';

export default function VehicalFlatList() {
  return (
    <NativeBaseProvider style={{padding:20}}>
      <View style={{backgroundColor:"#130f40"}}>
      <View style={{alignItems:"flex-start"}}>
          <Text style={{fontSize:30, color:"#ffffff",fontWeight:"bold",width:'50%',mt:"10%"}}> Vehicle List </Text>
        </View>
        <View style={{alignItems:"flex-end"}}>
        <Button mt={'1%'} mb={'5'} size="md" variant="solid" colorScheme="primary" width={'60%'}
      >
          Add Vehicle
        </Button>  
        </View>
      
      </View>
       
     
      <FlatList
    
      style={{backgroundColor:"#130f40"}}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) =>

      <TouchableOpacity style={{borderWidth:1, marginBottom:'5%', padding:5,backgroundColor:"white", borderColor:"green"}} onPress={()=>navigation.navigate('updateDeleteVehicle',{obj:item})}>
        
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} ></Text>
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} ></Text>
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} ></Text>
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} ></Text>
      <Text style={{marginBottom:10,fontWeight:'bold',color:"#2f3640",backgroundColor:"#ffff"}} ></Text>

  </TouchableOpacity>
  }
      />
     
     
    </NativeBaseProvider>
  )
}