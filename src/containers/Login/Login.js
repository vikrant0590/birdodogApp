import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image,BackHandler,NetInfo,TextInput } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon} from 'native-base';
import styles from './LoginStyle';
import {Actions as NavAction} from 'react-native-router-flux';
import { ApplicationStyles, Colors, Metrics, Images, Fonts } from '../../theme';
import { validationOnEmail} from '../../helpers/EmailValidation';
import { login } from '../../redux/modules/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import {Font} from 'expo';
import PropTypes from 'prop-types';


import { toast } from '../../helpers/ToastMessage';


export default class Login extends Component {
  static  propTypes = {
    dispatch: PropTypes.func,
  };

  static contextTypes = {
    store: PropTypes.object,
    login: PropTypes.object
  };

  constructor(props){
    super(props);
    this.state ={
      refresh:false,
      email: undefined,
      password:undefined ,
      isVisible: false,
      isload:false,
      isConnected:true
    }
  }
  async componentWillMount(){
  this.setState({ email:'',password:''});
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
      toast('Your internet connection has been lost.');
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      bold: require('../../fonts/OpenSans-Bold.ttf'),
    boldItalic: require('../../fonts/OpenSans-BoldItalic.ttf'),
    extraBold: require('../../fonts/OpenSans-ExtraBold.ttf'),
    extraBoldItalic:require('../../fonts/OpenSans-ExtraBoldItalic.ttf'),
    italic: require('../../fonts/OpenSans-Italic.ttf'),
    light: require('../../fonts/OpenSans-Light.ttf'),
    lightItalic: require('../../fonts/OpenSans-LightItalic.ttf'),
    regular: require('../../fonts/OpenSans-Regular.ttf'),
    semiBoldItalic: require('../../fonts/OpenSans-SemiboldItalic.ttf'),
    semiBold: require('../../fonts/OpenSans-Semibold.ttf'),
    robotoRegular: require('../../fonts/Roboto-Regular.ttf'),
    robotoMedium:require('../../fonts/Roboto-Medium.ttf'),
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
  onPressLoginButton = () => {
   
    const {email, password} = this.state;
    if (email && password) {
      if (validationOnEmail(email)) {
        this.setState({isVisible: true});
        const {store: {dispatch}} = this.context;
        dispatch(login({email, password}))
          .then((res) => {
            if(res.status === 200){
        
            this.setState({ isVisible:false});
            NavAction.drawer();
            toast('Login successfully.');
            }else if(res.status === 404 ){
              this.setState({isVisible: false});
              toast('Invalid Email and Password.');
            }
          }).catch(() => {
            this.setState({isVisible: false});
             toast('Invalid Email and Password.');
          });

      } else {
         toast('Please Enter Valid Email Address.');
      }
    } else if(email && !password){
       toast('Please Enter Password!');
    }else{
      toast('Please enter Email')
    }

  };

 
    render(){
      
        return(
        
     <Content style={{flex:1}}>
              {this.state.isload ?
        <Container style={styles.container}>
       
        <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color:'white'}} />

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
          <Input placeholder="Email" 
          value={this.state.email}
           placeholderTextColor={'#A3A3A3'}
           autoFocus={false}
           autoCorrect={false}
           autoCapitalize={'none'}
           onChangeText={(email) => {
             this.setState({email});
           }}
           onSubmitEditing={ (event) => { this.refs.Password._root.focus() }} 
           style={{marginLeft:Metrics.screenWidth/60}}
           />
        </Item>
        
        <Item>
        <Image source={Images.lockgreen}/>
          <Input
          ref="Password"
          placeholder="Password" 
          value={this.state.password}
          secureTextEntry={true} 
           placeholderTextColor={'#A3A3A3'}
           onChangeText={(password) => {
             this.setState({password});
           }}
           style={{marginLeft:Metrics.screenWidth/40}}
           />
        </Item>

        <TouchableOpacity onPress={this.onPressLoginButton}
                   style={{
                     marginTop:Metrics.screenHeight/22,
                     borderRadius:20,
                     width:Metrics.screenWidth/1.24,
                     height:35,
                     justifyContent:"center",
                     alignItems:"center",
                     backgroundColor:'#8CB102',
                  
                   }}>

                   <Text style={[{fontFamily:'regular'}, styles.siginButtonText]}>SIGN IN</Text>
                    
                   </TouchableOpacity>
                   <TouchableOpacity onPress={NavAction.forgotPassword}>
                   <Text style={{fontSize:15,marginTop:Metrics.screenHeight/30,color:"#333333",fontFamily:'robotoRegular'}}>Forgot Password?</Text>
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
 
 
            
           <Text style={{fontSize:14, color:"#797979",marginTop:Metrics.screenHeight/30,fontFamily:'robotoMedium'}}>Don't have an Account?</Text>
           <TouchableOpacity onPress={NavAction.signup}>
               <Text style={{fontSize:15,marginLeft:3, color:'#333333',marginTop:Metrics.screenHeight/30,fontFamily:'robotoMedium' }}>SIGN UP NOW</Text>
               </TouchableOpacity>

          </View>
     
          
 
      </Container>
: null }
        </Content>
    
    );
  }
}
    
 