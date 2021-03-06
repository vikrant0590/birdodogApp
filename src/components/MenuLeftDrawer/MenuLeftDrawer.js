import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Button, Icon, Grid, Col, Row ,Body,Card, List, ListItem, H3,Left,Right,} from 'native-base';
import { View, Text, Image, Platform, TouchableOpacity, Switch, Share,AsyncStorage ,NetInfo, Keyboard} from 'react-native'
import { Colors, Images, Metrics } from '../../theme';
import styles from './MenuLeftDrawerStyles';
import {MyProfile}  from '../../containers';
import Spinner from 'react-native-loading-spinner-overlay';
import { toast } from '../../helpers/ToastMessage';

import { Actions as NavActions } from 'react-native-router-flux';
import { logout, getProfile, getDetails, getTrackList, login } from '../../redux/modules/auth';
import { connect } from 'react-redux';
import {Font} from 'expo';



 class MenuLeftDrawer extends Component {
  constructor(props){
    super(props);
    this.state = {
    UserToken: undefined,
    isVisible:false,
    click:0,
    user:this.props.auth.userProfile,
    data:[],
    FirstNameChar:undefined,
    isConnected:true,
    isload:false,
    }
  }
  static  propTypes = {
    homeSection: PropTypes.any,
    dispatch: PropTypes.func,
  };
  
      static contextTypes = {
    
        drawer: PropTypes.object,
        store: PropTypes.object,
        getProfile: PropTypes.object
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
      toast('Your internet connection has been lost')
    }
  };
      componentWillMount = async () => {
        const userCredential = await AsyncStorage.getItem('userCredentials');
        const  savedUserParams = JSON.parse(userCredential);
        const password = savedUserParams.password;
        const {store: {dispatch}} = this.context;
        if(password){
          dispatch(login(savedUserParams, true))
        } 

        const token = await AsyncStorage.getItem('token');
        const  Tokken = JSON.parse(token);
        console.log("*****************************",Tokken.data.token)
  this.state.UserToken = Tokken.data.token;
  console.log("SIGUP TOKEN", this.state.UserToken);
  this.fetchData();
 }

 fetchData= async() => {
  //this.state.UserToken = this.props.auth.user.data.token;
    this.setState({loading:true})
  const data = {
      method: 'GET',
      headers: {
      'Usertoken': this.state.UserToken
      },
     
      }
    const response =await fetch( `http://s2.staging-host.com/birddog-express/api/user/profile`,data);
      const json = await response.json();
      console.log("-------------------------------------DRAWER NAME",json)


      this.setState({data:json.data, loading:false,});
      var name = this.state.data.name;
      var TrimName =name.trim();
      var result = TrimName.slice(0, 1);

      this.setState({FirstNameChar:result})


    
}
  

      onPress = (item) => {
        this.state.isVisible = false;
       
          console.log("INDEX", item.index);
        if(item.index === 0){
          this.props.homeSection();
       NavActions.dashboard();
        }
        else if(item.index === 1){
          const {store: {dispatch}} = this.context;
          dispatch(getDetails(this.state.UserToken))
          //check here
         .then((res) => {
                   console.log("Details Response",res)
                   this.props.homeSection();
                  this.state.isVisible = false;
                  NavActions.newlead();
          
          
          }).catch(() => {
            this.setState({isVisible: false});
          });
    
      
          
          }
        else if(item.index === 2){
          this.props.homeSection();
          NavActions.tracklead();
   
        }


        else if(item.index === 3){
          this.props.homeSection();
         NavActions.mymoney();
        }

        else if(item.index === 4){
          this.props.homeSection();
    
        NavActions.myprofile();
          
        
        }
        else if(item.index === 5){
          this.props.homeSection();
            NavActions.settings();
          }

      };
      
       onPressLogout = async () => {
       //this.props.homeSection();
       AsyncStorage.removeItem('userCredentials');
       AsyncStorage.removeItem('token');
       AsyncStorage.removeItem('UserType');
       AsyncStorage.removeItem('token');
       AsyncStorage.removeItem('video_id');
       AsyncStorage.removeItem('w_status');
        const {store: {dispatch}} = this.context;
        dispatch(logout());
    
      }
    
    
  
  render() {

    
    const items = [
        {index: 0, title: 'Dashboard',image:require('../../images/menu.png')},
        {index: 1, title: 'New Lead', image:require('../../images/addsidenav.png')},
        {index: 2, title: 'Track Lead', image:require('../../images/locationsidenav.png')},
        {index: 3, title: 'My Money', image:require('../../images/moneybagsidenav.png')},
        {index: 4, title: 'My Profile', image:require('../../images/usersidenav.png')},
        {index: 5, title: 'Settings', image:require('../../images/settingsidenav.png')}]
       
    return(
      <Container>
          { this.state.isload && 
          <View style={{flex:1,flexDirection:"column"}}>
           
                 <View style={{flex:0.15,backgroundColor:'#212121',flexDirection:'row', alignItems:"center"}}>
                 <View style={{borderRadius: 30,width: 60,height: 60, 
                   backgroundColor:'#74930A',marginLeft:Metrics.screenWidth/25, justifyContent:"center",alignItems:"center"}}>
                  <H3 style={{color:'white',  backgroundColor:'transparent', fontFamily:'robotoBold'}}>{this.state.FirstNameChar}</H3>
                </View>
            <View style={{flex:1,marginLeft:5}}>
             <Text style={{color:'white',fontSize:15, fontFamily:'robotoRegular'}}>{this.state.data.name}</Text>
            </View>
            <View style={{marginRight:Metrics.screenWidth/14}}>
            <TouchableOpacity onPress= {()=>this.onPressLogout()}>
            <Image source={Images.logoutnavbar} />
            </TouchableOpacity>
           </View>
         </View>

         <View style={{flex:0.85, backgroundColor:'#333333'}}>
         
         <View style={styles.listContainer}>
  
           <List
              
             dataArray={items}
             renderRow={(item) =>
               <ListItem
                 style={{
                   height:Metrics.screenHeight/10,
                   alignItems: 'center',
                   justifyContent: 'center',
                   marginLeft: 1,
                   borderColor: '#494949',
                   backgroundColor:"transparent"
               
                 }}>
                 <TouchableOpacity
                   onPress={ () => this.onPress(item)}
                   hitSlop={{top: 12, left: 36, bottom: 0, right: 0}}
                   style={{flexDirection: 'row', justifyContent: 'center',alignItems:"center",}}>
                   <Left
                     style={{
                       justifyContent: 'center',
                       top: 8,
                       marginLeft:Metrics.screenWidth/30
                     }}>

                     <Image source={item.image}></Image>
               
                     <Text style={styles.itemList}>{item.title}</Text>
                   </Left>
                   <Right
                     style={{
                       marginRight: 5,
                     }}>
                     <Image source={Images.rightarrow} ></Image>
             
                   </Right>
                 </TouchableOpacity>
               </ListItem>
             }
           />
    
       </View>

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

export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(MenuLeftDrawer)