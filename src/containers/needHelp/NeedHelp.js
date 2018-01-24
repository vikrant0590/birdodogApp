import React,{ Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../theme';
import {Container, Content, Header, Form, Item, Input, Label , Button,Textarea, Icon} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import { toast } from '../../helpers/ToastMessage';
import { connect } from 'react-redux';
import { needHelp } from '../../redux/modules/auth';
 class NeedHelp extends Component {
     constructor(props){
         super(props);
         this.state={
         UserToken : undefined,
         subject:undefined,
         message:undefined,
         isVisible:false
         }
     }

  static contextTypes = {
    store: PropTypes.object,
    register: PropTypes.object
  };
  componentWillMount(){
    console.log("....",this.state.user);
    this.state.UserToken = this.props.auth.user.data.token;
  }

     sendQuery=()=> {
         var Usertoken = this.state.UserToken;
        const {subject, message} = this.state;
         if(subject &&  message){
            const {store: {dispatch}} = this.context;
            let data = {
               subject,
               message
              };

              this.setState({isVisible: true});
              dispatch(needHelp(data,Usertoken))
              .then((res)=>{
                  if(res.status === 200){
                    this.setState({isVisible: false,message:'',subject:''});
                      toast("Query has been submitted .");
                  }else {
                    this.setState({isVisible: false});
                      toast("Try again");
                  }
              })
          }else{
            this.setState({isVisible: false});
              toast('Please fill both fields.');
              }
          } 

     

    render(){
        console.log("NEED HELP TOKEN",this.state.UserToken);
        
        return(
            <View style={{
                flex:1,
                marginTop:Metrics.navBarHeight,
                marginLeft:Metrics.screenWidth/24,
                marginRight:Metrics.screenWidth/24}}>
                 <Spinner visible={this.state.isVisible} textContent={"Sending..."} textStyle={{color:'white'}} />
               <View style={{marginTop:Metrics.screenHeight/28,flexDirection:"column"}}>
                   <Text style={{ fontSize:14}}>If you have any query. Please fill below form. We will try to contact you asap.</Text>
 
                   <Item floatingLabel
                   style={{marginTop:Metrics.screenHeight/35}}>
                    <Label style={{color:"#A3A3A3",fontSize:13}}>Write Subject</Label>

                    <Input  style={{fontSize:15,}}
                    value={this.state.subject}
                    maxLength={50}
                    autoCapitalize={'none'}
                     autoCorrect={false}
                     returnKeyType="next"
                     autoFocus ={false}
                  
                    // onBlur={()=>this.onDeactiveName()}
                     onChangeText={(subject) => {
                       this.setState({subject});
                     }}/>
                  </Item>
                 <Label style={{color:"#A3A3A3",fontSize:13, marginTop:Metrics.screenHeight/55}}>Your Message...</Label>
                  <Item style={{marginTop:Metrics.screenHeight/70}}>
                   <Textarea
                    returnKeyType={"done"}
                    multiline={true}
                    placeholder='Type here'
                    blurOnSubmit={true}
                     style={{fontSize:15,height: Metrics.screenHeight/10,width:Metrics.screenWidth - Metrics.screenWidth/13}}
                   value={this.state.message}
           
                    maxLength={500}
                    autoCapitalize={'none'}
                     autoCorrect={false}
                     
                     autoFocus ={true}
                     onChangeText={(message) => {
                        this.setState({message});
                      }}
                   />
                  </Item>
                  <View style={{marginTop:Metrics.screenHeight/3, justifyContent:"center", alignItems:"center"}}>
                   <TouchableOpacity 
                   onPress={()=>this.sendQuery()}
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
const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
  };
  const  mapDispatchToProps = {
  
  };
  
  export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(NeedHelp)