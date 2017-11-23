import React, { Component } from 'react';
import { Text, View, TouchableOpacity , Image}  from 'react-native';
 import {Icon, Content, Container, Header, Left,Right, Button, Body, Title} from 'native-base';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import { Actions as NavActions } from 'react-native-router-flux';
import PropTypes from 'prop-types';


export default class MyProfile extends Component {
   
    render(){
     
        
        return (
            <View style={{flex:1, marginTop:Metrics.navBarHeight, backgroundColor:"#8CB102"}}>
            
             <View 
             style={{flex:1,marginLeft:15, marginRight:15,marginBottom:15,
             backgroundColor:"white", flexDirection:"column", alignItems:"center",}}>
                
                <View style={{flex:0.3, justifyContent:"center", alignItems:"center", marginTop:Metrics.screenHeight/12,}}>
                   <Text style={{ fontSize:27, }}>Philip Health</Text>
               
                 <Icon name="ios-mail" style={{color: 'gray', marginTop:Metrics.screenHeight/30}} />

                   <Text style={{ fontSize:12, color:'gray'}}>philiphealth@gmail.com</Text>
                </View>

                
                <View style={{flex:0.1, justifyContent:"center", alignItems:"center", }}>
                 <Icon name="ios-call" style={{ color: 'gray', }} />
                   <Text style={{ fontSize:12, color:'gray'}}>+1 898 849 5858</Text>
               </View>    

               
               <View style={{flex:0.25, justifyContent:"center", alignItems:"center",}}>
               <Icon name="ios-pin" style={{ color: 'gray',   }} />
                   <Text style={{ fontSize:12, color:'gray'}}>
                   Street no:10, Central Park, {'\n'} Birmingham, Alabama 35207 {'\n'} United States}
                   </Text>
                </View>
               
               
                <View style={{flex:0.1, justifyContent:"center", alignItems:"center",}}>
                   <Text style={{marginTop:Metrics.screenHeight/27}}>TXTDL</Text>
                   <Text style={{color:'gray'}}>P24022730</Text>

                     
                   </View>
                   <View style={{flex:0.3, justifyContent:"center", alignItems:"center"}}>
                   <TouchableOpacity onPress={ NavActions.editprofile }
                   style={{borderRadius:20,width:Metrics.screenWidth/1.3,height:40,justifyContent:"center",alignItems:"center",
                   backgroundColor:'#333333',}}>
                   <Text style={{color:"white", fontSize:16}}>EDIT PROFILE</Text>
                    
                   </TouchableOpacity>
                       </View>
                       

                 </View>
            </View>

         
        )
    }
}