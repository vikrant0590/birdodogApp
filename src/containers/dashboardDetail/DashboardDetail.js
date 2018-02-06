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
  Image,
  StatusBar,
  AsyncStorage,
  Alert,
  Button,
  Dimensions
} from 'react-native';
import {Content} from 'native-base';


import styles from './DashboardDetailStyles';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import {Video, ScreenOrientation,} from 'expo';
import Modal from 'react-native-simple-modal';
import {Actions as NavAction} from 'react-native-router-flux';
import VideoPlayer from '@expo/videoplayer';
import PropTypes, {any, object} from 'prop-types';
import BaseScreen from './baseScreen';



export default class DashboardDetail extends BaseScreen {
  constructor(props){
    super(props);
    this.state= {
      checked:false,
      open:false,
      videoUrl:undefined,
      description:undefined,
      title:undefined,
      id:undefined,
      UserToken:undefined,
      data:[],
      dataSecond:[],
      status:undefined,
      termsCondition:false,
      finish:false,
      thankAlert:false,
     
     
    }
  }
  static  propTypes = {
   

    id:PropTypes.string,
    watch_status:PropTypes.string
  
  };
  backToDashboard = () =>{
   this.setState({thankAlert:false});
   NavAction.drawer();
  }
  changeState =()=>{
    this.setState({termsCondition:true});
  }

  onChangeFinished =() =>{
    this.setState({finish:true})
  }

