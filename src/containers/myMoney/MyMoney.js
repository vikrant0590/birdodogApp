import React, { Component} from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body ,Icon } from 'native-base';

import {  Colors , Images, Metrics} from '../../theme';

export default class MyMoney extends Component {
    render(){
        const record = [
            {index: 0, TransactionID: '000104143240',date:'01/01/2017', LeadID:'0001', PaymentStatus:'PENDING'},
            {index: 1, TransactionID: '000104143241',date:'02/01/2017', LeadID:'0002', PaymentStatus:'RECIEVED'},
            {index: 2, TransactionID: '000104143242',date:'03/01/2017', LeadID:'0003', PaymentStatus:'FAILED'},
            {index: 3, TransactionID: '000104143243',date:'04/01/2017', LeadID:'0004', PaymentStatus:'PENDING'}];

            const Status = {
                           cd:6,
                           pp:'$2,700',
                           me:'$16,250'
                           }
        

        var payments = [];
        for(let i = 0; i < 4; i++){
            payments.push(
            <View>
            <Card style={{flex:1, height:Metrics.screenHeight/5,marginLeft:Metrics.screenWidth/25, marginRight:Metrics.screenWidth/25,}}>
              <CardItem style={{flex:0.49,alignItems:"center",backgroundColor:"#F8F8F8" }}>
              <View style={{flexDirection:"column"}}>
                <Text style={{ color:'#ADADAD',fontSize:11}}>TransactionID#: {record[i].TransactionID}</Text>
                <Text style={{marginTop:5,color:"#ADADAD", fontSize:11}}>{record[i].date}</Text>
                </View>
              </CardItem>
              <View style={{ flex:0.01,height:0.1,backgroundColor:'#ADADAD'}}></View>
              <CardItem style={{flex:0.49}}>
            <View style={{flexDirection:"column", flex:1}}>

                  <View style={{flexDirection:'row',flex:1}}>
                    <View style={{flex:0.7,justifyContent:'flex-start', alignItems:'flex-start'}}>
                       <Text style={{ color:'#ADADAD',fontSize:11}}>Lead ID</Text>
                    </View>
                    <View style={{flex:0.3, justifyContent:'flex-end', alignItems:'flex-end'}}>
                    <Text style={{ color:'#7a7a7a',fontSize:11}}>{record[i].LeadID}</Text>
                    </View>
                  </View>

                  <View style={{flexDirection:'row',flex:1}}>
                     <View style={{flex:0.7, justifyContent:'flex-start', alignItems:'flex-start'}}>
                        <Text style={{ color:'#ADADAD',fontSize:11}}>Payment Status</Text>
                      </View>
                      <View style={{flex:0.3,justifyContent:'flex-end', alignItems:'flex-end' }}>
               <Text style=
               {{ fontSize:11,
            color: record[i].PaymentStatus === 'PENDING'? '#F1B30B' : record[i].PaymentStatus ==='FAILED' ? 'black' : '#01A9F2'}}>{record[i].PaymentStatus}</Text>
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
                      <Image source= {Images.streach}/>

                       </View>   

                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                       <Image source= {Images.rotate}/>
                       </View>  

                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                       <Image source= {Images.dollar} />
                       </View>  
                   </View> 

                   <View style={{flexDirection:'row',height:Metrics.screenHeight/30,marginTop:Metrics.screenHeight/35}}>
                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                      <Text style={{ color: "#8DB103", fontSize:20}}>{Status.cd}</Text>

                       </View>   

                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                       <Text style={{ color: "#F0B20B", fontSize:20}}>{Status.pp}</Text>
                       </View>  

                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                       <Text style={{ color: "#01A9F2", fontSize:20}}>{Status.me}</Text>
                       </View> 
                   </View>    

                   <View style={{flexDirection:'row',height:15,}}>
                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                      <Text style={{fontSize:10,color:'#7A7A7A'}}>CONVERTED LEAD</Text>

                       </View>   

                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                       <Text style={{fontSize:10,color:'#7A7A7A'}}>PENDING PAYMENT</Text>
                       </View>  

                       <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                       <Text style={{fontSize:10,color:'#7A7A7A'}}>MONEY EARNED</Text>
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