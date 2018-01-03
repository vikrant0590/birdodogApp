import React, { Component} from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body ,Icon } from 'native-base';

import {  Colors , Images, Metrics} from '../../theme';
export default class TrackLead extends Component {
    render(){

       const record = [
            {index: 0, address: '123 Street, San Antenio, Tx 78258',date:'01/01/2017', LeadID:'001', PayStatus:'PENDING', LeadStatus:'SUBMITTED'},
            {index: 1, address: '123 Street, San Antenio, Tx 78258',date:'02/01/2017', LeadID:'002', PayStatus:'PAID',LeadStatus:'IN PROGRESS'},
            {index: 2, address: '123 Street, San Antenio, Tx 78258',date:'03/01/2017', LeadID:'003', PayStatus:'NO PAYMENT',LeadStatus:'DEAL FELL THROUGH'},
            {index: 3, address: '123 Street, San Antenio, Tx 78258',date:'04/01/2017', LeadID:'004', PayStatus:'PENDING',LeadStatus:'IN PROGRESS'}];

   const recordDetail = {
       submitted:32,
       inProgress:8,
       finalized:12,
   }



        var payments = [];
        for(let i = 0; i < 4; i++){
            payments.push(
            <View key={i}>
            <Card style={{flex:1, height:Metrics.screenHeight/4.5,marginLeft:Metrics.screenWidth/25, marginRight:Metrics.screenWidth/25,}}>
              <CardItem style={{flex:0.30,alignItems:"center", backgroundColor:"#F8F8F8"}}>
              <View style={{flexDirection:"column"}}>
                <Text style={{ color:'#ADADAD',fontSize:11}}>{record[i].address} </Text>
                <Text style={{marginTop:5,color:"#ADADAD", fontSize:11}}>{record[i].date}</Text>
                </View>
              </CardItem>

      <View style={{ flex:0.01,height:0.1,backgroundColor:'#ADADAD'}}></View>
          <CardItem style={{flex:0.58}}>
            <View style={{flexDirection:"column", flex:1,justifyContent:"center"}}>
                  <View style={{flexDirection:'row',flex:1}}>
                     <View style={{flex:0.5, justifyContent:'flex-start', alignItems:'flex-start'}}>
                       <Text style={{ color:'#ADADAD',fontSize:11}}>Lead ID</Text>
                     </View>
                    <View style={{flex:0.5,justifyContent:'flex-end', alignItems:'flex-end'}}>
                       <Text style={{ color:'#7a7a7a',fontSize:11}}>{record[i].LeadID}</Text>
                    </View>
                  </View>

                  <View style={{flexDirection:'row',flex:1}}>
                      <View style={{ flex:0.5, justifyContent:'flex-start', alignItems:'flex-start'}}>
                        <Text style={{ color:'#ADADAD',fontSize:11}}>Lead Status</Text>
                      </View>

                       <View style={{flex:0.5, justifyContent:'flex-end', alignItems:'flex-end'}}>
                         <Text style={{ fontSize:11, color:'gray'}}>{record[i].LeadStatus}</Text>
                      </View>
                  </View>

                  <View style={{flexDirection:'row',flex:1}}>
                      <View style={{flex:1, flex:0.5, justifyContent:'flex-start', alignItems:'flex-start'}}>
                        <Text style={{ color:'#ADADAD',fontSize:11}}>Pay Status</Text>
                      </View>

                       <View style={{flex:0.5, justifyContent:'flex-end', alignItems:'flex-end'}}>
                         <Text
                          style={{
                               fontSize:11,
                               color: record[i].PayStatus === 'PENDING'? '#F1B30B' : record[i].PayStatus ==='PAID' ? '#01a9f2' :  '#333333'                   
                                }}>
                         {record[i].PayStatus}</Text>
                      </View>
                  </View>

             </View>
           </CardItem>
            </Card>
       </View>
            )
        }




        return(
               <Container style={{ marginTop:Metrics.navBarHeight,marginBottom:10}}>
                   <View style={{height:Metrics.screenHeight/6, flexDirection:'column',marginTop:20 }}>

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
                      <Text style={{ color: "#8DB103", fontSize:20}}>{recordDetail.submitted}</Text>

                       </View>   

                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                       <Text style={{ color: "#F0B20B", fontSize:20}}>{recordDetail.inProgress}</Text>
                       </View>  

                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                       <Text style={{ color: "#01A9F2", fontSize:20}}>{recordDetail.finalized}</Text>
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

                   <Content>
                       {payments}
       
        </Content>
                </Container>
        )
    }
}