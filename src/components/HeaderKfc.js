import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/Colors';
import {FONT} from '../constants/Typography';

const KfcIcon = require('../assets/images/kfc.png');
const HeaderKfc = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>KFC</Text>
      <Image source={KfcIcon} style={styles.image} />
    </View>
  );
};

export default HeaderKfc;

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
