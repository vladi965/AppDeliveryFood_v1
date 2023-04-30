import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/Colors';
import {FONT} from '../constants/Typography';

const OrderButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Order Now</Text>
    </TouchableOpacity>
  );
};

export default OrderButton;

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 7.5,
    backgroundColor: COLOR.red,
    alignItems: 'center',
    borderRadius: 70,
  },
  buttonText: {
    ...FONT.button,
    color: COLOR.white,
  },
});
