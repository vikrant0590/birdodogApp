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
import api from '../../helpers/ApiClient';


class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state={
    
            data:[],
            page:0,
            loading:false,
            UserToken:undefined,
            isVisible:false,
            user:this.props.auth.userProfile,
            UserToken:undefined
  
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
        
       //console.log("********************************",this.props.auth.userProfile);
        //console.log("....",this.state.user);
       // this.setState({UserToken:this.props.auth.user.data.token})

        //console.log("EDIT PERSON TOKEN", this.state.UserToken);
       // console.log("$$$$$$$$$$$$$$$",this.state.user)
        this.fetchData();
      }
    
      componentWillReceiveProps(nextProps){
  
         console.log("Next Props...",nextProps)
         if(nextProps.auth.userProfile!=undefined){
        this.setState({data: nextProps.auth.userProfile.data})
         }
      }
      componentWillUpdate(prevProps, prevState){
          console.log("previous",prevProps);
          console.log("previous state",prevState);
         this.state.isVisible = false;
      }

      fetchData= async() => {
        this.state.UserToken = this.props.auth.user.data.token;
          this.setState({loading:true})
        const data = {
            method: 'GET',
            headers: {
            'Usertoken': this.state.UserToken
            },
           
            }
          const response =await fetch( `http://s2.staging-host.com/birddog-express/api/user/profile`,data);
            const json = await response.json();
            this.setState({data:json.data, loading:false});
    
          
      }


      editProfile = () => {
      
           // <EditProfile data={this.state.user}/>
           NavActions.editprofile();
      }
   
    render(){
      


        return (
            <View style={{flex:1}}>
       <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color:'white'}} />


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
                   <Text style={{ fontSize:30,}}>{this.state.data.name}</Text>
               
                 <Image source={Images.message} style={{ marginTop:Metrics.screenHeight/27}} />

                   <Text style={{ fontSize:16, color:'gray', marginTop:Metrics.screenHeight/85}}>{this.state.data.email}</Text>
                </View>

                
                <View style={{flex:0.15, justifyContent:"center", alignItems:"center", backgroundColor:'transparent'}}>
                 <Image source={Images.phone}  />
                   <Text style={{ fontSize:16, color:'gray',marginTop:Metrics.screenHeight/85}}>{this.state.data.mobile}</Text>
               </View>    

               
               <View style={{flex:0.25, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
               <Image source={Images.location}  />
               <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:Metrics.screenHeight/85,marginLeft:Metrics.screenHeight/50,marginRight:Metrics.screenWidth/50}}>
               <View>
                <Text style={{fontSize:16, color:'gray'}}>
                {this.state.data.address } 
               </Text>
               </View>

             <View>
             <Text style={{fontSize:16, color:'gray'}}>
                {this.state.data.city} {this.state.data.state} {this.state.data.zipcode}
               </Text>
             </View>
             

             <View>
             <Text style={{fontSize:16, color:'gray'}}>
                {this.state.data.country} 
               </Text>
               </View>


           </View>     


                </View>
               
               
                <View style={{flex:0.1, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
                   <Text style={{marginTop:Metrics.screenHeight/27,}}>TXTDL</Text>
                   <Text style={{color:'gray',marginTop:Metrics.screenHeight/85,fontSize:16,marginBottom:Metrics.screenHeight/85,height:Metrics.screenHeight/16}}>{this.state.data.txdl}</Text>

                     
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
