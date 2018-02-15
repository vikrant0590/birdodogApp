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
             state:"--CHOOSE--",
            trashCliked:false,
            Vacant:false,
            hoarding:true,
            lawn:true,
            rotting: false,
            foundation: true,
            low:true,
            roof:false,
            street:false,
            city:false,
            State:false,
            zip:false,
            cityy:undefined,
            statee:undefined,
            zipp:undefined,

         }
     }
     onActiveStreet(){
        this.setState({ street:true,city:false,State:false,zip:false })
      }
      onDeactiveStreet(){
        this.setState({ street:false})
      }
      onActiveCity(){
        this.setState({ street:false,city:true,State:false,zip:false })
      }
      onDeactiveCity(){
        this.setState({ city:false})
      }
      onActiveState(){
        this.setState({ street:false,city:false,State:true,zip:false })
      }
      onDeactiveState(){
        this.setState({ State:false})
      }
      onActiveZip(){
        this.setState({ street:false,city:false,State:false,zip:true })
      }
      onDeactiveZip(){
        this.setState({ zip:false})
      }
     render(){
         return(
            
             <View>
            <View style={{ marginTop:Metrics.screenHeight/20}}>
            <Text style={{ fontSize:12,color:'#333333'}}>Property Detail</Text> 
         </View>
       <View style={{marginTop:Metrics.screenHeight/40}}>
           <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Label style={{fontSize:11,}}>City *</Label>
              <Input 
              style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/40}}
              autoCapitalize="none" 
              autoCorrect={false}
              returnKeyType="next"
              autoFocus ={false}
               onBlur={()=>this.onDeactiveCity()}
                onTouchStart={()=>this.onActiveCity()}
                onChangeText={(city)=> this.setState({city:cityy})}
                
                />

           </Item>
           { this.state.city === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
           />
                }

       </View>


       <View style={{marginTop:Metrics.screenHeight/40}}>
        <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
        <Label style={{fontSize:11,}}>State * </Label>
        <Input 
        onBlur={()=>this.onDeactiveState()} 
        onTouchStart={()=>this.onActiveState()} 
         style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/20}}
         autoCapitalize="none" 
         autoCorrect={false}
         returnKeyType="next"
         autoFocus ={false}
         onChangeText={(state)=>this.setState({statee:state})}
         />

     </Item>
     { this.state.State === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
           />
                }

    
 </View>


     
       <View style={{marginTop:Metrics.screenHeight/40}}>
           <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Label style={{fontSize:11,}}>Zip *</Label>
              <Input
               onBlur={()=>this.onDeactiveZip()}
                onTouchStart={()=>this.onActiveZip()}
                 style={{borderBottomWidth: 0, marginLeft:-Metrics.screenWidth/40}}
                 onChangeText={(zip)=>this.setState({zipp:zip})}
                 />

           </Item>
           { this.state.zip === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45,}}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
           />
                }
       </View>

       
        </View>
       
         )
     }
 } 
