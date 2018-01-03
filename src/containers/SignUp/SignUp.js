import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button,Icon} from 'native-base';
import styles from './signupStyles';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';

export default class Signup extends Component {
  
    render(){
        return(
    
          <Content>
        <View style={styles.container}> 
       
          <View style={{flex:1,flexDirection:"column",marginTop:Metrics.navBarHeight}}>
            <View style={{flex:1,marginTop:Metrics.screenHeight/15,marginBottom:Metrics.screenHeight/50}}>
               <Text>Personal Information</Text>
            </View>

            <View style={{flex:1}}> 
               <Item >
                 <Icon name="ios-person-outline" style={{ color: '#8CB102',marginRight:Metrics.screenWidth/30 }} />
                 <Input placeholder="Name" placeholderTextColor={'#A3A3A3'}/>
             </Item>
        
               <Item style={{marginTop:Metrics.screenHeight/50}}>
               <Image source={Images.message} style={{resizeMode:'contain', marginRight:Metrics.screenWidth/30}}/>
                 <Input  placeholder="Email"  placeholderTextColor={'#A3A3A3'} />
              </Item>

             
              <Item style={{marginTop:Metrics.screenHeight/50}}>
                <Image source={Images.phone}  style={{resizeMode:'contain', marginRight:Metrics.screenWidth/30}} />
                <Input  placeholder="Phone Number"  placeholderTextColor={'#A3A3A3'} />
              </Item>
           </View>

           <View style={{flex:1,marginTop:Metrics.screenHeight/15,marginBottom:Metrics.screenHeight/50}}>
            <Text>Set Password</Text>
            </View>
            <View style={{flex:1}}>
               <Item>
               <Image source={Images.lockgreen} style={{resizeMode:'contain', marginRight:Metrics.screenWidth/30}} />
                 <Input placeholder="Password" placeholderTextColor={'#A3A3A3'}/>
            </Item>
        
               <Item style={{marginTop:Metrics.screenHeight/50}}>
               <Image source={Images.lockgreen} style={{resizeMode:'contain', marginRight:Metrics.screenWidth/30}}/>
                 <Input  placeholder="Confirm Password"  placeholderTextColor={'#A3A3A3'} />
              </Item>
              <Button rounded
        style={{width:Metrics.screenWidth/1.15, marginTop:30,justifyContent:"center",alignItems:"center",backgroundColor:"#8CB102"}}>
            <Text style={{color:"white",fontSize:18}}>SIGN UP</Text>
          </Button>
           </View>

        </View>
     
      </View>
      </Content>  
   
        
    
    );
  }
}
    
 