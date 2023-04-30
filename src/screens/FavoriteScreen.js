import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../constants/Colors';
import {STYLES} from '../constants/General';

const FavoriteScreen = ({navigation}) => {
  return (
    <View style={STYLES.container}>
      <Text style={SIZES.p}>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
