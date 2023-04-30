import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {FONT} from '../constants/Typography';
import {COLOR} from '../constants/Colors';
import {WIDTH, HEIGHT} from '../constants/Dimension';

const ProductCard = ({title, subtitle, price, image, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={[styles.container, styles.shadow]}>
        <View style={styles.detail}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.currency}>$</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    margin: 5,
    paddingHorizontal: 5,
    paddingVertical: 70,
    borderRadius: 28,
    alignItems: 'center',
    width: WIDTH * 0.415,
    height: HEIGHT * 0.235,
    marginLeft: 20,
    zIndex: 1,
    marginTop: -80,
  },
  shadow: {
    shadowColor: COLOR.gray,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.5,
    elevation: 4,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  image: {
    marginLeft: 15,
    width: 140,
    height: 140,
  },
  detail: {
    alignItems: 'center',
  },
  title: {
    ...FONT.contentTitle,
    marginBottom: 2,
    textAlign: 'center',
  },
  subtitle: {
    ...FONT.contentText,
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  currency: {
    color: COLOR.red,
    ...FONT.price,
    fontSize: 16,
    marginRight: 3,
    fontWeight: 'bold',
  },
  price: {
    ...FONT.price,
    fontSize: 25,
    fontWeight: 'bold',
    color: COLOR.black,
  },
});
