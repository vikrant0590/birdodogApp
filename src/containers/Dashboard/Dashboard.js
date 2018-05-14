import React, { Component } from 'react';
import { BlurView } from 'expo';
import { Audio, Video, ScreenOrientation } from 'expo';
import { Text, View, TouchableOpacity, Image, StatusBar, Platform ,AsyncStorage, FlatList, ActivityIndicator,StyleSheet,NetInfo} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
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
      refreshMe:false,
      isVisible:true,
      isload:false
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
   
//  console.log("i am called");
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
    // console.log("UT",UserType)
    this.setState({UserType:UserType});

    // console.log("USER TYPE",this.state.UserType)

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
  
  // console.log("Next Props...",nextProps)

}
componentWillUpdate(prevProps, prevState){
  //  console.log("previous",prevProps);
  //  console.log("previous state",prevState);
  this.state.isVisible = false;
}


refreshMethod=()=>{
this.setState({refreshMe:true})
}


    //on click video 
    
       playVideo = (watch_status, video_Id,) => {
        //  console.log("PAGE",this.state.page)
        //  console.log("???????????",video_Id);
         if(watch_status ==='watchable' || watch_status === 'watched'){
           console.log("Watch STATUS", watch_status);
         NavActions.dashboarddetail({id:video_Id,watch_status:watch_status,call:this.callme})
       
      
       
         }
        }

handleEnd =()=>{
  this.setState({loading:true})
  setTimeout(() => {
    this.setState(state =>({ page: this.state.page + 1 }),() =>this.fetchData());
  }, 6000);
  //  console.log("HandleEnd");


 }

fetchData= async() => {
      // console.log("FUNCTION")
    this.setState({loading:true})
  const data = {
      method: 'GET',
      headers: {
      'Usertoken': this.state.UserToken
      },
     
      }
    
    const response =await fetch( `http://s2.staging-host.com/birddog-express/api/video/list/${this.state.page}`,data);
      const json = await response.json();
      const json2 = json;
      
      // console.log("JSON.......",json)

      for(var i=0;i<json.data.length;i++){
         json.data[i].description = json.data[i].description.slice(0,70);
      
      }
      // console.log("&&&&&&&&&&&&&&&&",this.state.description);

      if(json.status === 200){
                
        this.setState(state =>({
           
          data: this.state.page ===1 ? json.data : [...state.data, ...json.data,],
          loading:false,
          message:json.message,
          isVisible:false
  
      }));
      }else {
        this.setState({message:json.message, loading:false, isVisible:false});
      }
      // console.log("API DATA DASHBOARD",this.state.data);
      // console.log("MESSAGE",this.state.message)

    
}

    render(){
      const isIOS = Platform.OS === 'ios';
  
        return(
          <Container>
              <Spinner visible={this.state.isVisible}/>
        <View style={styles.container}>
    {this.state.isload &&
                          <FlatList
                             style={styles.flatListContainer}
                          data ={this.state.data || this.state.description}
                           
                           keyExtractor ={(x,i)=>i}
                           ListFooterComponent={() => <ActivityIndicator animating={this.state.loading}/>}
                         
                             onEndReached={()=> 
                        
                              this.handleEnd() 
                          
                        }
                         
                            onEndReachedThreshold={isIOS ? 0 : 1}
                       
                              renderItem={({ item })=>

                           

  <View style={styles.List} >
        <View style={styles.ListRow}>
        <View style={styles.ListImageRow}>
      
           <TouchableOpacity onPress={()=> this.playVideo(item.watch_status,item.id)} 
           style={styles.ImageTouch}>
            
             <Image   source={{uri:item.thumb_path}} 
             style={ styles.ImageThumb}/>

               {item.watch_status === 'locked' &&
                <BlurView tint="light" intensity={40} style={StyleSheet.absoluteFill} >
         
                 </BlurView>
               }
           </TouchableOpacity>  
           
           { item.watch_status !== 'locked'  ?
           <View style={styles.playIcon}>
              <TouchableOpacity onPress={()=> this.playVideo(item.watch_status,item.id)}>
           <Image source={Images.play} />
           </TouchableOpacity>
           </View>
            :
           
           <Image source={Images.lock} style={styles.lockIcon}/>
         
            }
           </View>


           <View style={styles.DetailColumn}>
              <View  style={styles.titleView }>
                 <Text style={styles.titleText}>{item.title} </Text>
              </View>

              <View style={styles.decView}>
                 <Text style={styles.videoDesc}>{item.description} ...</Text>
              </View>  

              <View style={styles.viewDetailView}>
               <TouchableOpacity style={styles.viewDetailTouchArea} onPress={ ()=> this.playVideo(item.watch_status,item.id,)}>
               <Image source={Images.viewdetail} style={styles.viewDetailButton}/>
               <Text style={styles.ViewDetailText}>View Detail</Text>
              </TouchableOpacity>

              </View>  

             
          </View> 
      </View>

        <View style={styles.ListRowSeperator}>

        </View>
     </View>
  
              }
                              
              
              />
            }
      </View>
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

export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(Dashboard)
