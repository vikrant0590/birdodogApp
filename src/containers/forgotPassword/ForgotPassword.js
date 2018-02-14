import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image ,NetInfo} from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon, AsyncStorage} from 'native-base';
import styles from './ForgotPasswordStyles';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import Spinner from 'react-native-loading-spinner-overlay';
import { validationOnEmail} from '../../helpers/EmailValidation';
import { toast } from '../../helpers/ToastMessage';

import PropTypes from 'prop-types';
import { forgotpassword } from '../../redux/modules/auth';
import { Actions } from 'react-native-router-flux';
import {Font} from 'expo';



export default class ForgotPassword extends Component {
  constructor(){
    super();
    this.state={
      email: undefined,
      isVisible: false,
      isConnected:true,
      isload:false,
    }
    }
  
  static  propTypes = {
    dispatch: PropTypes.func,
  };

  static contextTypes = {
    store: PropTypes.object,
    forgotpassword: PropTypes.object
  };




  // internet connection

  async componentDidMount() {
    await Font.loadAsync({
      robotoRegular: require('../../fonts/Roboto-Regular.ttf'),
      robotoMedium:require('../../fonts/Roboto-Medium.ttf'),
      robotoMediumItalic:require('../../fonts/Roboto-MediumItalic.ttf'),
      robotoBlackItalic:require('../../fonts/Roboto-BlackItalic.ttf'),
      robotoBold:require('../../fonts/Roboto-Bold.ttf'),
      robotoBoldItalic:require('../../fonts/Roboto-BoldItalic.ttf'),
      robotoLight:require('../../fonts/Roboto-Light.ttf'),
      robotoLightItalic:require('../../fonts/Roboto-LightItalic.ttf'),
      robotoThin:require('../../fonts/Roboto-Thin.ttf'),
      robotoThinItalic:require('../../fonts/Roboto-ThinItalic.ttf'),
      robotoCondensedBold:require('../../fonts/RobotoCondensed-Bold.ttf'),
      robotoCondensedBoldItalic:require('../../fonts/RobotoCondensed-BoldItalic.ttf'),
      robotoCondensedItalic:require('../../fonts/RobotoCondensed-Italic.ttf'),
      robotoCondensedLight:require('../../fonts/RobotoCondensed-Light.ttf'),
      robotoCondensedLightItalic:require('../../fonts/RobotoCondensed-LightItalic.ttf'),
      robotoCondensedRegular:require('../../fonts/RobotoCondensed-Regular.ttf')
    
    });
    this.setState({isload:true});
    NetInfo.isConnected.addEventListener(
      'change',
      this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({isConnected}); }
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'change',
      this._handleConnectivityChange
    );
  }

  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
    console.log('connectionInfo', isConnected);
    if(!this.state.isConnected){
      SnackBar.show('Looks like you lost your internet connection. Please try again after your link is active', {
        style: { marginBottom: 20 },
        backgroundColor: Colors.snackBarColor,
        textColor: Colors.white
      });
    }
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
            this.setState({isVisible: false});
            toast("Link has been sent to your email address.");
           // AsyncStorage.removeItem('userCredentials');
            Actions.login();
          }else if(res.status ===404){
            this.setState({isVisible:false});
            toast("This email-id does not exist.")
          }
    }).catch(() => {
      this.setState({isVisible: false});
      
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
    <Spinner visible={this.state.isVisible} textContent={"Sending..."} textStyle={{color:'white'}} />

             <Content style={{flex:1,marginTop:Metrics.navBarHeight, marginBottom:Metrics.screenHeight/20}}>
             {this.state.isload && 
             
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
               fontFamily:'robotoRegular'
                }}>
                To reset your password, enter your registered 
            
           </Text>
           <Text 
            style={{
              fontSize:12, 
              color:'#333333',
              fontFamily:'robotoRegular'
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
                   <Text style={{color:"white", fontSize:16,fontFamily:'robotoRegular'}}>SUBMIT</Text>
                    
                   </TouchableOpacity>
        </View>
      </View>
             }
      </Content>
                  
</Container>
      
        
    
    );
  }
}
    
 