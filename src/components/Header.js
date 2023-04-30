import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/Colors';
import {WIDTH} from '../constants/Dimension';
import {FONT} from '../constants/Typography';
import {
  ChevronDownIcon,
  SparklesIcon,
  UserIcon,
  MapPinIcon,
} from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/FontAwesome5';

const imageMenu = require('../assets/images/menu.png');
const avatar = require('../assets/images/avatar.png');

const Header = () => {
  return (
    <View style={[styles.row, styles.spacer]}>
      <TouchableOpacity style={styles.boxMenu}>
        <Image source={imageMenu} style={styles.menu} />
      </TouchableOpacity>
      <View style={styles.location}>
        <Icon name="map-marker-alt" size={20} color={COLOR.red} />
        <Text style={styles.locationText}>Lima, PER</Text>
        <Icon name="angle-down" size={18} color={COLOR.yellow} />
      </View>
      <View>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image source={avatar} style={styles.avatar} resizeMode="cover" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    justifyContent: 'space-between',
    width: WIDTH,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  boxMenu: {
    width: 45,
    height: 45,
    backgroundColor: COLOR.whiteLight,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    width: 30,
    height: 30,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    ...FONT.location,
    marginHorizontal: 8,
  },
  avatarContainer: {
    width: 45,
    height: 45,
    backgroundColor: COLOR.whiteLight,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
  },
});
