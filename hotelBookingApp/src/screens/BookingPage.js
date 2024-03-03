// BookingPage.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import TabBar from '../components/TabBar';

const BookingPage = ({ navigation }) => {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleConfirmation = () => {
    setConfirmationMessage('Rezervasyonunuz yapıldı.');
    showAlert('İşlem Onaylandı', 'Rezervasyonunuz yapıldı.');
  };

  const handleCancellation = () => {
    setConfirmationMessage('İşleminiz başarıyla iptal edildi.');
    showAlert('İşlem İptal Edildi', 'İşleminiz başarıyla iptal edildi.');
  };

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [{ text: 'Tamam', onPress: () => console.log('Alert kapandı') }],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>İşlemi Onaylamak İstiyor musunuz?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: 'gray' }}
          onPress={handleCancellation}
          onLongPress={() => console.log('Long Pressed Cancel')}
        >
          <Text style={{ color: 'white' }}>İptal Et</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: 'gray' }}
          onPress={handleConfirmation}
          onLongPress={() => console.log('Long Pressed Confirm')}
        >
          <Text style={{ color: 'white' }}>Onayla</Text>
        </TouchableOpacity>
      </View>
      {confirmationMessage !== '' && (
        <Text style={styles.confirmationText}>{confirmationMessage}</Text>
      )}
        <TabBar navigation={navigation} />
    </View>
  
  );
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    margin: 8,
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 18,
    marginTop: 16,
    color: 'green',
  },
});

export default BookingPage;
