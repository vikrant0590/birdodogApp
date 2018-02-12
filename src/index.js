
import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin';
import {Text, StyleSheet, Platform, View,  Stack, NativeAppEventEmitter, Alert, BackAndroid, BackHandler, AsyncStorage} from 'react-native';
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


 import {MenuLeftDrawer,WalkThroughFirst } from './components'

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
 
  
 
  renderTitleStyle: {
    alignSelf: 'center',
    width: null,
    ...Platform.select({
      ios: {
        top:  30, 
      },
      android: {
        top: 20,
      },
    }),
    right: 0,
  },
  titleTextStyle: {
    textAlign: 'center',
    color:'white',
    fontSize: 17,
  //  fontFamily: Fonts.Walkthrough.medium
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
      isVisible:false
    };
  }

  
  componentWillMount = async () => {
  
    // AsyncStorage.removeItem('userCredentials');
    try {
      const userCredential = await AsyncStorage.getItem('userCredentials');
      const  savedUserParams = JSON.parse(userCredential);
      console.log("savedUserParams",savedUserParams);
      
      
      if(!savedUserParams){
        this.setState({ loading: false });
        NavigationActions.login();

      } else {
        const password = savedUserParams.password;
        const {store: {dispatch}} = this.context;
        if(password){

          dispatch(login(savedUserParams, true))
          .then((res)=>{
            console.log("ALREADY RESPONSE",res)
            if(res.status=== 200){
              setTimeout(() => {
                this.setState({ loading: false });
                NavigationActions.drawer();
              }, 0);
          

            }
          })
        
          
        } 

      }
    } catch (err){
      this.setState({loading:false})
    }

  }

    render() {
    
       if(this.state.loading){
         return(
        <WalkThroughFirst/>
         )
       }
        return (
         
          <Router
           navigationBarStyle={{backgroundColor:'#8CB102',borderBottomWidth: 0,}}
           onExitApp={onExitApp}
           drawerImage={Images.navDrawerIcon}
           hideNavBar={false}
           backButtonImage={Images.backwhite}
           leftButtonIconStyle={{width:Metrics.screenWidth/15,height:Metrics.screenWidth/15}}
           titleStyle={{ color:'white' }}
          >

          {/* <Scene key="root" titleStyle={{ color:'white' }}  leftButtonIconStyle={{width:Metrics.screenWidth/15,height:Metrics.screenWidth/15, }}> */}
                 <Scene key="login" component={Login} hideNavBar={true} />
                 <Scene key="signup" component={Signup} hideNavBar={false} title="SIGN UP"   />
                 <Scene key="forgotPassword" component={ForgotPAssword} hideNavBar={false} title="FORGOT PASSWORD"  />
                 <Scene key="changePassword" component={ChangePassword} hideNavBar={false} title="CHANGE PASSWORD" />
                 <Scene key="editprofile" component={EditProfile} hideNavBar={false}   title="EDIT PROFILE"/>
                 <Scene key="faq" component={Faq} hideNavBar={false} title="FAQ" />
                 <Scene key="help"component={NeedHelp} hideNavBar={false} title="NEED HELP?" />
                 <Scene key="termsCondition" component={TermsCondition} hideNavBar={false} 
                  renderTitle={() =>
                    <View style={Styles.renderTitleStyle}>
                       <Text style={Styles.titleTextStyle}>TERMS AND CONDITIONS </ Text>
                    </View>
               }/>



           <Scene key="drawer" component={NavigationDrawer} type="replace" >
              <Scene key="drawerChildrenWrapper" titleStyle={{ color:'white' }} >
                 <Scene key="dashboard" component={Dashboard} hideNavBar={false} title="DASHBOARD" refresh={true} type="replace" initial/>
                 <Scene key="dashboarddetail"component={DashboardDetail} hideNavBar={true}  />
              
                 <Scene key="myprofile" component={MyProfile} hideNavBar={false} refresh={true}   title="MY PROFILE" type="replace"/>
                 <Scene key="tracklead"component={TrackLead} hideNavBar={false} title="TRACK LEAD" type="replace" />
                 <Scene key="newlead" component={NewLead} hideNavBar={false} title="ADD NEW LEAD"  type="replace" />
                 <Scene key="mymoney"component={MyMoney} hideNavBar={false} title="MONEY TRACK" type="replace" />
                 <Scene key="settings"component={Settings} hideNavBar={false} title="SETTINGS" type="replace" />
             </Scene>
           </Scene>
{/* 
        </Scene> */}
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
