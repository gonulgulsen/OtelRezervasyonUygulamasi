import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TabBar from '../components/TabBar';

const PastBookingPage = ({ navigation }) => {
  // Örnek geçmiş rezervasyon verileri
  const pastBookings = [
    { id: '1', hotel: 'Hotel A', date: '2022-01-01' },
    { id: '2', hotel: 'Hotel B', date: '2022-02-15' },
    // Daha fazla geçmiş rezervasyon ekleyebilirsiniz
  ];

  // Kullanıcının adı ve soyadı
  const userName = 'John Doe';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geçmiş Rezervasyonlar</Text>
      <Text style={styles.userName}>{userName}</Text>

      <FlatList
        data={pastBookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text style={styles.bookingText}>{item.hotel}</Text>
            <Text style={styles.bookingText}>{item.date}</Text>
          </View>
        )}
      />
      <TabBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
  },
  bookingText: {
    fontSize: 16,
  },
});

export default PastBookingPage;
