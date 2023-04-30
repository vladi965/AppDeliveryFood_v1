import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {FONT} from '../constants/Typography';
import {COLOR} from '../constants/Colors';
import {WIDTH} from '../constants/Dimension';
import ProductCard from './ProductCard';
import {popularNow} from '../contents/PopularNow';

const arrowRight = require('../assets/images/arrow-right.png');
const PopularNow = () => {
  const renderPopularNow = ({item}) => {
    return (
      <ProductCard
        title={item.title}
        subtitle={item.subtitle}
        price={item.price}
        image={item.image}
        key={item.id}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Now</Text>
        <TouchableOpacity style={styles.viewAllContainer}>
          <View style={styles.iconContainer}>
            <Image source={arrowRight} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={popularNow}
        renderItem={renderPopularNow}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularNow;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingBottom: 40,
    width: WIDTH - 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WIDTH + 60,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  sectionTitle: {
    ...FONT.contentTitle,
    color: COLOR.black,
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 90,
  },
  iconContainer: {
    backgroundColor: COLOR.lightGray,
    borderRadius: 8,
    padding: 5,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
});
