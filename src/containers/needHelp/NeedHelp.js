import React,{ Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../theme';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon} from 'native-base';

export default class NeedHelp extends Component {
    render(){
        return(
            <View style={{
                flex:1,
                marginTop:Metrics.navBarHeight,
                marginLeft:Metrics.screenWidth/24,
                marginRight:Metrics.screenWidth/24}}>
               <View style={{marginTop:Metrics.screenHeight/28,flexDirection:"column"}}>
                   <Text style={{ fontSize:12}}>If you have any query. Please fill below form. We will try to contact you asap.</Text>
 
                   <Item floatingLabel
                   style={{marginTop:Metrics.screenHeight/35}}>
                    <Label style={{color:"#A3A3A3",fontSize:12}}>Write Message</Label>

                    <Input  style={{fontSize:15,}}/>
                  </Item>
                 <Label style={{color:"#A3A3A3",fontSize:12, marginTop:Metrics.screenHeight/15}}>Your Message...</Label>
                  <Item style={{marginTop:Metrics.screenHeight/20}}>
                   <Input multiline={true} style={{fontSize:15}}/>
                  </Item>
                  <View style={{marginTop:Metrics.screenHeight/3, justifyContent:"center", alignItems:"center"}}>
                   <TouchableOpacity 
                   style={{borderRadius:20,width:Metrics.screenWidth/1.1,height:35,justifyContent:"center",alignItems:"center",
                   backgroundColor:'#8CB102',}}>
                   <Text style={{color:"white", fontSize:16}}>SUBMIT QUERY</Text>
                    
                   </TouchableOpacity>
                       </View>
               </View>    

            </View>    
        )
    }

}