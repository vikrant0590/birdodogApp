import React,{ Component} from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';
import { Container, Content, Button, Icon, Grid, Col, Row ,Body,Card, List, ListItem, H3,Left,Right} from 'native-base';
import styles from './SettingsStyles';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import {  Actions as NavActions } from 'react-native-router-flux';

export default class Settings extends Component {

    onPress = (item) => {
        console.log("INDEX", item.index);
      if(item.index === 0){
     NavActions.changePassword();
      }
      else if(item.index === 1){
          NavActions.faq();
        }
      else if(item.index === 2){
     NavActions.termsCondition();
      }
      else if(item.index === 3){
       NavActions.help();
      }
     
   
    };

    render(){
        const items = [
            {index: 0, title: 'Change Password', image:require('../../images/lockgreen.png')},
            {index: 1, title: 'FAQ', image:require('../../images/logout.png')},
            {index: 2, title: 'Terms & Conditions',  image:require('../../images/logout.png')},
            {index: 3, title: 'Sign out',  image:require('../../images/logout.png')}];
        return(
          <Container style={{flex:1,marginTop:Metrics.navBarHeight, flexDirection:'column'}}>
            <View style={{flex:1}}>
                       
                        <List
             dataArray={items}
             renderRow={(item) =>
               <ListItem
                 style={{
                   alignItems: 'center',
                   justifyContent: 'center',
                   marginLeft: 1,
                   borderColor: '#A3A3A3',
                   backgroundColor:"transparent",
              
               
                 }}>
                 <TouchableOpacity
                   onPress={ () => this.onPress(item)}
                   hitSlop={{top: 12, left: 36, bottom: 0, right: 0}}
                   style={{flexDirection: 'row', justifyContent: 'center',alignItems:"center"}}>
                   <Left
                     style={{
                       justifyContent: 'center',
                       top: 8,
                       marginLeft:Metrics.screenWidth/25
                     }}>
             <Image source={item.image}></Image>
                     <Text style={styles.itemList}>{item.title}</Text>
                   </Left>
                   <Right
                     style={{
                       marginRight: 5,
                     }}>
                     {(item.index < 3) &&
                     <Image source={Images.arrowRight} ></Image>
                     }
             
                   </Right>
                 </TouchableOpacity>
               </ListItem>
                 }
                 />
            </View>
            


      
            </Container>
        )
    }
}