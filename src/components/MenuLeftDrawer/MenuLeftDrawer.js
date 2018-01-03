import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Button, Icon, Grid, Col, Row ,Body,Card, List, ListItem, H3,Left,Right} from 'native-base';
import { View, Text, Image, Platform, TouchableOpacity, Switch, Share } from 'react-native'
import { Colors, Images, Metrics } from '../../theme';
import styles from './MenuLeftDrawerStyles';



import { Actions as NavActions } from 'react-native-router-flux';
const propTypes = {
  homeSection: PropTypes.any,

};

export default class MenuLeftDrawer extends Component {


    
      static contextTypes = {
    
        drawer: PropTypes.object,
      };

      onPress = (item) => {
          console.log("INDEX", item.index);
        if(item.index === 0){
          this.props.homeSection();
       NavActions.dashboard();
        }
        else if(item.index === 1){
          this.props.homeSection();
            NavActions.newlead();
          }
        else if(item.index === 2){
          this.props.homeSection();
          NavActions.tracklead();
        }
        else if(item.index === 3){
          this.props.homeSection();
         NavActions.mymoney();
        }
        else if(item.index === 4){
          this.props.homeSection();
          NavActions.myprofile();
        }
        else if(item.index === 5){
          this.props.homeSection();
            NavActions.settings();
          }
      };
    
    
  
  render() {

    
    const items = [
        {index: 0, title: 'Dashboard',image:require('../../images/menu.png')},
        {index: 1, title: 'New Lead', image:require('../../images/addsidenav.png')},
        {index: 2, title: 'Track Lead', image:require('../../images/locationsidenav.png')},
        {index: 3, title: 'My Money', image:require('../../images/moneybagsidenav.png')},
        {index: 4, title: 'My Profile', image:require('../../images/usersidenav.png')},
        {index: 5, title: 'Settings', image:require('../../images/settingsidenav.png')}];
    return(
          <View style={{flex:1,flexDirection:"column"}}>

                 <View style={{flex:0.15,backgroundColor:'#212121',flexDirection:'row', alignItems:"center"}}>
                 <View style={{borderRadius: 30,width: 60,height: 60, 
                   backgroundColor:'#74930A',marginLeft:Metrics.screenWidth/25, justifyContent:"center",alignItems:"center"}}>
                  <H3 style={{color:'white',  backgroundColor:'transparent'}}>P</H3>
                </View>
            <View style={{flex:1,marginLeft:5}}>
             <Text style={{color:'white',fontSize:15}}>Philp Health</Text>
            </View>
            <View style={{marginRight:Metrics.screenWidth/14}}>
            <TouchableOpacity>
            <Image source={Images.logoutnavbar}/>
            </TouchableOpacity>
           </View>
         </View>

         <View style={{flex:0.85, backgroundColor:'#333333'}}>
         
         <View style={styles.listContainer}>
  
           <List
              
             dataArray={items}
             renderRow={(item) =>
               <ListItem
                 style={{
                   height:Metrics.screenHeight/10,
                   alignItems: 'center',
                   justifyContent: 'center',
                   marginLeft: 1,
                   borderColor: '#494949',
                   backgroundColor:"transparent"
               
                 }}>
                 <TouchableOpacity
                   onPress={ () => this.onPress(item)}
                   hitSlop={{top: 15, bottom: 20, right: 300}}
                   style={{flexDirection: 'row', justifyContent: 'center',alignItems:"center"}}>
                   <Left
                     style={{
                       justifyContent: 'center',
                       top: 8,
                       marginLeft:Metrics.screenWidth/30
                     }}>

                     <Image source={item.image}></Image>
               
                     <Text style={styles.itemList}>{item.title}</Text>
                   </Left>
                   <Right
                     style={{
                       marginRight: 5,
                     }}>
                     <Image source={Images.rightarrow} ></Image>
             
                   </Right>
                 </TouchableOpacity>
               </ListItem>
             }
           />
    
       </View>

        </View>

        
         </View>
       
    );
  }
}
