import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../constants/Colors';
import {STYLES} from '../constants/General';

const NotificationScreen = () => {
  return (
    <View style={STYLES.container}>
      <Text style={SIZES.p}>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
