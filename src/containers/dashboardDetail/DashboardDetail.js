'use strict';
import React, {
  Component
} from 'react';

import {
  AlertIOS,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {Content} from 'native-base';
import styles from './DashboardDetailStyles';
import Video from 'react-native-video';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import VideoPlayer from 'react-native-video-player';

import Modal from 'react-native-simple-modal';

export default class DashboardDetail extends Component { 
  constructor(){
    super();
    this.state= {
      checked:true,
      open:false
   
    }
  }

    render() {
        return (
          <View style={{flex:1, flexDirection:'column', marginBottom:Metrics.screenHeight/30}}>

      <View style={{flex:0.44,}}>
            <VideoPlayer
                  pauseOnPress
                 
              //endWithThumbnail
              //thumbnail={{ uri: this.state.thumbnailUrl }}
              video={{ uri:  'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'  }}
              //videoWidth={this.state.video.width}
             // videoHeight={this.state.video.height}
              //duration={this.state.video.duration/* I'm using a hls stream here, react-native-video
                //can't figure out the length, so I pass it here from the vimeo config */}
            />
            <Image source ="Images.backwhite" style={{backgroundColor:'red'}}/>
            </View>

             
              <View style={{
              
                 flex:0.40, 
                 flexDirection:"column",
                  marginLeft:Metrics.screenWidth/20,
                  marginRight:Metrics.screenWidth/20,
                 marginTop:-Metrics.screenHeight/8,
                  }}>
               <Text style={{fontSize:17}}> Training Video 1</Text>
            
               <Text style={{color:'#878787', fontSize:10,marginTop:Metrics.screenHeight/50,}}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               It has survived not only five centuries. It was popularised in 
               the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. {'\n\n'}
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text
                 ever since the 1500s.
               </Text>

            </View>  
          <View style={{flex:0.001, backgroundColor:'#878787'}}></View>


            <View style={{flex:0.15,
              marginLeft:Metrics.screenWidth/20,
                  marginRight:Metrics.screenWidth/20,
                  flexDirection:"column",
              
            }}>
               <View style={{ flex:1, flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
                 {this.state.checked ?
                 <View style={{flex:0.1, }}>
                 <TouchableOpacity onPress={()=>this.setState({checked:!this.state.checked})}>
                  <Image source={Images.checkbox}/>
                  </TouchableOpacity>
                  </View>
                  :
                  <View style={{flex:0.1}}>
                  <TouchableOpacity onPress={()=>this.setState({checked:!this.state.checked})}>
                  <Image source={Images.uncheckbox} />
                  </TouchableOpacity>
                  </View>
                 }
                

                 <View style={{flexDirection:'row', flex:0.9, }}>
                   <Text style={{fontSize:11,color:'#333333'}}>I Agree with your</Text>
                   <TouchableOpacity onPress={()=>this.setState({ open: true})}>
                   <Text style={{fontSize:12}}> Terms and Conditions</Text>
                   </TouchableOpacity>
                   </View>
                 
               </View>    

               <View style={{flex:1, justifyContent:'flex-end'}}>
               <TouchableOpacity  
                   style={{borderRadius:20,
                      height:35,
                      
                      //width:Metrics.screenWidth/1.2,
                   
                    justifyContent:"center",alignItems:"center",
                   backgroundColor:'#8CB102',
                   }}>
                   <Text style={{color:"white", fontSize:15}}>NEXT TRAINING VIDEO</Text>
                    
                   </TouchableOpacity>

               </View> 

          </View>
          <Modal
	open={this.state.open}
	offset={0}
	overlayBackground={'rgba(0, 0, 0, 0.75)'}
	animationDuration={200}
	animationTension={40}
	modalDidOpen={() => undefined}
	modalDidClose={() => this.setState({open:false})}
	closeOnTouchOutside={true}
	containerStyle={{
	   justifyContent: 'center'
	}}
	modalStyle={{
    flex:1,
	   borderRadius: 2,
	   margin: 20,
	   padding: 10,
	   backgroundColor: 'white'
	}}
  disableOnBackPress={false}>
        <Content>
            <View style={{ 
            flex:1,
             marginLeft:Metrics.screenWidth/40 ,
             marginRight:Metrics.screenWidth/40,
             flexDirection:"column"
              }}>
              <View style={{flexDirection:'row'}}>
                  <View style={{flex:0.8,alignItems:'flex-start',}}>
                   <Text style={{fontSize:17,}}>Terms and Conditions</Text>
                   </View>

                   <View style={{flex:0.2, alignItems:'flex-end',}}>
                     <TouchableOpacity onPress={()=>this.setState({open:false})}>
                        <Image source={Images.backgreen} />
                   </TouchableOpacity>
                   </View>
              </View>
            
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
</Modal>
          </View>
        );
      }
    }
    
 