import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Button, Icon, Grid, Col, Row ,Body,Card, List, ListItem, H3,Left,Right} from 'native-base';
import { View, Text, Image, Platform, TouchableOpacity, Switch, Share,AsyncStorage } from 'react-native'
import { Colors, Images, Metrics } from '../../theme';
import styles from './MenuLeftDrawerStyles';
import {MyProfile}  from '../../containers';
import Spinner from 'react-native-loading-spinner-overlay';
import { toast } from '../../helpers/ToastMessage';

import { Actions as NavActions } from 'react-native-router-flux';
import { logout, getProfile, getDetails, getTrackList } from '../../redux/modules/auth';
import { connect } from 'react-redux';




 class MenuLeftDrawer extends Component {
  constructor(props){
    super(props);
    this.state = {
    UserToken: undefined,
    isVisible:false,
    click:0,
    //user:this.props.auth.userProfile,
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

      componentWillMount = async () => {
        const token = await AsyncStorage.getItem('token');
        const  tokenSend = JSON.parse(token);
        console.log("tooookkkkkeeennnnnnnn",tokenSend.data.token)
        this.state.UserToken = tokenSend.data.token;
        
  //this.UserToken = this.props.auth.user.data.token;

  console.log("SIGUP TOKEN", this.state.UserToken);
 }
 
  

      onPress = (item) => {
        this.state.isVisible = false;
       
          console.log("INDEX", item.index);
        if(item.index === 0){
          this.props.homeSection();
       NavActions.dashboard();
        }
        else if(item.index === 1){
          this.props.homeSection();

          const {store: {dispatch}} = this.context;
          dispatch(getDetails(this.state.UserToken))
          //check here
         .then((res) => {
                   console.log("Details Response",res)
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
          <View style={{flex:1,flexDirection:"column"}}>
                 <View style={{flex:0.15,backgroundColor:'#212121',flexDirection:'row', alignItems:"center"}}>
                 <View style={{borderRadius: 30,width: 60,height: 60, 
                   backgroundColor:'#74930A',marginLeft:Metrics.screenWidth/25, justifyContent:"center",alignItems:"center"}}>
                  <H3 style={{color:'white',  backgroundColor:'transparent'}}>P</H3>
                </View>
            <View style={{flex:1,marginLeft:5}}>
             <Text style={{color:'white',fontSize:15}}>Philp Health</Text>
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