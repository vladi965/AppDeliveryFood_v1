import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/Colors';
import {FONT} from '../constants/Typography';

const ChaufaIcon = require('../assets/images/rice.png');
const HeaderChaufa = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>Chaufa</Text>
      <Image source={ChaufaIcon} style={styles.image} />
    </View>
  );
};

export default HeaderChaufa;

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
