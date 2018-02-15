import React,{ Component} from 'react';
import { Text, TouchableOpacity, View, Image,AsyncStorage,NetInfo} from 'react-native';
import { Container, Content, Button, Icon, Grid, Col, Row ,Body,Card, List, ListItem, H3,Left,Right} from 'native-base';
import styles from './SettingsStyles';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import {  Actions as NavActions } from 'react-native-router-flux';
import {Font} from 'expo';


export default class Settings extends Component {

constructor(){
  super();
  this.state={
    isConnected:true,
    isload:false,
  }
}

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



    onPress = (item) => {
        console.log("INDEX", item.index);
      if(item.index === 0){
     NavActions.changePassword();
      }
      else if(item.index === 1){
          NavActions.faq();
        }
      else if(item.index === 2){
     NavActions.termsCondition();
      }
      else if(item.index === 3){
       NavActions.help();
      }
     
   
    };

    render(){
        const items = [
            {index: 0, title: 'Change Password', image:require('../../images/lockgreen.png')},
            {index: 1, title: 'FAQ', image:require('../../images/FAQ.png')},
            {index: 2, title: 'Terms & Conditions',  image:require('../../images/Terms.png')},
            {index: 3, title: 'Need Help',  image:require('../../images/question.png')}];
        return(
          <Container style={{flex:1,marginTop:Metrics.navBarHeight, flexDirection:'column'}}>
          {this.state.isload && 
            <View style={{flex:1}}>
                       
                        <List
             dataArray={items}
             renderRow={(item) =>
               <ListItem 
                 style={{
                   alignItems: 'center',
                   justifyContent: 'center',
                   marginLeft: 1,
                   borderColor: '#A3A3A3',
                   backgroundColor:"transparent",
               
                 }}>
                 <TouchableOpacity
                   onPress={ () => this.onPress(item)}
                   hitSlop={{top: 12, left: 36, bottom: 0, right: 0}}
                   style={{flexDirection: 'row', justifyContent: 'center',alignItems:"center"}}>
                   <Left
                     style={{
                       justifyContent: 'center',
                    
                       top: 5,
                       marginLeft:Metrics.screenWidth/25
                     }}>
             <Image source={item.image} resizeMode="contain"></Image>
                     <Text style={styles.itemList}>{item.title}</Text>
                   </Left>
                   <Right
                     style={{
                       marginRight: 5,
                     }}>
                     {(item.index < 4) &&
                     <Image source={Images.arrowRight} ></Image>
                     }
             
                   </Right>
                 </TouchableOpacity>
               </ListItem>
                 }
                 />
            </View>
            

                }
      
            </Container>
        )
    }
}