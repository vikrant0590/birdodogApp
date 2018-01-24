import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './WalkThroughFirstStyles';
import { Images, Metrics} from '../../theme';

export default class WalkThroughFirst extends Component {
  render() {
      
    return (
     
        <View style={{flex:1}}>
          <Image source={ Images.logo } style={{height:Metrics.screenHeight, width:Metrics.screenWidth}} />
        </View>
 
    );
  }
}