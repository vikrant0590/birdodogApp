'use strict';
import React, { Component} from 'react';

import { Text, View, Image, FlatList,ActivityIndicator,Platform ,ListView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body ,Icon,List } from 'native-base';
import { connect } from 'react-redux';
import { getTrackList } from '../../redux/modules/auth';
import {  Colors , Images, Metrics} from '../../theme';
import PropTypes, { array, any, object } from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { register } from '../../redux/modules/auth';


 class TrackLead extends Component {

    constructor(props){
        super(props);
        this.state ={
             data:[],
            dummy:[],
            Heading:[],
            message:undefined,
             id:undefined,
            UserToken:undefined,
            payments:[],
            record:undefined,
            loading:false,
            page:1,
            error:null,
            refreshing:false,
            isVisible:false,
            recordLength:0,
            showMe:false,


          
         
            
        
        }
    }
    static  propTypes = {
        dispatch: PropTypes.func,
      };
    
      static contextTypes = {
        store: PropTypes.object,
        getTrackList: PropTypes.object
      };
     
    


   componentWillMount = ()=>{
    this.fetchData(); 
     }


     handleEnd =()=>{
      this.setState({loading:true})
      setTimeout(() => {
        this.setState(state =>({ page: this.state.page + 1 }),() =>this.fetchData());
      }, 3000);
       console.log("HandleEnd");
    

     }

     fetchData = async() => {
      this.state.UserToken = this.props.auth.user.data.token;
      console.log("USERT TOKEN TRACK LIST", this.state.UserToken);
      console.log("fetchEnd");
       console.log("pageno",this.state.page)
  

    const data = {
        method: 'GET',
        headers: {
        'Usertoken': this.state.UserToken
        },
       
        }
      const response =await fetch( `http://s2.staging-host.com/birddog-express/api/lead/list/${this.state.page}`,data);
        const json = await response.json();
       
       if(json.status === 200 && json.message!='No records found'){
       // console.log("***Check",json.data.leads)
        this.setState(state =>({
           
            data: this.state.page ===1 ? json.data.leads :[...state.data, ...json.data.leads],
            Heading:json.data,
            loading:false,
            message:json.message,
       
         
        }));
     
      //console.log("******DATA******",this.state.data);
     
   
             }else{
                 this.setState({loading:false,message:json.message,});
                
             }
            }
            
 
    render(){
      const isIOS = Platform.OS === 'ios';
       // console.log("******Render Data", this.state.data);
        return(
              
               <View style={{ marginTop:Metrics.navBarHeight,marginBottom:10,backgroundColor:'white',flex:1}}>
            

               { this.state.message!='No records found' ?


                 <View style={{flex:0.2,height:Metrics.screenHeight/6, flexDirection:'column', }}>

             <View style={{flexDirection:'row',marginTop:Metrics.screenHeight/30,height:Metrics.screenHeight/20,}}>

                   <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                    <Image source={Images.enter}/>
                  </View>   

                 <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                    <Image source={Images.rotate}/>
                </View>  

                <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                  <Image source={Images.check}/>
                </View>  
          </View> 

  <View style={{flexDirection:'row',height:Metrics.screenHeight/30,marginTop:Metrics.screenHeight/35}}>
      <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
     <Text style={{ color: "#8DB103", fontSize:20}}>{this.state.Heading.submitted}</Text>

      </View>   

      <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
      <Text style={{ color: "#F0B20B", fontSize:20}}>{this.state.Heading.in_progress}</Text>
      </View>  

      <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
      <Text style={{ color: "#01A9F2", fontSize:20}}>{this.state.Heading.finalized}</Text>
      </View> 
  </View>    

  <View style={{flexDirection:'row',height:15,}}>
      <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
     <Text style={{fontSize:10,color:'#7A7A7A'}}>SUBMITTED</Text>

      </View>   

      <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:10,color:'#7A7A7A'}}>IN PROGRESS</Text>
      </View>  

      <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:10,color:'#7A7A7A'}}>FINALIZED</Text>
      </View> 
  </View>  
  
  <View style={{flex:1,flexDirection:'row',marginTop:5}}>
    
       <View style={{flex:1,height:2.5,backgroundColor:'#8DB103',marginRight:4}}></View>

      <View style={{flex:1,height:2.5,backgroundColor:'#F0B20B',marginRight:4}}></View>

      <View style={{flex:1,height:2.5,backgroundColor:'#01A9F2'}}></View>
  
  </View>  

  </View>
        
        :


    <View style={{flex:0.2, flexDirection:'column',marginTop:Metrics.screenHeight/30 }}>

<View style={{flexDirection:'row',height:Metrics.screenHeight/20,}}>
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Image source={Images.enter}/>

</View>   

<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Image source={Images.rotate}/>
</View>  

