import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PizzaScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PizzaScreen</Text>
    </View>
  );
};

export default PizzaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
