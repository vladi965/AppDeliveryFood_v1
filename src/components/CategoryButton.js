import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {FONT} from '../constants/Typography';
import {COLOR} from '../constants/Colors';
import {categories} from '../contents/Categories';

const CategoryButton = ({image, name, selected, onPress, buttonStyle}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: selected ? COLOR.red : COLOR.lightGray,
      }}
      onPress={onPress}>
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: selected ? COLOR.white : COLOR.lightGray,
        }}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text
          style={{...styles.name, color: selected ? COLOR.white : COLOR.black}}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'space-between',
    marginTop: 15,
    marginRight: 10,
  },
  image: {
    height: 15,
    width: 15,
  },
  iconContainer: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    ...FONT.category,
  },
  nameContainer: {
    width: 90,
    alignItems: 'center',
  },
});
