import React, { Component } from 'react';
import { View, Text,NetInfo} from 'react-native';
import {Content, Container} from 'native-base';
import { ApplicationStyles, Colors, Metrics } from '../../theme';
import {Font} from 'expo';


export default class TermsCondition extends Component {
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
    render(){
        return(
            <Container>
                {this.state.isload && 
            <Content>
            
            <View style={{marginTop:Metrics.navBarHeight, 
            flex:1,
             marginLeft:Metrics.screenWidth/25 ,
             marginRight:Metrics.screenWidth/25,
             marginBottom:Metrics.screenHeight/7,
             fontFamily:'robotoRegular'
              }}>
            
              <Text style={{color:'#878787', fontSize:12, marginTop:Metrics.screenHeight/30}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type 
               specimen book. It has survived not only five centuries, but also the leap into 
               electronic typesetting, remaining essentially unchanged. It was popularised in 
               the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, {'\n\n\n'}
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                 ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                 it to make a type specimen book. It has survived not only five centuries, 
                 but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                  Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                   including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the {'\n\n\n'}
                   printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                   dummy text ever since the 1500s, when an unknown printer took a galley of type 
                   and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                    Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                     including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
                     printing and typesetting industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer took a galley of type
                       and scrambled it to make a type specimen book. It has survived not only five{'\n\n\n'}
                        centuries, but also the leap into electronic typesetting, remaining essentially
                         unchanged. It was popularised in the 1960s with the release of Letraset sheets
                          containing Lorem Ipsum passages, and more recently with desktop publishing
                           software like Aldus PageMaker including versions of Lorem Ipsum. Lorem 
                           Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                           Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                             specimen book. It has survived not only five centuries, but also the leap into{'\n\n\n'}
                              electronic typesetting, remaining essentially unchanged. It was popularised in 
                              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                               and more recently with desktop publishing software like Aldus PageMaker 
                               including versions of Lorem Ipsum.

             </Text>   
      


             </View>   
             </Content>
                }
             </Container>
        )
    }
}
