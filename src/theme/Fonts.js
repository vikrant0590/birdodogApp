import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const openSans = {
  ...Platform.select({
    ios: {
      bold: require('../fonts/OpenSans-Bold.ttf'),
      boldItalic: require('../fonts/OpenSans-BoldItalic.ttf'),
      extraBold: require('../fonts/OpenSans-ExtraBold.ttf'),
      extraBoldItalic:require('../fonts/OpenSans-ExtraBoldItalic.ttf'),
      italic: require('../fonts/OpenSans-Italic.ttf'),
      light: require('../fonts/OpenSans-Light.ttf'),
      lightItalic: require('../fonts/OpenSans-LightItalic.ttf'),
      regular: require('../fonts/OpenSans-Regular.ttf'),
      semiBold: require('../fonts/OpenSans-Semibold.ttf'),
      semiBoldItalic: require('../fonts/OpenSans-SemiboldItalic.ttf'),
      
    },
    android: {
      bold: require('../fonts/OpenSans-Bold.ttf'),
      boldItalic: require('../fonts/OpenSans-BoldItalic.ttf'),
      extraBold: require('../fonts/OpenSans-ExtraBold.ttf'),
      extraBoldItalic:require('../fonts/OpenSans-ExtraBoldItalic.ttf'),
      italic: require('../fonts/OpenSans-Italic.ttf'),
      light: require('../fonts/OpenSans-Light.ttf'),
      lightItalic: require('../fonts/OpenSans-LightItalic.ttf'),
      regular: require('../fonts/OpenSans-Regular.ttf'),
      semiBold: require('../fonts/OpenSans-Semibold.ttf'),
      semiBoldItalic: require('../fonts/OpenSans-SemiboldItalic.ttf'),
    }
  })
};


const normalize = (size) => {
  if(pixelRatio == 2 ){
    if(SCREEN_WIDTH == 375){
      return size * (Platform.OS === 'ios' ? 1.05 : size);
    }
    return size * (Platform.OS === 'ios' ? 0.95 : size) ;
  }
  if(pixelRatio == 3){
    return size * (Platform.OS === 'ios' ? 1.15 : size);
  }
  return size;
};



const size = {
  h1: normalize(38),
  h2: normalize(34),
  h3: normalize(30),
  h4: normalize(26),
  h5: normalize(20),
  h6: normalize(18),
  h7: normalize(22),
  h8: normalize(40),
  h9:normalize(15),
  h10: normalize(25),
  input: normalize(18),
  regular: normalize(17),
  medium: normalize(14),
  small: normalize(13),
  tiny: normalize(8.5),
  tab:normalize(9),
 
};

const style = {

  regularFont: {
    fontFamily: openSans,
    fontSize: size.h6,
  },
 
};

export default {
  openSans,
  size,
  style,
}