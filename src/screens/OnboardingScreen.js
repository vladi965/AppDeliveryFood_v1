import {
  View,
  Image,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import {COLOR} from '../constants/Colors';
import {SIZES} from '../constants/Colors';
import {STYLES} from '../constants/General';

const {width, height} = Dimensions.get('window');
const imageFondo = require('../assets/images/fondo-slides.png');
const imageBox = require('../assets/images/box-content.png');
const imageArrow = require('../assets/images/arrow-right-white.png');

const slides = [
  {
    id: '1',
    image: require('../assets/images/onboarding1.png'),
    title: 'Delicious and tasty',
    parraghy: 'Food',
    subtitle:
      'Our job is to provide you with a delicious and unique experience.',
  },
  {
    id: '2',
    image: require('../assets/images/onboarding2.png'),
    title: 'The best quality in',
    parraghy: 'Food',
    subtitle:
      'Our job is to provide you with a delicious and unique experience.',
  },
  {
    id: '3',
    image: require('../assets/images/onboarding3.png'),
    title: 'The Fastest in Delivery',
    parraghy: 'Food',
    subtitle:
      'Our job is to provide you with a delicious and unique experience.',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item.image}
        style={{
          height: '70%',
          width,
          resizeMode: 'contain',
          marginTop: 20,
        }}
      />
      <ImageBackground source={imageBox} style={STYLES.contentBoxSlide}>
        <View style={STYLES.contentTitle}>
          <Text style={{textAlign: 'center'}}>
            <Text style={[SIZES.title]}>{item.title}</Text>
            <Text style={[SIZES.parraghy]}>{item.parraghy}</Text>
          </Text>
          <Text style={SIZES.subtitle}>{item.subtitle}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.2,
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          backgroundColor: COLOR.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                STYLES.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLOR.yellow,
                  width: 25,
                  height: 10,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 30}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Welcome')}
                style={[STYLES.btnStarted]}>
                <Text style={SIZES.h7}>GET STARTED</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={skip} style={[]}>
                <Text style={[SIZES.h8, STYLES.skip]}>SKIP</Text>
              </TouchableOpacity>
              <View style={{width: 10}} />
              <TouchableOpacity style={[STYLES.btn]} onPress={goNextSlide}>
                <Image source={imageArrow} style={{width: 25}} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
    /* console.log(currentIndex); */
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
    /* console.log(lastSlideIndex); */
  };

  return (
    <ImageBackground source={imageFondo} style={STYLES.imageBack}>
      <SafeAreaView>
        <StatusBar />
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          data={slides}
          contentContainerStyle={{height: height * 0.78}}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnboardingScreen;
