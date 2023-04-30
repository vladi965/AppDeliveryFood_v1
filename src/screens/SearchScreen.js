import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../constants/Colors';
import {STYLES} from '../constants/General';

const SearchScreen = ({navigation}) => {
  return (
    <View style={STYLES.container}>
      <Text style={SIZES.p}>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
