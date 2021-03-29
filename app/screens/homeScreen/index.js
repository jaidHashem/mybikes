import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon, Overlay, Button} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {BIKES_SCREEN} from '../../constants/navigationConstants';
import apiService from '../../services/apiService';
import styles from './styles';

export const HomeScreen = ({navigation}) => {
  const [location, setLocation] = useState({
    latitude: 23.810331,
    longitude: 90.412521,
  });
  const [statios, setStations] = useState([]);
  const [selectedStation, setSelecteddStations] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getStations();
  }, []);

  const getStations = () => {
    apiService
      .get('/stations', {})
      .then(res => {
        setStations(res.data);
      })
      .catch(err => {
        Toast.show('Something went wrong, Please try again later');
      });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        provider={PROVIDER_GOOGLE}
        onCalloutPress={() => console.log('iam here')}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {statios.map((station, index) => (
          <Marker
            key={station.id}
            onPress={() => {
              setSelecteddStations(index);
              setModalVisible(true);
              setLocation({
                latitude: parseFloat(statios[index].latitude),
                longitude: parseFloat(statios[index].longitude),
              });
            }}
            coordinate={{
              latitude: parseFloat(station.latitude),
              longitude: parseFloat(station.longitude),
            }}>
            <Icon
              name="electric-bike"
              type="materialIcons"
              color="black"
              size={30}
            />
          </Marker>
        ))}
      </MapView>

      <Overlay
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        overlayStyle={styles.overLayContainer}>
        <Icon
          name="close"
          type="materialIcons"
          color="black"
          size={20}
          containerStyle={{alignSelf: 'flex-end'}}
          onPress={() => setModalVisible(false)}
        />
        <View>
          <Text>Station Name: {statios[selectedStation]?.name}</Text>
          <Text>
            Bikes Available:{' '}
            {statios[selectedStation]?.number_of_available_bikes}
          </Text>
        </View>
        <Button
          containerStyle={styles.buttonContainer}
          onPress={() => {
            setModalVisible(false);
            navigation.navigate(BIKES_SCREEN, {
              stationId: parseInt(statios[selectedStation]?.id),
            });
          }}
          title="Show Bike"
        />
      </Overlay>
    </View>
  );
};
