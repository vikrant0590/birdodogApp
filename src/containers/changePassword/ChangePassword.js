import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, AsyncStorage,NetInfo } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon, } from 'native-base';
import styles from './ChangePasswordStyle';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import { toast } from '../../helpers/ToastMessage';
import { changepassword } from '../../redux/modules/auth';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Font} from 'expo';


class ChangePassword extends Component {
  constructor(props){
    super(props);
    this.state ={
  
      password: undefined,
      new_password:undefined,
      confirmPassword: undefined,
      token: undefined,
      UserToken:undefined,
      isVisible:false,
      email:undefined,
      isConnected:true,
      isload:false,
    
    };
  }
 

  static contextTypes = {
    store: PropTypes.object,
    changepassword: PropTypes.object
  };


  // internet connection

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









  componentWillMount(){
    this.setState({email:this.props.auth.email})
  }

  onPressSubmitButton =() =>{
    this.UserToken = this.props.auth.user.data.token,
    console.log( "USER TOKEN",this.UserToken);
    this.setState({isVisible:true});
    let data = {
      

      'password':this.state.password,
      'new_password': this.state.new_password,
    };
   

    const {store: {dispatch}} = this.context;

    if(this.state.new_password && this.state.confirmPassword && this.state.password){
      if(this.state.new_password === this.state.confirmPassword){
        this.setState({isVisible:true})
        dispatch(changepassword(data, this.UserToken))
          .then((res)=>{
            console.log("CHANGE PASSWORD RESPONSE",res.status)
           
            this.setState({isVisible:false});
           if(res.status === 200){
          
           AsyncStorage.setItem('userCredentials',JSON.stringify({'email':this.state.email,'password':data.new_password}) );
          
            this.setState({
              new_password:'',
              password:'',
              confirmPassword:'',
              isVisible:false
            })
            toast("Password changed successfully.");
           } else {
             this.setState({isVisible:false})
             toast("Old password does not matched.");
              
           }
           
          })
          .catch(() => {
            this.setState({isVisible:false});
            toast("INVALID DATA")
          })
      } else {
        this.setState({isVisible:false});
        toast("Confirm password does not matched.");
      }
    } else {
      this.setState({isVisible:false});
      toast('Please enter all Fields.');

    }
  };
  render(){
    return(
      <Container>
        {this.state.isload && 
    <View style={styles.container}>
     <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color:'white'}} />

        <View style={{flex:0.15,justifyContent:'center' }}>
          <Text style={{fontSize:13,fontFamily:'robotoRegular'}}>Set Password</Text>
        </View>

          <View style={{ flex:0.45}}>
             <Item style={{marginBottom:Metrics.screenHeight/40}}>
                 <Image source={Images.lockgreen}/>
                 <Input placeholder="Old Password" 
                 placeholderTextColor={'#A3A3A3'}
                 value={this.state.password}
                 autoCorrect={false}
                 returnKeyType="next"
                 autoFocus ={false}
                 secureTextEntry={true} 
                 onChangeText={(password) => {
                   this.setState({password});
                 }}
                 style={{marginLeft:Metrics.screenWidth/60}}
                 />
              </Item>
      
              <Item style={{marginBottom:Metrics.screenHeight/40}}>
                  <Image source={Images.lockgreen}/>
                  <Input  placeholder="New Password" 
                      placeholderTextColor={'#A3A3A3'}
                      value={this.state.new_password}
                      autoCorrect={false}
                      returnKeyType="next"
                      autoFocus ={false}
                      secureTextEntry={true} 
                      onChangeText={(new_password) => {
                        this.setState({new_password});
                      }}
                      style={{marginLeft:Metrics.screenWidth/60}}
                  />
               </Item>

               <Item style={{marginBottom:Metrics.screenHeight/40}}>
                 <Image source={Images.lockgreen}/>
                 <Input  placeholder="Confirm Password"  
                     value={this.state.confirmPassword}
                     placeholderTextColor={'#A3A3A3'}
                     autoCorrect={false}
                     returnKeyType="next"
                     autoFocus ={false}
                     secureTextEntry={true} 
                     onChangeText={(confirmPassword) => {
                       this.setState({confirmPassword});
                     }}
                     style={{marginLeft:Metrics.screenWidth/60}}
                 />
               </Item>
          </View>

      <View style={{flex:0.4,alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity  
            onPress={()=>this.onPressSubmitButton()}
           style={{borderRadius:20,
            marginTop:Metrics.screenHeight/5,
           width:Metrics.screenWidth/1.1,height:45,
           justifyContent:"center",
           alignItems:"center",
            backgroundColor:'#8CB102',
         
      }}>
       <Text style={{color:"white", fontSize:16, fontFamily:'robotoRegular'}}>CHANGE PASSWORD</Text>
       
      </TouchableOpacity>
      </View>
     
  </View>
        }
  </Container>
    

);
}
}
    
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};
const  mapDispatchToProps = {

};

export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(ChangePassword)