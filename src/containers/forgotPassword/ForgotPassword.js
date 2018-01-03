import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon} from 'native-base';
import styles from './ForgotPasswordStyles';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
export default class ForgotPassword extends Component {
    render(){
        return(
        <Container>
             <Content style={{flex:1,marginTop:Metrics.navBarHeight, marginBottom:Metrics.screenHeight/20}}>
             
        <View style={styles.container}>
          <View style={{
            flex:1,
            marginTop:Metrics.screenHeight/12, 
            flexDirection:'column',
            justifyContent:'center', 
            alignItems:'center'
            }}>
             <Image source={Images.forgot}/>
         </View>

             <View 
             style={{
               flex:1,
      
                flexDirection:"column", 
                justifyContent:"flex-start",
                alignItems:"center",
                marginTop:Metrics.screenHeight/25,
            
                }}>
            <Text 
            style={{
              fontSize:12, 
              color:'#333333',
  
                }}>
                To reset your password, enter your registered 
            
           </Text>
           <Text 
            style={{
              fontSize:12, 
              color:'#333333',
        
                }}>
                email address below
            
           </Text>
         
            <Item style={{marginTop:Metrics.screenHeight/30}}>
         <Image source={Images.messageGreen} />
          <Input  placeholder="Email"  placeholderTextColor={'#7a7a7a'}  />
        </Item>
        <TouchableOpacity  
                   style={{borderRadius:20,
                    width:Metrics.screenWidth/1.2,height:35,
                    justifyContent:"center",alignItems:"center",
                   backgroundColor:'#8CB102',
                   marginTop:Metrics.screenHeight/15,
                   }}>
                   <Text style={{color:"white", fontSize:16}}>SUBMIT</Text>
                    
                   </TouchableOpacity>
        </View>
      </View>
      </Content>
</Container>
      
        
    
    );
  }
}
    
 