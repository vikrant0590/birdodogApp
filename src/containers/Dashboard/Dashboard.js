import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button,} from 'native-base';
import styles from './DashboardStyles';
import { Actions as NavActions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { ApplicationStyles, Colors, Metrics, Images , Fonts} from '../../theme';

const propTypes = {
  homeSection: PropTypes.any,

};

export default class Dashboard extends Component {

  componentWillMount () {
    this.props.homeSection;
}

    render(){
      var video = [];
      for(let i = 0; i < 6; i++){
        video.push(
          <View style={{ flex:1,}} key={i}>
        
            <View style={{flex:1,height:Metrics.screenHeight/6,flexDirection:'row',
            marginLeft:Metrics.screenWidth/25,marginRight:Metrics.screenWidth/25,marginTop:12, }}>
               
               <TouchableOpacity onPress={NavActions.dashboarddetail} style={{height:Metrics.screenHeight/6,width:Metrics.screenWidth/2.3, }}>
                 <Image source={Images.signin} style={{height:Metrics.screenHeight/6,width:Metrics.screenWidth/2.3,resizeMode:'stretch'}}/>
               </TouchableOpacity>  


               <View style={{height:Metrics.screenHeight/6,width:Metrics.screenWidth/2.2,
               
                 flexDirection:'column',
                  marginLeft:Metrics.screenWidth/30}}>
                  <View  style={{alignItems:'flex-start',justifyContent:"center",marginTop:Metrics.screenHeight/120,flex:0.2 }}>
                     <Text style={{color:'#333333', fontSize:13,}}>Training Video 1 </Text>
                  </View>

                  <View style={{flex:0.5 }}>
                     <Text style={{color:'#878787', fontSize:9}}>Sed ut perspiciatis unde omins iste natus error sit voluptatem accusantitum dolor- emque laudantium...</Text>
                  </View>  

                  <View style={{ flex:0.3,}}>
                   <TouchableOpacity style={{alignItems:'center', flexDirection:'row',}} onPress={NavActions.dashboarddetail}>
                   <Image source={Images.viewdetail} style={{marginRight:Metrics.screenWidth/60}}/>
                   <Text style={{fontSize:9, color:'#333333', justifyContent:'center'}}>View Detail</Text>
                  </TouchableOpacity>

                  </View>  

                 
              </View> 
          </View>

            <View style={{marginTop:12,height:1, backgroundColor:'#878787'}}>

            </View>
         </View>
        )
      }
  
        return(
          <Content>
        <View style={{marginTop:Metrics.navBarHeight, flex:1, }}>
         { video}
      </View>
      </Content>
      
        
    
    );
  }
}
    
 