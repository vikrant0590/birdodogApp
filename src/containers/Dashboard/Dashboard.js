import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar, Platform ,AsyncStorage, FlatList, ActivityIndicator} from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button,} from 'native-base';
import styles from './DashboardStyles';
import { Actions as NavActions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { ApplicationStyles, Colors, Metrics, Images , Fonts} from '../../theme';

const propTypes = {
  homeSection: PropTypes.any,

};

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      UserToken:undefined,
      loading:false,
      message:undefined,
      page:1,
      UserType:undefined
    }
  }


  componentWillMount = async () => {
  
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


       playVideo = (file_path,description,title,watch_status) => {
         if(watch_status ==='watchable'){
           console.log("Watch STATUS", watch_status);
         NavActions.dashboarddetail({videoUrl:file_path,description:description,title:title})
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

    const response =await fetch( `http://s2.staging-host.com/birddog-express/api/video/list/1`,data);
      const json = await response.json();
      console.log("JSON",json)
      if(json.status === 200){
        this.setState(state =>({
           
          data: this.state.page ===1 ? json.data : [...state.data, ...json.data],
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
  
                          <FlatList
                             style={{flex:1,}}
                           data ={this.state.data}
                           keyExtractor ={(x,i)=>i}
                           ListFooterComponent={() => <ActivityIndicator animating={this.state.loading}/>}
                         
                            // onEndReached={()=> 
                        
                            //     this.handleEnd() 
                          
                        
                            // }
                         
                            onEndReachedThreshold={isIOS ? 0 : 1}
                       
                              renderItem={({ item })=>

                           

  <View style={{ flex:1}} >
        <View style={{flex:1,height:Metrics.screenHeight/6,flexDirection:'row',
        marginLeft:Metrics.screenWidth/25,marginRight:Metrics.screenWidth/25,marginTop:12, }}>
           
           <TouchableOpacity onPress={()=> this.playVideo(item.file_path, item.description,item.title,item.watch_status)} style={{height:Metrics.screenHeight/6,width:Metrics.screenWidth/2.4, }}>
             <Image     blurRadius ={item.watch_status === 'watchable' ? 0 : 3} source={{uri:item.thumb_path}} style={{
  
           
               borderBottomLeftRadius:5,
               borderBottomRightRadius:5,
               borderTopLeftRadius:5,
               borderTopRightRadius:5,
               borderRadius:5,
               height:Metrics.screenHeight/6,
               width:Metrics.screenWidth/2.4,
               resizeMode:'stretch'}}/>
           </TouchableOpacity>  


           <View style={{height:Metrics.screenHeight/6,width:Metrics.screenWidth/2.1,
           
             flexDirection:'column',
              marginLeft:Metrics.screenWidth/30}}>
              <View  style={{alignItems:'flex-start',justifyContent:"center",marginTop:Metrics.screenHeight/120,flex:0.2 }}>
                 <Text style={{color:'#333333', fontSize:13,}}>{item.title} </Text>
              </View>

              <View style={{flex:0.5 }}>
                 <Text style={{color:'#878787', fontSize:10}}>{item.description}</Text>
              </View>  

              <View style={{ flex:0.3,}}>
               <TouchableOpacity style={{alignItems:'center', flexDirection:'row',}} onPress={ ()=> this.playVideo(item.file_path,item.description,item.title,item.watch_status)}>
               <Image source={Images.viewdetail} style={{marginRight:Metrics.screenWidth/60,}}/>
               <Text style={{fontSize:11, color:'#333333', justifyContent:'center'}}>View Detail</Text>
              </TouchableOpacity>

              </View>  

             
          </View> 
      </View>

        <View style={{marginTop:12,height:1, backgroundColor:'#D3D3D3'}}>

        </View>
     </View>
  
              }
                              
              
              />

      </View>
      
      
        
    
    );
  }
}
    
 