import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChaufaScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ChaufaScreen</Text>
    </View>
  );
};

export default ChaufaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
