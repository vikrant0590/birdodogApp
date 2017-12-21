import React, { Component } from 'react';
import { Text, View, TouchableOpacity , Image}  from 'react-native';
 import {Icon, Content, Container, Header, Left,Right, Button, Body, Title} from 'native-base';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import { Actions as NavActions } from 'react-native-router-flux';
import PropTypes from 'prop-types';


export default class MyProfile extends Component {
   
    render(){
     
        
        return (
            <View style={{flex:1}}>
                <Image source={Images.profile}
                    style={{flex:1,
                        resizeMode:'stretch',
                        width:Metrics.screenWidth,
                        height:Metrics.screenHeight,
                    }}
                >

                <View 
             style={{flex:1,marginLeft:15, marginRight:15,marginBottom:15,
           flexDirection:"column", alignItems:"center",}}>
                
                <View style={{flex:0.25, justifyContent:"center", alignItems:"center", marginTop:Metrics.screenHeight/5,backgroundColor:'transparent'}}>
                   <Text style={{ fontSize:35,}}>Philip Health</Text>
               
                 <Image source={Images.message} style={{ marginTop:Metrics.screenHeight/27}} />

                   <Text style={{ fontSize:16, color:'gray', marginTop:Metrics.screenHeight/85}}>philiphealth@gmail.com</Text>
                </View>

                
                <View style={{flex:0.15, justifyContent:"center", alignItems:"center", backgroundColor:'transparent'}}>
                 <Image source={Images.phone}  />
                   <Text style={{ fontSize:16, color:'gray',marginTop:Metrics.screenHeight/85}}>+1 898 849 5858</Text>
               </View>    

               
               <View style={{flex:0.25, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
               <Image source={Images.location}  />
                   <Text style={{ fontSize:16, color:'gray',marginTop:Metrics.screenHeight/85}}>
                   Street no:10, Central Park, {'\n'} Birmingham, Alabama 35207 {'\n'} United States
                   </Text>
                </View>
               
               
                <View style={{flex:0.1, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
                   <Text style={{marginTop:Metrics.screenHeight/27,}}>TXTDL</Text>
                   <Text style={{color:'gray',marginTop:Metrics.screenHeight/85,fontSize:16}}>P24022730</Text>

                     
                   </View>
                   <View style={{flex:0.3, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
                   <TouchableOpacity onPress={ NavActions.editprofile }
                   style={{borderRadius:20,width:Metrics.screenWidth/1.3,height:40,justifyContent:"center",alignItems:"center",
                   backgroundColor:'#333333',}}>
                   <Text style={{color:"white", fontSize:16}}>EDIT PROFILE</Text>
                    
                   </TouchableOpacity>
                       </View>
                       

                 </View>
                </Image>
            </View>

         
        )
    }
}