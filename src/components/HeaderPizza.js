import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/Colors';
import {FONT} from '../constants/Typography';

const PizzaIcon = require('../assets/images/pizza.png');
const HeaderPizza = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>Pizza</Text>
      <Image source={PizzaIcon} style={styles.image} />
    </View>
  );
};

export default HeaderPizza;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
  },
  title: {
    ...FONT.headerTitle,
    color: COLOR.black,
    paddingRight: 5,
  },
  image: {
    width: 20,
    height: 20,
  },
});
