// HotelDetailsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import hotelsData from '../../Hotels.json';
import TabBar from '../components/TabBar';

const HotelDetailsScreen = ({ route, navigation }) => {
  const { hotelId } = route.params;
  const [hotelDetails, setHotelDetails] = useState(null);

  useEffect(() => {
    const getHotelDetails = () => {
      try {
        const details = hotelsData.find(hotel => hotel.id === hotelId);
        setHotelDetails(details);
      } catch (error) {
        console.error('Otel detayları alınırken bir hata oluştu:', error);
      }
    };

    getHotelDetails();
  }, [hotelId]);


  const handleRoomReservation = () => {
    // Burada oda rezervasyonu yapılacak işlemler eklenmeli
    navigation.navigate('RoomSelectionPage');
    console.log('Oda rezervasyonu yapıldı!');
  };
  if (!hotelDetails) {
    return (
      <SafeAreaView>
        <Text>Yükleniyor...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.hotelName}>{hotelDetails.ad}</Text>
        <Image source={{ uri: hotelDetails.fotoURL }} style={styles.otelFoto} />
        <Text style={styles.featuresLabel}>Özellikler:</Text>
        {hotelDetails.ozellikler.map((feature, index) => (
          <View key={index} style={styles.featureContainer}>
            <AntDesign name="check" size={16} color="green" />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
    
        {hotelDetails.odalar.map((oda, index) => (
          <View key={index} style={styles.roomContainer}>
            <Text style={styles.roomName}>{oda.odaAdi}</Text>
            <Image source={{ uri: oda.odaFotoURL }} style={styles.roomFoto} />
            <Text style={styles.featuresLabel}>Özellikler:</Text>
            {oda.odaOzellikler.map((feature, index) => (
              <View key={index} style={styles.featureContainer}>
                <AntDesign name="check" size={16} color="green" />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
         <Text style={{ ...styles.featuresLabel, textAlign: 'right', color: 'darkblue' }}>Fiyat: {oda.odaFiyat}</Text>
         <TouchableOpacity style={styles.reservationButton} onPress={handleRoomReservation}>
              <Text style={{ color: 'white' }}>Onayla</Text>
            </TouchableOpacity>
          </View>
        ))}
       
      </ScrollView>
      <TabBar navigation={navigation}  />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  featuresLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    margin:10,
    color: 'darkblue',
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    margin:10,
  },
  featureText: {
    marginLeft: 10,
  },
  otelFoto: {
    width: '95%',
    height: 200,
    margin:10,
    
  },
  roomContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  roomFoto: {
    width: '100%',
    height: 150,
    marginVertical: 10,
    resizeMode: "cover"
  },
  reservationButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default HotelDetailsScreen;
