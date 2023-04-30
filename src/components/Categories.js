import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/Colors';
import {FONT} from '../constants/Typography';
import {WIDTH} from '../constants/Dimension';
import {categories} from '../contents/Categories';
import CategoryButton from './CategoryButton';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  console.log(selectedCategory);

  const renderCategories = ({item, index}) => {
    return (
      <CategoryButton
        image={item.image}
        name={item.name}
        selected={selectedCategory === item.name}
        onPress={() => {
          navigation.navigate(`${item.name}`);
        }}
        buttonStyle={{marginLeft: index === 0 ? 20 : 0}}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategories}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: WIDTH,
    paddingVertical: 10,
  },
  sectionTitle: {
    ...FONT.contentTitle,
    color: COLOR.black,
    paddingLeft: 20,
  },
});
