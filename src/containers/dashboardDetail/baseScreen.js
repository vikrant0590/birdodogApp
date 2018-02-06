import React, {Component} from 'react';
import { Dimensions } from 'react-native';
import { ScreenOrientation } from 'expo';

export default class BaseScreen extends React.Component {
    
  state = {
    isPortrait: true,
  };

  componentWillMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
    Dimensions.addEventListener(
      'change',
      this.orientationChangeHandler.bind(this)
    );
  }

  componentWillUnmount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
    Dimensions.removeEventListener('change', this.orientationChangeHandler);
  }

  orientationChangeHandler(dims) {
    const { width, height } = dims.window;
    const isLandscape = width > height;
    this.setState({ isPortrait: !isLandscape });

    ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
  }

  switchToLandscape =()=> {
   ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE);
    
  }

  switchToPortrait = ()=> {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);

  }
}