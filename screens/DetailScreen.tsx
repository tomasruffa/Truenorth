import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import {getCurrencie} from '../api/config'

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets/{id}
 * API Example: https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

const windowWidth = Dimensions.get('window').width - 40;

export default function ListScreen() {
  /* ToDo: Get the id param from the route */
  const navigation = useNavigation()
  const route = useRoute();
  const item = route.params?.id;
  const arrows = {
    down: require('../assets/redArrow.png'),
    up: require('../assets/greenArrow.png')
  }

  const [currentItem, setCurrentItem] = useState()

  useEffect(() => {
    getCurrencie(item).then((results) => {setCurrentItem(results.data.data) });
  }, [])

  return (
    <View style={styles.container}>
      {currentItem ? (
        <>
        <View style={styles.itemContainer}>
          <View style={styles.itemHeader}>
            <View >
              <Text style={styles.itemHeaderTitle}>{currentItem.symbol} - <Text style={styles.itemHeaderTitleName}>{currentItem.name}</Text></Text>
            </View>
            <Text style={styles.itemHeaderRank}>#{currentItem.rank}</Text>
          </View>
          <View style={[styles.itemHeader, {marginBottom: 20}]}>
            {/* 💯  In this execercise you can round numbers without a library */}
            <View>
              <Text style={styles.itemPrice}>$ {parseInt(currentItem.priceUsd).toFixed(2)} <Text style={styles.itemPriceType}>USD</Text></Text>
            </View>
            <View style={[styles.circleArrow, { backgroundColor: currentItem.changePercent24Hr.charAt(0) === '-' ? '#FDDCDC' : '#D1FAE5' }]}>
              <Text><Image source={currentItem.changePercent24Hr.charAt(0) === '-' ? arrows.down : arrows.up} /> {parseInt(currentItem.changePercent24Hr).toFixed(1)}%</Text>
            </View>
          </View>
          <View style={[styles.itemHeader, {marginBottom: 10}]}>
            <Text>Supply {parseInt(currentItem.supply).toFixed(2)}</Text>
          </View>
          <View style={[styles.itemHeader, {marginBottom: 10}]}>
            <Text>Max Supply {parseInt(currentItem.maxSupply).toFixed(2)}</Text>
          </View>
          <View style={[styles.itemHeader, {marginBottom: 10}]}>
            <Text>Market Cap $ {parseInt(currentItem.marketCapUsd).toFixed(2)} <Text style={styles.itemPriceType}>USD</Text></Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Wallet')}>
          <Text style={styles.buttonText}>My Wallet</Text>
        </TouchableOpacity>
        </>
      ): (
        <Text>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30
  },
  itemContainer: {
    backgroundColor: '#fff',
    marginVertical: 6,
    padding: 20,
    
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center'
  },
  itemHeaderTitle: {
    fontWeight: 'bold'
  },
  itemHeaderTitleName: {
    fontWeight: 'normal',
  },
  itemHeaderRank: {
    color: '#6B7280',
    paddingRight: 15
  },
  itemPrice: {
    color: '#019FB5',
    fontWeight: 'bold',
    fontSize: 24
  },
  itemPriceType: {
    color: '#6B7280',
    fontWeight: 'normal',
    fontSize: 14
  },
  circleArrow: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 12,
  },
  button: {
    backgroundColor: '#5dc1d8',
    width: windowWidth - 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

const mockData = {
  data: {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: '17193925.0000000000000000',
    maxSupply: '21000000.0000000000000000',
    marketCapUsd: '119179791817.6740161068269075',
    volumeUsd24Hr: '2928356777.6066665425687196',
    priceUsd: '6931.5058555666618359',
    changePercent24Hr: '-0.8101417214350335',
    vwap24Hr: '7175.0663247679233209',
  },
};
