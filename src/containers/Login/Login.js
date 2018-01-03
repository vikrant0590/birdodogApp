import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon} from 'native-base';
import styles from './LoginStyle';
import {Actions as NavAction} from 'react-native-router-flux';
import { ApplicationStyles, Colors, Metrics, Images, Fonts } from '../../theme';

//import { toast } from '../../helpers/ToastMessage';


export default class Login extends Component {
  onPressLogin = () => {
    NavAction.drawer();
  }
    render(){
        return(
        
     
        <Container style={styles.container}>
 
          <View style={{flex:0.4,}}>
            <Image source ={Images.signin}  style={{width:Metrics.screenWidth, flex:1}}></Image>
         </View>

        <View 
        style={{
          flex:0.48,
            flexDirection:"column",
            marginLeft:Metrics.screenWidth/10,
            marginRight:Metrics.screenWidth/10,
            alignItems:"center"
            
            }}>
        <Item>
        <Image source={Images.messageGreen} />
          <Input placeholder="Email"  placeholderTextColor={'#A3A3A3'}/>
        </Item>
        
        <Item>
        <Image source={Images.lockgreen}/>
          <Input  placeholder="Password" secureTextEntry={true}  placeholderTextColor={'#A3A3A3'}/>
        </Item>

        <TouchableOpacity  onPress={()=>this.onPressLogin()}
                   style={{
                     marginTop:Metrics.screenHeight/22,
                     borderRadius:20,
                     width:Metrics.screenWidth/1.24,
                     height:35,
                     justifyContent:"center",
                     alignItems:"center",
                     backgroundColor:'#8CB102',
                  
                   }}>

                   <Text style={styles.siginButtonText}>SIGN IN</Text>
                    
                   </TouchableOpacity>
                   <TouchableOpacity onPress={NavAction.forgotPassword}>
                   <Text style={{marginTop:Metrics.screenHeight/30,color:"#333333"}}>Forgot Password?</Text>
                   </TouchableOpacity>

        </View>
        <View style={{ height:0.4, backgroundColor:'#A3A3A3'}}></View>

        <View style={{ 
          flex:0.1,
           flexDirection:"row", 
           justifyContent:"center",
           marginLeft:Metrics.screenWidth/10,
           marginRight:Metrics.screenWidth/10,
           }}>
           <Text style={{fontSize:13, color:"#797979",marginTop:Metrics.screenHeight/30,}}>Don't have an Account?</Text>
           <TouchableOpacity onPress={NavAction.signup}>
               <Text style={{fontSize:12,marginLeft:3, color:'#333333',marginTop:Metrics.screenHeight/30, }}>SIGN UP NOW</Text>
               </TouchableOpacity>

          </View>
     
        
          
      </Container>
   
        
    
    );
  }
}
    
 