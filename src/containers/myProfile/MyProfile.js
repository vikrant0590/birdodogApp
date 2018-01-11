import React, { Component } from 'react';
import { Text, View, TouchableOpacity , Image}  from 'react-native';
 import {Icon, Content, Container, Header, Left,Right, Button, Body, Title} from 'native-base';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import { Actions as NavActions } from 'react-native-router-flux';
import PropTypes, { array } from 'prop-types';
import { getProfile } from '../../redux/modules/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import {EditProfile} from '../../containers';


class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            UserToken:undefined,
            isVisible:false,
            user:this.props.auth.userProfile,
  
        }
    }
    static  propTypes = {
        dispatch: PropTypes.func,
      };
    
      static contextTypes = {
        store: PropTypes.object,
        getProfile: PropTypes.object
      };
    componentWillMount(){
        this.isVisible = true;
        this.UserToken = this.props.auth.user.data.token;
        console.log("EDIT PERSON TOKEN", this.UserToken);
      }

      componentWillReceiveProps(nextProps){
         
        this.setState({user: nextProps.auth.userProfile})
      }
      componentWillUpdate(prevProps, prevState){
          console.log("previous",prevProps);
          console.log("previous state",prevState);
         this.isVisible = false;
      }

      editProfile = () => {
      
           // <EditProfile data={this.state.user}/>
           NavActions.editprofile({data:this.state.user});
      }
   
    render(){
        if(!this.state.user){
          
            return   <View style={{flex:1}}>
                    
                       </View>
        }
        
     
       this.isVisible = false;
        return (
            <View style={{flex:1}}>
                

                <Image source={Images.profile}
                    style={{flex:1,
                        resizeMode:'stretch',
                        width:Metrics.screenWidth,
                        height:Metrics.screenHeight,
                    }}
                >

                <View 
             style={{flex:1,marginLeft:15, marginRight:15,marginBottom:15,
           flexDirection:"column", alignItems:"center",}}>
                
                <View style={{flex:0.25, justifyContent:"center", alignItems:"center", marginTop:Metrics.screenHeight/5,backgroundColor:'transparent'}}>
                   <Text style={{ fontSize:35,}}>{this.state.user.data.name}</Text>
               
                 <Image source={Images.message} style={{ marginTop:Metrics.screenHeight/27}} />

                   <Text style={{ fontSize:16, color:'gray', marginTop:Metrics.screenHeight/85}}>{this.state.user.data.email}</Text>
                </View>

                
                <View style={{flex:0.15, justifyContent:"center", alignItems:"center", backgroundColor:'transparent'}}>
                 <Image source={Images.phone}  />
                   <Text style={{ fontSize:16, color:'gray',marginTop:Metrics.screenHeight/85}}>{this.state.user.data.mobile}</Text>
               </View>    

               
               <View style={{flex:0.25, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
               <Image source={Images.location}  />
                   <Text style={{ fontSize:16, color:'gray',marginTop:Metrics.screenHeight/85}}>
                   {this.state.user.data.address} {'\n'} {this.state.user.data.city} {this.state.user.data.state} {this.state.user.data.zipcode} {'\n'} 
                   </Text>
                </View>
               
               
                <View style={{flex:0.1, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
                   <Text style={{marginTop:Metrics.screenHeight/27,}}>TXTDL</Text>
                   <Text style={{color:'gray',marginTop:Metrics.screenHeight/85,fontSize:16,marginBottom:Metrics.screenHeight/85,height:Metrics.screenHeight/16}}>{this.state.user.data.txdl}</Text>

                     
                   </View>
                   <View style={{flex:0.3, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
                   <TouchableOpacity onPress={()=>this.editProfile()}
                   style={{borderRadius:20,width:Metrics.screenWidth/1.3,height:Metrics.screenHeight/20,justifyContent:"center",alignItems:"center",
                   backgroundColor:'#333333',}}>
                   <Text style={{color:"white", fontSize:16}}>EDIT PROFILE</Text>
                    
                   </TouchableOpacity>
                       </View>
                       

                 </View>
                </Image>
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
  
  export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(MyProfile)