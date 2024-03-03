

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const TabBar = ({ navigation }) => {
  return (
    <View style={{    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10, 
    backgroundColor: 'black',
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
           <AntDesign name="home" size={24} color="gold" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PastBookingPage')}>
      <AntDesign name="calendar" size={24} color="gold" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
        <AntDesign name="user" size={24} color="gold" />
      </TouchableOpacity>
    
    </View>
  );
};

export default TabBar;
