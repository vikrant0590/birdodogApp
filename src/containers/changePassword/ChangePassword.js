import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon, } from 'native-base';
import styles from './ChangePasswordStyle';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';



export default class ChangePassword extends Component {
    render(){
        return(
          
        <View style={styles.container}>
     
            <View style={{flex:0.15,justifyContent:'center' }}>
              <Text>Set Password</Text>
            </View>

              <View style={{ flex:0.45}}>
                 <Item>
                     <Image source={Images.lockgreen}/>
                     <Input placeholder="Old Password" placeholderTextColor={'#A3A3A3'} secureTextEntry={true}/>
                  </Item>
          
                    <Item>
                      <Image source={Images.lockgreen}/>
                      <Input  placeholder="New Password"  placeholderTextColor={'#A3A3A3'} secureTextEntry={true} />
                   </Item>

                   <Item >
                     <Image source={Images.lockgreen}/>
                     <Input  placeholder="Confirm Password"  placeholderTextColor={'#A3A3A3'} secureTextEntry={true} />
                   </Item>
              </View>

          <View style={{flex:0.4,alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity  
               style={{borderRadius:20,
              
               width:Metrics.screenWidth/1.1,height:40,
               justifyContent:"center",
               alignItems:"center",
                backgroundColor:'#8CB102',
             
          }}>
           <Text style={{color:"white", fontSize:14}}>CHANGE PASSWORD</Text>
           
          </TouchableOpacity>
          </View>
         
      </View>
    
      
        
    
    );
  }
}
    
 