<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Image source={Images.check}/>
</View>  
</View> 

<View style={{flexDirection:'row',height:Metrics.screenHeight/30,marginTop:Metrics.screenHeight/35}}>
<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Text style={{ color: "#8DB103", fontSize:20}}>0</Text>

</View>   

<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Text style={{ color: "#F0B20B", fontSize:20}}>0</Text>
</View>  

<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Text style={{ color: "#01A9F2", fontSize:20}}>0</Text>
</View> 
</View>    

<View style={{flexDirection:'row',height:15,}}>
<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Text style={{fontSize:10,color:'#7A7A7A'}}>SUBMITTED</Text>

</View>   

<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Text style={{fontSize:10,color:'#7A7A7A'}}>IN PROGRESS</Text>
</View>  

<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
<Text style={{fontSize:10,color:'#7A7A7A'}}>FINALIZED</Text>
</View> 
</View>  

<View style={{flex:1,flexDirection:'row',marginTop:5}}>

<View style={{flex:1,height:2.5,backgroundColor:'#8DB103',marginRight:4}}></View>

<View style={{flex:1,height:2.5,backgroundColor:'#F0B20B',marginRight:4}}></View>

<View style={{flex:1,height:2.5,backgroundColor:'#01A9F2'}}></View>

</View>  

</View>
  
 }     

          {this.state.message!='No records found' ?
    
       <View style={{flex:0.8,marginTop:Metrics.screenHeight/30}}>
                           <FlatList
                             style={{flex:1,}}
                           data ={this.state.data}
                           keyExtractor ={(x,i)=>i}
                           ListFooterComponent={() => <ActivityIndicator animating={this.state.loading}/>}
                         
                            onEndReached={()=> 
                        
                                this.handleEnd() 
                          
                        
                            }
                         
                            onEndReachedThreshold={isIOS ? 0 : 1}
                       
                              renderItem={({ item })=>


    <Card style={{flex:1, height:Metrics.screenHeight/4.5,marginLeft:Metrics.screenWidth/25, marginRight:Metrics.screenWidth/25,}}>
      <CardItem style={{flex:0.30,alignItems:"center", backgroundColor:"#F8F8F8"}}>
      <View style={{flexDirection:"column"}}>
        <Text style={{ color:'#ADADAD',fontSize:13}}>{item.address} </Text>
        <Text style={{marginTop:5,color:"#ADADAD", fontSize:11}}>{item.submit_date}</Text>
        </View>
      </CardItem>

<View style={{ flex:0.01,height:0.1,backgroundColor:'#D3D3D3'}}></View>
  <CardItem style={{flex:0.58}}>
    <View style={{flexDirection:"column", flex:1,justifyContent:"center"}}>
          <View style={{flexDirection:'row',flex:1}}>
             <View style={{flex:0.5, justifyContent:'flex-start', alignItems:'flex-start'}}>
               <Text style={{ color:'#ADADAD',fontSize:11}}>Lead ID</Text>
             </View>
            <View style={{flex:0.5,justifyContent:'flex-end', alignItems:'flex-end'}}>
               <Text style={{ color:'#7a7a7a',fontSize:11}}>{item.id}</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',flex:1}}>
              <View style={{ flex:0.5, justifyContent:'flex-start', alignItems:'flex-start'}}>
                <Text style={{ color:'#ADADAD',fontSize:11}}>Lead Status</Text>
              </View>

               <View style={{flex:0.5, justifyContent:'flex-end', alignItems:'flex-end'}}>
                 <Text style={{ fontSize:11, color:'gray'}}>{item.status}</Text>
              </View>
          </View>

          <View style={{flexDirection:'row',flex:1}}>
              <View style={{flex:0.5, justifyContent:'flex-start', alignItems:'flex-start'}}>
                <Text style={{ color:'#ADADAD',fontSize:11}}>Pay Status</Text>
              </View>

               <View style={{flex:0.5, justifyContent:'flex-end', alignItems:'flex-end'}}>
                 <Text
                  style={{
                       fontSize:11,
                       color: item.payment_status === 'PENDING'? '#F1B30B' : item.payment_status ==='PAID' ? '#01a9f2' :  '#333333'                   
                        }}>
                 {item.payment_status}</Text>
              </View>
          </View>

     </View>
   </CardItem>
    </Card>

}

/>
 </View>
    
 :
 <View style={{flex:0.8,marginTop:Metrics.screenHeight/30,alignItems:'center', justifyContent:'center'}}>
 <CardItem style={{flex:0.2,backgroundColor:"#01A9F2"}}>
  <Text style={{fontSize:16}}>No Records Found!</Text>       
  </CardItem>
</View>          

}
                </View>

        )
    }
}
const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
  };
  const  mapDispatchToProps = {
  
  };
  
  export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(TrackLead)