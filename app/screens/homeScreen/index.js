import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 23.810331,
          longitude: 90.412521,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: 23.810331, longitude: 90.412521}}>
          <View style={{backgroundColor: 'red', padding: 10}}>
            <Text>SF</Text>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};
