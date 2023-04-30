import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BurgerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BurgerScreen</Text>
    </View>
  );
};

export default BurgerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
