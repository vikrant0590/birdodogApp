import React, { Component} from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { Container, Content, Button, Icon, Grid, Col, Row ,Body,Card, List, ListItem, H3,Left,Right} from 'native-base';
import { ApplicationStyles, Colors, Metrics } from '../../theme';
import {  Actions as NavActions } from 'react-native-router-flux';
import styles from './FaqStyles';

export default class Faq extends Component {
    constructor(props){
        super();
        this.state = {
            upgrade:false,
            delete:false,
            add:false,
            contact:false,
            password:false,
            address:false
        };
        
    }

    onPress = (item, Itemlength, items) => {

      if(item.index === 0){
         this.setState({
             upgrade:!this.state.upgrade,
             delete:false,
             add:false,
             contact:false,
             password:false,
             address:false
         })        
      }
      else if(item.index === 1){
            this.setState({
                delete:!this.state.delete,
                upgrade:false,
                add:false,
                contact:false,
                password:false,
                address:false
                
            })

        }
      else if(item.index === 2){
        this.setState({
            add:!this.state.add,
            upgrade:false,
            delete:false,
            contact:false,
            password:false,
            address:false
        })

       
      }
      else if(item.index === 3){
        this.setState({
            contact:!this.state.contact,
            upgrade:false,
            delete:false,
            add:false,
            password:false,
            address:false
        })

    
      }
      else if(item.index === 4){
        this.setState({
            password:!this.state.password,
            upgrade:false,
            delete:false,
            add:false,
            contact:false,
            address:false
        })

      }
      else if(item.index === 5){
        this.setState({
            address:!this.state.address,
            upgrade:false,
            delete:false,
            add:false,
            contact:false,
            password:false,
            
        })

      }
   
    };

    render(){
        const items = [
            {index: 0, question: 'How can I upgrade my account?',answer:'You can upgrade your account by using you can upgrade your account by using you can upgrade your account by using',clicked:this.state.upgrade},
            {index: 1, question: 'How can I delete my account?',answer:'You can delete your account by using',clicked:this.state.delete },
            {index: 2, question: 'How I add new lead?' ,answer:'You can add new lead by using "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ', clicked:this.state.add},
            {index: 3, question: 'How I contact BirdDog?',answer:'You can contact BirdDog', clicked:this.state.contact},
           {index:4, question:'How can I change my password?',answer:'You can change your password by just clicking', clicked: this.state.password},
           {index:5, question:'How can I change my address?',answer:'You can change your address ',clicked:this.state.address}];


        return (
            <View 
            style={{
                flex:1,
                marginTop:Metrics.navBarHeight,
                 marginLeft:Metrics.screenWidth/30,
                 marginRight:Metrics.screenWidth/30}}>
            <List
            dataArray={items}
            renderRow={(item) =>
     <ListItem
             style={{
             //alignItems: 'center',
             //justifyContent: 'center',
             marginLeft: 1,

             borderColor: 'gray',
             backgroundColor:"transparent",
             flexDirection:"column"
   
     }}>
  

         <TouchableOpacity
       onPress={ () => this.onPress(item,items.length, items)}
       hitSlop={{top: 12, left: 36, bottom: 0, right: 0}}
       style={{flex:1,flexDirection: 'row', justifyContent: 'center',alignItems:"center",}}>
       <Left
         style={{
           justifyContent: 'center',
           top: 8,
          
         }}>
         <Text style={{ flex:1,
        color: 'black',
        height:30,
        alignSelf:"center",
        justifyContent:'center',
       
        fontSize:13,
        color: item.clicked === false ? '#9B9B9B' : "black"}}
        >
        {item.question}</Text>
       </Left>
       <Right
         style={{
         // marginRight: -Metrics.screenWidth/40,
          
         }}>
        
         <Icon name = {item.clicked === false ? "ios-arrow-forward": "ios-arrow-down"} style={{ color: item.clicked === false ? '#9B9B9B' : '#8CB102', }} />
       </Right>
      
        </TouchableOpacity> 
        {(item.clicked === true) &&
        <View style={{alignSelf:"flex-start"}}>
       <Text style={{color:'#9B9B9B',fontSize:11}}>{item.answer}</Text>
       </View>
        
        }
   </ListItem>
     }
     />
</View>

)
}
}