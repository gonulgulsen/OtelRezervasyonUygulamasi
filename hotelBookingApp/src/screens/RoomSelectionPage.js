// RoomSelectionPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TabBar from '../components/TabBar';

const RoomSelectionPage = ({ navigation }) => {
  const [reservationInfo, setReservationInfo] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    cardNumber: '',
    cardName: '',
  });

  const handleReservation = () => {

    console.log('Reservation Info:', reservationInfo);
    navigation.navigate('BookingPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reservation Bilgileri</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad"
        onChangeText={(text) => setReservationInfo({ ...reservationInfo, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyadı"
        onChangeText={(text) => setReservationInfo({ ...reservationInfo, surname: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefon Numarası"
        onChangeText={(text) => setReservationInfo({ ...reservationInfo, phoneNumber: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Kart Numarası"
        onChangeText={(text) => setReservationInfo({ ...reservationInfo, cardNumber: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Kart İsim"
        onChangeText={(text) => setReservationInfo({ ...reservationInfo, cardName: text })}
      />
      <Button title="Rezervasyon Yap" onPress={handleReservation} color="green" />
      <TabBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "darkblue",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default RoomSelectionPage;