  updateStatus = async () =>{
    console.log("IDIDIDIDIID",this.state.id);
 

      const dataa = {
        "term_condition": true
      }

    const data = {
    
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Usertoken': this.state.UserToken
      
      },
      body: JSON.stringify(dataa)
     
      }
      if(this.props.watch_status === 'watchable'){
    
    const response = await fetch( `http://s2.staging-host.com/birddog-express/api/video/update_watched_video_status/${this.state.id}`,data);
    const json = await response.json();
    if(json.status === 200){
      this.setState({thankAlert:true})
    }
    
   console.log("UPDATE STATUS",json);
      }
  }
 


  componentWillMount = async () => {

  
    const token = await AsyncStorage.getItem('token');
    const  Usertoken = JSON.parse(token);

    const type= await AsyncStorage.getItem('UserType');
    const UserType = JSON.parse(type);

    this.setState({ UserToken:Usertoken.data.token, UserType:UserType});
    const id ={
      id:this.props.id,
     
    }
    const watch_status ={

      watch_status:this.props.watch_status
    }

   AsyncStorage.setItem('video_id',JSON.stringify(id));
       this.setState({id:this.props.id});
       console.log("VIDEO ID",this.state.id)
       AsyncStorage.setItem('w_status',JSON.stringify(watch_status));

       const data = {
        method: 'GET',
        headers: {
        'Usertoken': this.state.UserToken
        },
       
        }
  
      const response =await fetch( `http://s2.staging-host.com/birddog-express/api/video/details/${this.state.id}`,data);
      const json = await response.json();
      this.setState({data:json.data})
      console.log("_____________________",json.data);



      const responseFirst =await fetch( `http://s2.staging-host.com/birddog-express/api/video/list/1`,data);
      const jsonFirst = await responseFirst.json();
      this.setState({dataSecond:jsonFirst.data});

      console.log("------ -------- -------",this.state.dataSecond[0].watch_status);
      this.setState({status: this.state.dataSecond[0].watch_status});
      

  }

    render() {
      console.log("sdjkfdsjk",this.state.isPortrait)
        return (
          <View style={{flex:1, flexDirection:'column', }}>


      <View style={{flex:0.33,}}>
     
      <VideoPlayer 
 
        data={()=>this.onChangeFinished()}
       
        
         videoProps={{
          //isLooping:true,
      
          shouldPlay: true,
       resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
         uri: this.state.data.file_path ,
         
       },
       
      }}
            showFullscreenButton={false}
            isPortrait={true}
            switchToLandscape={this.switchToLandscape.bind(this)}
            switchToPortrait={this.switchToPortrait.bind(this)}
            playFromPositionMillis={0}
    
  
 style={{flex:1,width: Metrics.screenWidth}}
    />
       <TouchableOpacity onPress={()=> NavAction.drawer()}
        style={{ marginTop:-Metrics.screenHeight/3.4,marginLeft:Metrics.screenWidth/24,width:Metrics.screenWidth/13}}>
        <Image  source={Images.backwhite} style={{ resizeMode:'contain',}}/>
       </TouchableOpacity>
                
       </View>
    

              <View style={{
     
                 flex:0.48, 
                 flexDirection:"column",
                  marginLeft:Metrics.screenWidth/20,
                  marginRight:Metrics.screenWidth/20,
                  marginTop:Metrics.screenHeight/15,
                 // marginBottom:Metrics.screenHeight/25,
        
      
       
                  }}>
               <Text style={{fontSize:20}}> {this.state.data.title}</Text>
            
               <Text style={{color:'#878787', fontSize:15,marginTop:Metrics.screenHeight/50,flex:1,}}>

                           {this.state.data.description}
               </Text>

            </View>  

{ this.state.status === 'watchable' && this.state.UserType === 'free' && this.state.finish && 
          <View style={{flex:0.001, backgroundColor:'#878787',}}></View>
                }

  { this.state.status === 'watchable' && this.state.UserType === 'free' && this.state.finish && 
            <View style={{flex:0.16,
              marginLeft:Metrics.screenWidth/20,
                  marginRight:Metrics.screenWidth/20,
                 flexDirection:"column",
              
            }}>
               <View style={{ flex:1,
             
                 flexDirection:'row', 
                 justifyContent:'flex-start',
                 alignItems:'center',
                 //marginBottom:Metrics.screenHeight/15
                 }}>
                 {this.state.checked ?
                 <View style={{flex:0.1,}}>
                 <TouchableOpacity onPress={()=>this.setState({checked:!this.state.checked})}>
                  <Image source={Images.checkbox} style={{resizeMode:'contain'}}/>
                  </TouchableOpacity>
                  </View>
                  :
                  <View style={{flex:0.1}}>
                  <TouchableOpacity onPress={()=>this.setState({checked:!this.state.checked})}>
                  <Image source={Images.uncheckbox} style={{resizeMode:'contain'}}/>
                  </TouchableOpacity>
                  </View>
                 }
                

                 <View style={{flexDirection:'row', flex:0.6, }}>
                   <Text style={{fontSize:11,color:'#333333'}}>I Agree with your</Text>
                   <TouchableOpacity onPress={()=>this.setState({ open: true})}>
                   <Text style={{fontSize:12}}> Terms and Conditions</Text>
                   </TouchableOpacity>
                   </View>
               
                 
               </View>    
         
               <View style={{ flex:0.4,justifyContent:'flex-end',marginTop:Metrics.screenHeight/20}}>
               <TouchableOpacity  
               onPress={()=> this.state.checked  ? this.updateStatus() : alert("please accept terms and condition")}
                   style={{borderRadius:20,
                      height:35,
                      
                      //width:Metrics.screenWidth/1.2,
                   
                    justifyContent:"center",
                    alignItems:"center",
                   backgroundColor:'#8CB102',
                   }}>
                   <Text style={{color:"white", fontSize:15}}>ACCEPT TERMS AND CONDITION</Text>
                    
                   </TouchableOpacity>

               </View> 

          </View>
  }

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


<Modal
	        open={this.state.thankAlert}
	        offset={0}
	        overlayBackground={'rgba(0, 0, 0, 0.75)'}
	         animationDuration={200}
         	animationTension={40}
	         modalDidOpen={() => undefined}
       	modalDidClose={() => this.setState({thankAlert:false})}
        	closeOnTouchOutside={false}
       	containerStyle={{
              justifyContent: 'center',
              alignItems:'center'
	          }}
	        modalStyle={{
         height:Metrics.screenHeight/3,
         width:Metrics.screenWidth/1.1,
	       borderRadius: 2,
	        margin: 20,
	        padding: 10,
         backgroundColor: 'white',
       
	}}
  disableOnBackPress={false}>
        <Content>
            <View style={{ 
          
             marginLeft:Metrics.screenWidth/40 ,
             marginRight:Metrics.screenWidth/40,
             
              }}>
             
              <Text style={{color:'black', fontSize:17, marginTop:Metrics.screenHeight/30}}> Birddog Express </Text>
               <Text style={{color:'gray', fontSize:12,marginTop:Metrics.screenHeight/70}}>Thanks for accepting terms & conditions.</Text>
             <Text style={{color:'gray', fontSize:12}}>Congrats! You have unlocked next training video.</Text>
             <TouchableOpacity onPress={()=>this.backToDashboard()} 
             style={{borderRadius:20,
              height:35,
            justifyContent:"center",
            alignItems:"center",
           backgroundColor:'#8CB102',
           marginTop:Metrics.screenHeight/20
           }}>
             <Text style={{color:'white', fontSize:16}}>OK</Text></TouchableOpacity>


             </View>   
             </Content>
</Modal>
          </View>
        );
      }
    }
    


    

