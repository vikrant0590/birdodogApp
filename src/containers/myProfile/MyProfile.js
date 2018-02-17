import React, { Component } from 'react';
import { Text, View, TouchableOpacity , Image, NetInfo}  from 'react-native';
 import {Icon, Content, Container, Header, Left,Right, Button, Body, Title} from 'native-base';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import { Actions as NavActions } from 'react-native-router-flux';
import PropTypes, { array } from 'prop-types';
import { getProfile } from '../../redux/modules/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import {EditProfile} from '../../containers';
import api from '../../helpers/ApiClient';
import {Font} from 'expo';


import { toast } from '../../helpers/ToastMessage';

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
            UserToken:undefined,
            isConnected:true,
            isload:false,
  
        }
    }
    static  propTypes = {
        dispatch: PropTypes.func,
      };
    
      static contextTypes = {
        store: PropTypes.object,
        getProfile: PropTypes.object
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
            <Container>
                <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color:'white'}} />
                {this.state.isload &&
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
                   <Text style={{ fontSize:30,color:'#333333',fontFamily:'robotoRegular'}}>{this.state.data.name}</Text>
               
                 <Image source={Images.message} style={{ marginTop:Metrics.screenHeight/27}} />

                   <Text style={{ fontSize:16, color:'#7a7a7a', marginTop:Metrics.screenHeight/85,fontFamily:'robotoRegular'}}>{this.state.data.email}</Text>
                </View>

                
                <View style={{flex:0.15, justifyContent:"center", alignItems:"center", backgroundColor:'transparent'}}>
                 <Image source={Images.phone}  />
                   <Text style={{ fontSize:16, color:'#7a7a7a',marginTop:Metrics.screenHeight/85,fontFamily:'robotoRegular'}}>{this.state.data.mobile ? this.state.data.mobile : 'No records'}</Text>
               </View>    

               
               <View style={{flex:0.25, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
               <Image source={Images.location}  />
               <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:Metrics.screenHeight/85,marginLeft:Metrics.screenHeight/50,marginRight:Metrics.screenWidth/50}}>
               <View>
                <Text style={{fontSize:16, color:'#7a7a7a',fontFamily:'robotoRegular'}}>
                {this.state.data.address } 
               </Text>
               </View>

             <View>
             {this.state.data.city || this.state.data.state || this.state.data.zipcode ?
             <Text style={{fontSize:16, color:'#7a7a7a',fontFamily:'robotoRegular'}}>
                {this.state.data.city} {this.state.data.state} {this.state.data.zipcode}
               </Text>
             :
             <Text style={{fontSize:16, color:'#7a7a7a',fontFamily:'robotoRegular'}}>No records</Text>
             }
             </View>
             

             <View>
             <Text style={{fontSize:16, color:'#7a7a7a',fontFamily:'robotoRegular'}}>
                {this.state.data.country} 
               </Text>
               </View>


           </View>     


                </View>
               
               
                <View style={{flex:0.1, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
                   <Text style={{marginTop:Metrics.screenHeight/27,fontFamily:'robotoRegular'}}>TXTDL</Text>
                   <Text style={{color:'#7a7a7a',marginTop:Metrics.screenHeight/85,fontSize:16,marginBottom:Metrics.screenHeight/85,height:Metrics.screenHeight/16,fontFamily:'robotoRegular'}}>
                   {this.state.data.txdl ? this.state.data.txdl :'No records'}
                   </Text>

                     
                   </View>
                   <View style={{flex:0.3, justifyContent:"center", alignItems:"center",backgroundColor:'transparent'}}>
                   <TouchableOpacity onPress={()=>this.editProfile()}
                   style={{borderRadius:20,width:Metrics.screenWidth/1.3,height:Metrics.screenHeight/20,justifyContent:"center",alignItems:"center",
                   backgroundColor:'#333333',}}>
                   <Text style={{color:"white", fontSize:16, fontFamily:'robotoRegular'}}>EDIT PROFILE</Text>
                    
                   </TouchableOpacity>
                       </View>
                       

                 </View>
                </Image>
            </View>
                }
            </Container>

         
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
