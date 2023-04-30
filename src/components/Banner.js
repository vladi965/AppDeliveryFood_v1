import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/Colors';
import {FONT} from '../constants/Typography';
import {WIDTH} from '../constants/Dimension';
import OrderButton from './OrderButton';

const deliveryImage = require('../assets/images/delivery-food.png');

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={styles.center}>
          <View style={styles.text}>
            <Text style={FONT.contentTitle}>The Fastest in</Text>
            <Text style={FONT.contentTitle}>
              Delivery
              <Text style={styles.red}> Food</Text>
            </Text>
          </View>
          <OrderButton />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={deliveryImage}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR.lightYellow,
    borderRadius: 15,
    justifyContent: 'space-around',
  },
  text: {
    height: 50,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  red: {
    color: COLOR.red,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  image: {
    width: 133,
    height: 133,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    paddingRight: 25,
  },
});
