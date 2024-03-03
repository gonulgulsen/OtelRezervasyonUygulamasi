import {Button, StyleSheet, Text, View,  FlatList, Image, TouchableOpacity , ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react';
import hotelsData from '../../Hotels.json';


import { SafeAreaView } from 'react-native-safe-area-context'

import TabBar from '../components/TabBar';


const HomeScreen = ({navigation}) => {
  const [hotels, setHotels] = useState([]);


  
  useEffect(() => {
    const fetchData = () => {
      try {
        setHotels(hotelsData);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };
    fetchData();
  }, []);



  const handlePress = () => 
  {navigation.navigate("HotelDetailsScreen")
};
const handleExplore = (hotelId) => {
 
  navigation.navigate('HotelDetailsScreen', { hotelId });
};
  return (
    <SafeAreaView style={styles.container}>
  
    <ScrollView>
    <FlatList
      data={hotels}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.kartContainer}>
          <Text style={styles.otelAdi}>{item.ad}</Text>
          <Image source={{ uri: item.fotoURL }} style={styles.otelFoto} />
          
       
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handleExplore(item.id)}
          >
            <Text style={styles.buttonText}>Keşfet</Text>
          </TouchableOpacity>
      
        </View>
      )}
    />
   
    </ScrollView>
    <TabBar navigation={navigation} />
  </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  kartContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    backgroundColor:'white',
  },
  otelAdi: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  otelFoto: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  buttonContainer: {
    backgroundColor: 'gold',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

});


export default HomeScreen
