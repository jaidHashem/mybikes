import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {SafeAreaView} from 'react-native-safe-area-context';

import Bikes from '../../components/bikes';
import apiService from '../../services/apiService';
import styles from './styles';

export const BikesScreen = ({navigation, route}) => {
  let stationId = route.params.stationId;
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    getBikesByStationId();
  }, []);

  const getBikesByStationId = () => {
    apiService
      .get('/stations/' + stationId + '/bikes', {})
      .then(res => {
        setBikes(res.data);
      })
      .catch(err => {
        Toast.show('Something went wrong, Please try again later');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.topBarContainer}>
          <Icon
            name="arrow-back"
            type="materialIcons"
            color="black"
            size={30}
            containerStyle={{alignSelf: 'flex-start', marginLeft: 10}}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.topBarText}>Available Bikes</Text>
        </View>

        <View style={styles.flatListContainer}>
          <FlatList
            data={bikes}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{margin: 10}}></View>}
            renderItem={({item}) => {
              return <Bikes item={item} />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
