import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon} from 'native-base';
import styles from './ForgotPasswordStyles';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import Spinner from 'react-native-loading-spinner-overlay';
import { validationOnEmail} from '../../helpers/EmailValidation';
import { toast } from '../../helpers/ToastMessage';

import PropTypes from 'prop-types';
import { forgotpassword } from '../../redux/modules/auth';

export default class ForgotPassword extends Component {
  constructor(){
    super();
    this.state={
      email: undefined,
      isVisible: false
    }
    }
  
  static  propTypes = {
    dispatch: PropTypes.func,
  };

  static contextTypes = {
    store: PropTypes.object,
    forgotpassword: PropTypes.object
  };

  onPressForgotPasssword (){
    
    const {email} = this.state;
    if(email){
      if (validationOnEmail(email)) {
        const {store: {dispatch}} = this.context;
        this.setState({isVisible: true})
        dispatch(forgotpassword({email}))
        .then((res) => {
          if(res.status === 200){
            this.setState({isVisible: false, email:''});
            toast("Link has been sent to your email address.");
          } 
    }).catch(() => {
      this.setState({isVisible: false});
       toast('Invalid Email.');
    });
    
  }else{
    toast("Please enter Valid Email. ");

  }
  } else{
    toast("Please enter Email address.");

  }
}

    render(){
        return(
        <Container>
    <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color:'white'}} />

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
          <Input  placeholder="Email"
            placeholderTextColor={'#7a7a7a'}  
            autoCorrect={false}
            autoCapitalize={'none'}
            onChangeText={(email) => {
              this.setState({email});
            }}/>
        </Item>
        <TouchableOpacity  
        onPress={()=>this.onPressForgotPasssword()}
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
    
 