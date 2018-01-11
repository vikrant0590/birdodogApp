import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button,Icon} from 'native-base';
import styles from './signupStyles';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import { register } from '../../redux/modules/auth';
import {Actions as NavAction} from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import { validationOnEmail, passwordMatch} from '../../helpers/EmailValidation';
import { toast } from '../../helpers/ToastMessage';
export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      
    
      email: undefined,
      password: undefined,
      confirmPassword:undefined,
      name:undefined,
    
      isVisible: false
    };
  }

  static contextTypes = {
    store: PropTypes.object,
    register: PropTypes.object
  };

  validateEmail =(data) =>{
    return validationOnEmail(data);
  };
  passwordMatch =(password, confirmPass) =>{
    return passwordMatch(password,confirmPass);
  }
  

  handleSubmit = () => {
    
        const {name, email, password,confirmPassword} = this.state;
    
        if (name, email, password, confirmPassword) {
          if (this.validateEmail(email)) {
             if(this.passwordMatch(password,confirmPassword)){
            const {store: {dispatch}} = this.context;
            let data = {
              name,
              email,
              password,
              
            };
            this.setState({isVisible: true});
            dispatch(register(data))
              .then((res) => {
                if(res.status === 200){
                this.setState({isVisible: false});
                toast('Successfully Register!');
                NavAction.drawer();
                }else if (res.status === 400){
                  if(res.data.name){
                    this.setState({isVisible: false});
                    toast('Name can not exceed 30 characters.');
                  }else{
                  this.setState({isVisible: false});
                  toast('Email already exist.');
                  }
                }
                
                
                else {
                  this.setState({isVisible: false});
                  toast('Oops, something went wrong. Please try again later!');
                }
              })
              .catch(ex => {
                this.setState({isVisible: false});
                alert(ex.error.message);
              });
          }else{
        
              toast('Password Not matched or length must be min 5 and max 15 characters.');
              }
          } 

        
          // Email Validation msg
          else {
          toast('Please Enter Valid Email Address.');
          }

          // empty field msg
        } else {
          toast('All fields required!');
        }
      };
    render(){
        return(
        <Container style={{flex:1,marginTop:Metrics.navBarHeight}}>
                <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color:'white'}} />

          <Content>
        <View style={styles.container}> 
        <View style={{flex:1,flexDirection:"column",}}>
          <View style={{flex:1,marginTop:Metrics.screenHeight/15,marginBottom:Metrics.screenHeight/50}}>
                <Text>Personal Information</Text>
                        </View>

            <View style={{flex:1}}> 
               <Item >
                 <Image source={Images.profilee} resizeMode="contain" style={{ marginRight:Metrics.screenWidth/30 }} />
                 <Input
                  placeholder="Name"
                  placeholderTextColor={'#A3A3A3'} 
                  autoCapitalize={'none'}
                   autoCorrect={false}
                   returnKeyType="next"
                   autoFocus ={false}
                   onChangeText={(name) => {
                     this.setState({name});
                   }}
                   />
             </Item>
        
               <Item style={{marginTop:Metrics.screenHeight/50}}>
               <Image source={Images.message} style={{resizeMode:'contain', marginRight:Metrics.screenWidth/30}}/>
                 <Input
                   placeholder="Email"
                     placeholderTextColor={'#A3A3A3'} 
                     autoCorrect={false}
                     autoCapitalize={'none'}
                     returnKeyType="next"
                     autoFocus ={false}
                     onChangeText={(email) => {
                       this.setState({email});
                     }}
                     />
              </Item>

             
              {/* <Item style={{marginTop:Metrics.screenHeight/50}}>
                <Image source={Images.phone}  style={{resizeMode:'contain', marginRight:Metrics.screenWidth/30}} />
                <Input  placeholder="Phone Number"  placeholderTextColor={'#A3A3A3'} />
              </Item> */}
           </View>

           <View style={{flex:1,marginTop:Metrics.screenHeight/15,marginBottom:Metrics.screenHeight/50}}>
            <Text>Set Password</Text>
            </View>
            <View style={{flex:1}}>
               <Item>
               <Image source={Images.lockgreen} style={{resizeMode:'contain', marginRight:Metrics.screenWidth/30}} />
                 <Input 
                 placeholder="Password" 
                 placeholderTextColor={'#A3A3A3'}
                 autoCorrect={false}
                 returnKeyType="next"
                 autoFocus ={false}
                 secureTextEntry={true} 
                 onChangeText={(password) => {
                   this.setState({password});
                 }}
                 />
            </Item>
        
               <Item style={{marginTop:Metrics.screenHeight/50}}>
               <Image source={Images.lockgreen} style={{resizeMode:'contain', marginRight:Metrics.screenWidth/30}}/>
                 <Input
                   placeholder="Confirm Password"
                     placeholderTextColor={'#A3A3A3'}
                        secureTextEntry={true}
                        onChangeText={(confirmPassword) => {
                          this.setState({confirmPassword});
                        }}
                        />
              </Item>
              <Button rounded 
              //onPress={()=>this.handleSubmit()}
        style={{width:Metrics.screenWidth/1.15, marginTop:Metrics.screenHeight/10,justifyContent:"center",alignItems:"center",backgroundColor:"#8CB102"}}>
            <Text style={{color:"white",fontSize:18}}>SIGN UP</Text>
          </Button>
           </View>

        </View>
     
      </View>
    
      </Content>  
      </Container>
   
        
    
    );
  }
}
    
 