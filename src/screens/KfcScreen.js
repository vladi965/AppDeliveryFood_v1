import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const KfcScreen = () => {
  return (
    <View style={styles.container}>
      <Text>KfcScreen</Text>
    </View>
  );
};

export default KfcScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
