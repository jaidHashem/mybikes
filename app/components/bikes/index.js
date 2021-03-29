import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import Toast from 'react-native-simple-toast';

const Bikes = ({item}) => (
  <View style={styles.bikeContainer}>
    <Text>Name: {item.name}</Text>
    <Text>Battery: {item.battery}%</Text>
    <Text>Availabile: {item.availability ? 'Yes' : 'No'}</Text>
    <Button
      disabled={item.availability}
      containerStyle={styles.buttonContainer}
      onPress={() => {
        Toast.show('Booking your bike, you will get notification shortly');
      }}
      title="Book Bike"
    />
  </View>
);

const styles = StyleSheet.create({
  bikeContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    padding: 10,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default Bikes;
