import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {STYLES} from '../constants/General';
import SplashScreen from 'react-native-splash-screen';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import BurgerScreen from '../screens/BurgerScreen';
import PizzaScreen from '../screens/PizzaScreen';
import HeaderBurger from '../components/HeaderBurger';
import HeaderPizza from '../components/HeaderPizza';
import ChaufaScreen from '../screens/ChaufaScreen';
import KfcScreen from '../screens/KfcScreen';
import HeaderChaufa from '../components/HeaderChaufa';
import HeaderKfc from '../components/HeaderKfc';

const Stack = createNativeStackNavigator();
/* function NavStack() {
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  </Stack.Navigator>;
} */

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -25,
      justifyContent: 'center',
      alignContent: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 65,
        height: 65,
        borderRadius: 35,
        backgroundColor: '#F54748',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/images/home.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#F54748' : '#222222',
                }}
              />
              <View style={['STYLES.bottomCircle']}></View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/images/heart.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#F54748' : '#222222',
                }}
              />
              <View style={[STYLES.bottomCircle]}></View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/search.png')}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#ffffff' : '#ffffff',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/images/notification.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#F54748' : '#222222',
                }}
              />
              <View style={[STYLES.bottomCircle]}></View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingCartScreen}
        options={{
          tabBarBadge: 4,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/images/shopping-cart.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#F54748' : '#222222',
                }}
              />
              <View style={[STYLES.bottomCircle]}></View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigation = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Burger"
          component={BurgerScreen}
          options={{
            title: 'Burger',
            headerTitleAlign: 'center',
            headerTintColor: '#222222',
            headerTitle: () => <HeaderBurger />,
          }}
        />
        <Stack.Screen
          name="Pizza"
          component={PizzaScreen}
          options={{
            title: 'Pizza',
            headerTitleAlign: 'center',
            headerTintColor: '#222222',
            headerTitle: () => <HeaderPizza />,
          }}
        />
        <Stack.Screen
          name="Chaufa"
          component={ChaufaScreen}
          options={{
            title: 'Pizza',
            headerTitleAlign: 'center',
            headerTintColor: '#222222',
            headerTitle: () => <HeaderChaufa />,
          }}
        />
        <Stack.Screen
          name="KFC"
          component={KfcScreen}
          options={{
            title: 'Pizza',
            headerTitleAlign: 'center',
            headerTintColor: '#222222',
            headerTitle: () => <HeaderKfc />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
