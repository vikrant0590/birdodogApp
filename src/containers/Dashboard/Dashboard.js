import React, { Component } from 'react';
import { BlurView } from 'expo';
import { Audio, Video, ScreenOrientation } from 'expo';
import { Text, View, TouchableOpacity, Image, StatusBar, Platform ,AsyncStorage, FlatList, ActivityIndicator,StyleSheet,NetInfo} from 'react-native';

import {Container, Content, Header, Form, Item, Input, Label , Button,} from 'native-base';
import styles from './DashboardStyles';
import { Actions as NavActions } from 'react-native-router-flux';
import PropTypes, { any } from 'prop-types';
import { ApplicationStyles, Colors, Metrics, Images , Fonts} from '../../theme';
import DashboardDetail from '../dashboardDetail';
import { dashboard } from '../../redux/modules/auth';
import { connect } from 'react-redux';
import {Font} from 'expo';


import { toast } from '../../helpers/ToastMessage';

const propTypes = {
  homeSection: PropTypes.any,
test:any
};

 class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      description:[],
      UserToken:undefined,
      loading:false,
      message:undefined,
      page:1,
      UserType:undefined,
      refresh:false,
      refreshMe:false
    }
  }

  
  static  propTypes = {
    dispatch: PropTypes.func,
  };
  static contextTypes = {
    store: PropTypes.object,
    register: PropTypes.object
  };

  callme=async()=>{

    this.setState({page:1,data:[]})
    this.componentWillMount();
   

  }

  componentWillMount = async () => {
   

    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);

    NetInfo.isConnected.removeEventListener(
      'change',
      this._handleConnectivityChange
    );
  
    //this.props.homeSection;
    const token = await AsyncStorage.getItem('token');
    const  Usertoken = JSON.parse(token);
    this.setState({ UserToken:Usertoken.data.token})

    const Type = await AsyncStorage.getItem('UserType');
    const UserType = JSON.parse(Type);
    this.setState({UserType:Usertoken});

    console.log("USER TYPE",this.state.UserType)

    this.fetchData();
}

_handleConnectivityChange = (isConnected) => {
  this.setState({
    isConnected,
  });
  console.log('connectionInfo', isConnected);
  if(!this.state.isConnected){
    toast('Your internet connection has been lost.');
  }
}
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




componentWillReceiveProps(nextProps){
  
  console.log("Next Props...",nextProps)

}
componentWillUpdate(prevProps, prevState){
   console.log("previous",prevProps);
   console.log("previous state",prevState);
  this.state.isVisible = false;
}


refreshMethod=()=>{
this.setState({refreshMe:true})
}


    //on click video 
    
       playVideo = (watch_status, video_Id,) => {
         console.log("PAGE",this.state.page)
         console.log("???????????",video_Id);
         if(watch_status ==='watchable' || watch_status === 'watched'){
           console.log("Watch STATUS", watch_status);
         NavActions.dashboarddetail({id:video_Id,watch_status:watch_status,call:this.callme})
       
      
       
         }
        }

handleEnd =()=>{
  this.setState({loading:true})
  setTimeout(() => {
    this.setState(state =>({ page: this.state.page + 1 }),() =>this.fetchData());
  }, 3000);
   console.log("HandleEnd");


 }

