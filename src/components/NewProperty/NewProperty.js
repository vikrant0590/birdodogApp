import React, { Component} from 'react';
import { Text, View , Image, TouchableOpacity, Button} from 'react-native';
import { Container, Content,  Form, Item, Input, Label , Row,Col} from 'native-base';
 import {Metrics, Images,} from '../../theme';
 import { ImagePicker } from 'expo';
 import ModalDropdown from 'react-native-modal-dropdown';

 export default class NewProperty extends Component {
     constructor(){
         super();
         this.state={
            trashCliked:false,
            Vacant:false,
            hoarding:true,
            lawn:true,
            rotting: false,
            foundation: true,
            low:true,
            roof:false
         }
     }
     render(){
         return(
             <View>
            <View style={{ marginTop:Metrics.screenHeight/20}}>
            <Text style={{ fontSize:12,color:'#333333'}}>Property Detail</Text> 
         </View>

     <View style={{marginTop:Metrics.screenHeight/40}}>
        <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
        <Label style={{fontSize:11,}}>Street *</Label>
        <Input style={{borderBottomWidth: 0}}/>

     </Item>
     <Image source={Images.bar} resizeMode="contain" 
     style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/40}}
     />
 </View>


       <View style={{marginTop:Metrics.screenHeight/40}}>
           <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Label style={{fontSize:11,}}>City *</Label>
              <Input style={{borderBottomWidth: 0}}/>

           </Item>
           <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/40}}
           />
       </View>


       <View>
       
         <ModalDropdown options={['PUNJAB', 'HARYANA','HIMACHAL PRADESH']}
  onSelect={(idx, value)=>this.setState({state:value, states:true, countrie:false})}
  dropdownStyle={{width:Metrics.screenWidth-Metrics.screenWidth/15,}}>

     <View  style={{marginTop:10,flexDirection:"column",marginTop:Metrics.screenHeight/20}}>
        <View style={{flexDirection:'row',}}>
         <Text style={{fontSize:11,color:'gray'}}>State * </Text>
        <Text style={{color:'black',marginLeft:Metrics.screenWidth/30}}>{this.state.state}</Text>
        </View>
        <Image source={Images.dropdownbar} resizeMode="contain"
        style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/120}} />

  </View>
  </ModalDropdown>
       </View>


     
       <View style={{marginTop:Metrics.screenHeight/40}}>
           <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Label style={{fontSize:11,}}>Zip *</Label>
              <Input style={{borderBottomWidth: 0}}/>

           </Item>
           <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/40}}
           />
       </View>

       
        </View>
         )
     }
 } 