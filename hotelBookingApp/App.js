import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HotelDetailsScreen from './src/screens/HotelDetailsScreen';
import RoomSelectionPage from './src/screens/RoomSelectionPage';
import ProfilePage from './src/screens/ProfilePage';
import BookingPage from './src/screens/BookingPage';
import PastBookingPage from './src/screens/PastBookingPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
    <StatusBar style="light" />
    <Stack.Navigator initialRouteName="ProfilePage">
      <Stack.Screen
        name="Home"
        options={{ title: "Individual Guide", headerTintColor: "gold", headerStyle: { backgroundColor: 'black' },headerTitleAlign: 'center', }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="HotelDetailsScreen"
        options={{ title: "Hotel Detaylar Ekranı", headerTintColor: "dodgerblue" }}
        component={HotelDetailsScreen}
      />
         <Stack.Screen
        name="RoomSelectionPage"
        options={{ title: "Oda Seçimi", headerTintColor: "dodgerblue" }}
        component={RoomSelectionPage}
      />
         <Stack.Screen
        name="ProfilePage"
        options={{ title: "Profil Sayfası", headerTintColor: "dodgerblue" }}
        component={ProfilePage}
      />
         <Stack.Screen
        name="BookingPage"
        options={{ title: "Rezervasyon Ekranı", headerTintColor: "dodgerblue" }}
        component={BookingPage}
      />
   <Stack.Screen
        name="PastBookingPage"
        options={{ title: "Geçmiş Rezervasyon Ekranı", headerTintColor: "dodgerblue" }}
        component={PastBookingPage}
      />










    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