fetchData= async() => {
      console.log("FUNCTION")
    this.setState({loading:true})
  const data = {
      method: 'GET',
      headers: {
      'Usertoken': this.state.UserToken
      },
     
      }
      // const {store: {dispatch}} = this.context;
      // dispatch(dashboard(this.state.page,this.state.UserToken))
      // .then((res)=>{
      //   console.log("1234567890",res)
      //   this.setState({DataDum:res})
      // })
    const response =await fetch( `http://s2.staging-host.com/birddog-express/api/video/list/${this.state.page}`,data);
      const json = await response.json();
      const json2 = json;
      
      console.log("JSON.......",json)

      for(var i=0;i<json.data.length;i++){
         json.data[i].description = json.data[i].description.slice(0,70);
      
      }
      console.log("&&&&&&&&&&&&&&&&",this.state.description);

      if(json.status === 200){
                
        this.setState(state =>({
           
          data: this.state.page ===1 ? json.data : [...state.data, ...json.data,],
          loading:false,
          message:json.message,
  
      }));
      }else {
        this.setState({message:json.message, loading:false});
      }
      console.log("API DATA DASHBOARD",this.state.data);
      console.log("MESSAGE",this.state.message)

    
}





    render(){
      const isIOS = Platform.OS === 'ios';
  
        return(
        <View style={{marginTop:Metrics.navBarHeight, flex:1, }}>
    {this.state.isload &&
                          <FlatList
                             style={{flex:1,}}
                          data ={this.state.data || this.state.description}
                           
                           keyExtractor ={(x,i)=>i}
                           ListFooterComponent={() => <ActivityIndicator animating={this.state.loading}/>}
                         
                             onEndReached={()=> 
                        
                              this.handleEnd() 
                          
                        }
                         
                            onEndReachedThreshold={isIOS ? 0 : 1}
                       
                              renderItem={({ item })=>

                           

  <View style={{ flex:1}} >
        <View style={{flex:1,height:Metrics.screenHeight/6,flexDirection:'row',
        marginLeft:Metrics.screenWidth/25,marginRight:Metrics.screenWidth/25,marginTop:12, }}>
        <View style={{flexDirection:'column'}}>
      
           <TouchableOpacity onPress={()=> this.playVideo(item.watch_status,item.id)} style={{height:Metrics.screenHeight/6,width:Metrics.screenWidth/2.4, }}>
            
             <Image   source={{uri:item.thumb_path}} 
             style={{
               borderBottomLeftRadius:5,
               borderBottomRightRadius:5,
               borderTopLeftRadius:5,
               borderTopRightRadius:5,
               borderRadius:5,
               height:Metrics.screenHeight/6,
               width:Metrics.screenWidth/2.4,
               resizeMode:'stretch'}}/>

               {item.watch_status === 'locked' &&
                <BlurView tint="light" intensity={40} style={StyleSheet.absoluteFill} >
         
                 </BlurView>
               }
           </TouchableOpacity>  
           { item.watch_status === 'watchable' || item.watch_status === 'watched' ?
           <View style={{marginTop:-Metrics.screenHeight/8.8,alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity onPress={()=> this.playVideo(item.watch_status,item.id)}>
           <Image source={Images.play} />
           </TouchableOpacity>
           </View>
            :
           
           <Image source={Images.lock} style={{marginTop:-Metrics.screenHeight/8.8,marginLeft:Metrics.screenWidth/6.3,alignItems:'center', justifyContent:'center'}}/>
         
            }
           </View>


           <View style={{height:Metrics.screenHeight/6,width:Metrics.screenWidth/2.1,flex:1,
           
             flexDirection:'column',
              marginLeft:Metrics.screenWidth/30,}}>
              <View  style={{alignItems:'flex-start',justifyContent:"center",marginTop:Metrics.screenHeight/120,flex:0.2, }}>
                 <Text style={{color:'#333333', fontSize:16,fontFamily:'robotoBold'}}>{item.title} </Text>
              </View>

              <View style={{flex:0.5, }}>
                 <Text style={{color:'#878787', fontSize:12, fontFamily:'robotoLight'}}>{item.description} ...</Text>
              </View>  

              <View style={{ flex:0.3,}}>
               <TouchableOpacity style={{alignItems:'center', flexDirection:'row',}} onPress={ ()=> this.playVideo(item.watch_status,item.id,)}>
               <Image source={Images.viewdetail} style={{marginRight:Metrics.screenWidth/60,}}/>
               <Text style={{fontSize:12, color:'#333333', justifyContent:'center',fontFamily:'robotoBold'}}>View Detail</Text>
              </TouchableOpacity>

              </View>  

             
          </View> 
      </View>

        <View style={{marginTop:12,height:0.4, backgroundColor:'#cecece'}}>

        </View>
     </View>
  
              }
                              
              
              />
            }
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

export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(Dashboard)
