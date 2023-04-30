import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../constants/Colors';
import {STYLES} from '../constants/General';

const ShoppingCartScreen = () => {
  return (
    <View style={STYLES.container}>
      <Text style={SIZES.p}>ShoppingCartScreen</Text>
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({});
