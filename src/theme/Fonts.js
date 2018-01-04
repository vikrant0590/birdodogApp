import { Dimensions, Platform, PixelRatio } from 'react-native';
import { Font, } from 'expo';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();


async function openSans() {
  if(Platform.OS ==='ios'){
    
 
  await Expo.Font.loadAsync({
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
    base: 'Lato-Regular',
    bold: 'Lato-Bold',
    emphasis: 'Lato-Italic',
    heavy: 'Lato-Heavy',
    light: 'Lato-Light',
    medium: 'Lato-Medium',
    semiBold: 'Lato-Semibold',
    thin: 'Lato-Thin',
    
  });
}else {
  await Expo.Font.loadAsync({
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
   

  
  });

}
}




const normalize = (size) => {
  if (pixelRatio == 2) {
      if (SCREEN_WIDTH == 375) {
          return size * (Platform.OS === 'ios' ? 1 : 1.02);
      }
      return size * (Platform.OS === 'ios' ? 0.95 : 1);
  }
  if (pixelRatio == 3) {
      return size * (Platform.OS === 'ios' ? 1 : 1);
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
  input: normalize(18),
  regular: normalize(17),
  medium: normalize(14),
  small: normalize(13),
  tiny: normalize(8.5)
};

const style = {

  regularFont: {
      fontFamily: openSans.emphasis,
      fontSize: size.medium,
  },
};

export default {
  openSans,
  size,
  style,
}