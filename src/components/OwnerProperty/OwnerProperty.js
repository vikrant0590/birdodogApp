import React, { Component} from 'react';
import { Text, View , Image, TouchableOpacity, Button} from 'react-native';
import { Container, Content,  Form, Item, Input, Label , Row,Col} from 'native-base';
 import {Metrics, Images,} from '../../theme';
 import { ImagePicker } from 'expo';
 import ModalDropdown from 'react-native-modal-dropdown';

export default class OwnerProperty extends Component {

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
           roof:false,
           Oname:false,
           Ophone:false,
           Oemail:false,
           Ostreet:false,
           Ocity:false,
           Ostate:false,
           Ozip:false
        }
    }
    onActiveStreet(){
        this.setState({ Ostreet:true,Ocity:false,Ostate:false,Ozip:false,Oname:false ,Ophone:false,Oemail:false})
      }
      onDeactiveStreet(){
        this.setState({ Ostreet:false})
      }
      onActiveCity(){
        this.setState({ Ostreet:false,Ocity:true,Ostate:false,Ozip:false,Oname:false ,Ophone:false,Oemail:false})
    }
      onDeactiveCity(){
        this.setState({ Ocity:false})
      }
      onActiveState(){
        this.setState({ Ostreet:false,Ocity:false,Ostate:true,Ozip:false,Oname:false,Ophone:false,Oemail:false })
    }
      onDeactiveState(){
        this.setState({ Ostate:false})
      }
      onActiveZip(){
        this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:true,Oname:false,Ophone:false,Oemail:false })
    }
      onDeactiveZip(){
        this.setState({ Ozip:false})
      }

      onActiveName(){
        this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:false,Oname:true,Ophone:false,Oemail:false })
    }
      onDeactiveName(){
        this.setState({ Oname:false})
      }
      onActivePhone(){
        this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:false,Oname:false,Ophone:true,Oemail:false })
    }
      onDeactivePhone(){
        this.setState({ Ophone:false})
      }
      onActiveEmail(){
        this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:false,Oname:false,Ophone:false,Oemail:true })
    }
      onDeactiveEmail(){
        this.setState({ Oemail:false})
      }
    render(){
        return(
            
            <View>
            
                   <View style={{ marginTop:Metrics.screenHeight/20}}>
            <Text style={{ fontSize:12,color:'#333333'}}>Owner Contact Info</Text> 
         </View>

     <View style={{marginTop:Metrics.screenHeight/40}}>
        <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
        <Label style={{fontSize:11,}}>Owner Name *</Label>
        <Input style={{borderBottomWidth: 0, }} onBlur={()=>this.onDeactiveNamee()} onTouchStart={()=>this.onActiveNamee()}/>

     </Item>
     { this.state.Oname === false ?
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
              <Label style={{fontSize:11,}}>Phone Number *</Label>
              <Input style={{borderBottomWidth: 0}} onBlur={()=>this.onDeactivePhonee()} onTouchStart={()=>this.onActivePhonee()}/>

           </Item>
           { this.state.Ophone === false ?
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
              <Label style={{fontSize:11,}}>Email Address *</Label>
              <Input style={{borderBottomWidth: 0}} onBlur={()=>this.onDeactiveEmaill()} onTouchStart={()=>this.onActiveEmaill()}/>

           </Item>
           { this.state.Oemail === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
           />
                }
       </View>


            <View style={{ marginTop:Metrics.screenHeight/20}}>
            <Text style={{ fontSize:12,color:'#333333'}}>Property Detail</Text> 
         </View>

     <View style={{marginTop:Metrics.screenHeight/40}}>
        <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
        <Label style={{fontSize:11,}}>Street *</Label>
        <Input style={{borderBottomWidth: 0}} onBlur={()=>this.onDeactiveStreett()} onTouchStart={()=>this.onActiveStreett()}/>

     </Item>
     { this.state.Ostreet === false ?
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
              <Label style={{fontSize:11,}}>City *</Label>
              <Input style={{borderBottomWidth: 0}} onBlur={()=>this.onDeactiveCityy()} onTouchStart={()=>this.onActiveCityy()}/>

           </Item>
           { this.state.Ocity === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
           />
                }
       </View>


       <View>
       
         <ModalDropdown options={['PUNJAB', 'HARYANA','HIMACHAL PRADESH']}
  onTouchStart={()=>this.setState({Ostreet:false,Ocity:false,Ostate:true,Ozip:false,Oname:false ,Ophone:false,Oemail:false})}                           
  onSelect={(idx, value)=>this.setState({state:value, Ostate:true})}
  dropdownStyle={{width:Metrics.screenWidth-Metrics.screenWidth/15,}}>

     <View  style={{marginTop:10,flexDirection:"column",marginTop:Metrics.screenHeight/20}}>
        <View style={{flexDirection:'row',}}>
         <Text style={{fontSize:11,color:'gray'}}>State * </Text>
        <Text style={{color:'black',marginLeft:Metrics.screenWidth/30}}>{this.state.state}</Text>
        </View>
       
  { !this.state.Ostate ?
        <Image source={Images.dropdownbar} resizeMode="contain"
        style={{width:Metrics.screenWidth-Metrics.screenWidth/15,  
            marginTop:-Metrics.screenHeight/120,
      
          
          }}  />
        :
        <Image source={Images.dropdownbar_green} resizeMode="contain"
        style={{width:Metrics.screenWidth-Metrics.screenWidth/15,  
            marginTop:-Metrics.screenHeight/120,
           
        }}>
           </Image>
        }
  </View>
  </ModalDropdown>
       </View>


     
       <View style={{marginTop:Metrics.screenHeight/40}}>
           <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Label style={{fontSize:11,}}>Zip *</Label>
              <Input style={{borderBottomWidth: 0}} onBlur={()=>this.onDeactiveZipp()} onTouchStart={()=>this.onActiveZipp()}/>

           </Item>
           { this.state.Ozip === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
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