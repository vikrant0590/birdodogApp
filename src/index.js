import React, { Component } from 'react';
import {Text, StyleSheet, View,  Stack, NativeAppEventEmitter, Alert, BackAndroid, BackHandler, AsyncStorage} from 'react-native';
import {
    Login,
    Signup,
    ForgotPAssword,
    ChangePassword,
    Dashboard,
    TrackLead,
    Profile,
    Settings,
    NewLead,
    MyMoney,
    MyProfile,
    EditProfile,
    Faq,
    NeedHelp,
    TermsCondition,
    DashboardDetail
} from './containers';
import {Icon} from 'native-base';

 import {MenuLeftDrawer } from './components'

import {  Colors, Metrics, Images } from './theme';
import NavigationDrawer from './NavigationDrawer';
import { Router, Scene, Actions as NavigationActions } from 'react-native-router-flux';
import { login } from './redux/modules/auth';
import PropTypes from 'prop-types';
const Styles = {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.BaseColor,
    borderBottomWidth: 0,
  },
  dashboardNavBar: {
    flex:1,
    backgroundColor: Colors.background,
  },
  title: {
    color: Colors.snow
  },

  navTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
 

  titleTextStyle: {
    textAlign: 'center',
    color: Colors.white,
  },

};



export default class AppRouter extends Component {

  static contextTypes = {
    store: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      loading: true,
    };
  }

  // componentWillMount = async () => {
  
  //   try {
  //     const userCredential = await AsyncStorage.getItem('userCredentials');
  //     const  savedUserParams = JSON.parse(userCredential);
  //     console.log("savedUserParams",savedUserParams)
      
  //     if(!savedUserParams){
  //       this.setState({ loading: false });

  //     } else {
  //       const password = savedUserParams.password;
  //       const {store: {dispatch}} = this.context;
  //       if(password){
  //         dispatch(login(savedUserParams, true))
  //           .then( (res) => {
              
  //             if(res.status === 200){
  //               console.log("Already LOGGED IN");
  //             this.setState({
  //               logged: true,
  //               loading: false,
  //             });
  //             console.log(this.state.logged);
             
  //           }
  //           })
  //           .catch( () => {
  //             this.setState({
  //               loading: false,
  //             })
  //           });

  //       } 

  //     }
  //   } catch (err){
  //   }

  // }

    render() {
       
   
        return (
          <Router
           navigationBarStyle={{backgroundColor:'#8CB102',borderBottomWidth: 0,}}
           onExitApp={onExitApp}
           drawerImage={Images.navDrawerIcon}
           hideNavBar={false}
           backButtonImage={Images.backwhite}
          >

          <Scene key="root" titleStyle={{ color:'white' }}  leftButtonIconStyle={{width:Metrics.screenWidth/15,height:Metrics.screenWidth/15, }}>
                 <Scene key="login" component={Login} hideNavBar={true} initial={!this.state.logged}/>
                 <Scene key="signup" component={Signup} hideNavBar={false} title="SIGN UP"   />
                 <Scene key="forgotPassword" component={ForgotPAssword} hideNavBar={false} title="FORGOT PASSWORD"  />
                 <Scene key="changePassword" component={ChangePassword} hideNavBar={false} title="CHANGE PASSWORD" />
                 <Scene key="editprofile" component={EditProfile} hideNavBar={false} title="EDIT PROFILE"/>
                 <Scene key="faq" component={Faq} hideNavBar={false} title="FAQ" />
                 <Scene key="help"component={NeedHelp} hideNavBar={false} title="NEED HELP?" />
                 <Scene key="termsCondition" component={TermsCondition} hideNavBar={false} title="TERMS AND CONDITIONS"/>
                 <Scene key="dashboarddetail"component={DashboardDetail} hideNavBar={true}  />



           <Scene key="drawer" component={NavigationDrawer} type="replace" initial={this.state.logged}>
              <Scene key="drawerChildrenWrapper" titleStyle={{ color:'white' }} >
                 <Scene key="dashboard" component={Dashboard} hideNavBar={false} title="DASHBOARD"  type="replace" initial={this.state.logged}/>
                 <Scene key="myprofile" component={MyProfile} hideNavBar={false} title="MY PROFILE" type="replace"/>
                 <Scene key="tracklead"component={TrackLead} hideNavBar={false} title="TRACK LEAD" type="replace" />
                 <Scene key="newlead" component={NewLead} hideNavBar={false} title="ADD NEW LEAD"  type="replace" />
                 <Scene key="mymoney"component={MyMoney} hideNavBar={false} title="MONEY TRACK" type="replace" />
                 <Scene key="settings"component={Settings} hideNavBar={false} title="SETTINGS" type="replace"    />
             </Scene>
           </Scene>

        </Scene>
        </Router>
    );
  }
}
const onExitApp = () => {
  Alert.alert(
    'Birddog',
    'Are you sure to exit this app ?',
    [
      { text: 'Cancel', onPress: () => {} },
      { text: 'Ok', onPress: () => BackHandler.exitApp() },
    ]
  );
  return true;
};