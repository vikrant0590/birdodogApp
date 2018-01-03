import React,{ Component } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Content, Form, Item, Label, Input, Icon, Container, StyleProvider, Row, Col} from 'native-base';
import {  Colors , Images, Metrics} from '../../theme';
import ModalDropdown from 'react-native-modal-dropdown';





export default class EditProfile extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      country: '--CHOOSE--',
      state:'--CHOOSE--',
      name:false,
      Password:false,
      phone:false,
      street:false,
      countrie:false,
      states:false,
      city:false,
      zip:false,
      txd:false
      
    }
  }
  onActiveName(){
    this.setState({ name:true,countrie:false,states:false,Password:false,phone:false,street:false,city:false,zip:false,txd:false })
  }
  onDeactiveName(){
    this.setState({ name:false})
  }
  onActivePassword(){
    this.setState({ name:false,countrie:false,states:false,Password:true,phone:false,street:false,city:false,zip:false,txd:false })
  }
  onDeactivePassword(){
    this.setState({ Password:false})
  }
  onActivePhone(){
    this.setState({ name:false,countrie:false,states:false,Password:false,phone:true,street:false,city:false,zip:false,txd:false })
  }
  onDeactivePhone(){
    this.setState({ phone:false})
  }
  onActiveStreet(){
    this.setState({ name:false,countrie:false,states:false,Password:false,phone:false,street:true,city:false,zip:false,txd:false })
  }
  onDeactiveStreet(){
    this.setState({ street:false})
  }
  onActiveCity(){
    this.setState({ name:false,countrie:false,states:false,Password:false,phone:false,street:false,city:true,zip:false,txd:false })
  }
  onDeactiveCity(){
    this.setState({ city:false})
  }
  onActiveZip(){
    this.setState({ name:false,countrie:false,states:false,Password:false,phone:false,street:false,city:false,zip:true,txd:false })
  }
  onDeactiveZip(){
    this.setState({ zip:false})
  }
  onActiveTxd(){
    this.setState({ name:false,countrie:false,states:false,Password:false,phone:false,street:false,city:false,zip:false,txd:true })
  }
  onDeactiveTxd(){
    this.setState({ txd:false})
  }

    render(){
  
        return(
         
          
          <Container>
          
            
             <Content style={{flex:1,marginTop:Metrics.navBarHeight, marginBottom:Metrics.screenHeight/10}}>
                <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10}}>Personel Information</Text>
              <Form style={{ marginBottom:20}}>
              <Label style={{fontSize:12,marginLeft:Metrics.screenWidth/8.5,marginTop:Metrics.screenHeight/45,marginBottom:-10}}>Name</Label>
              
              <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Icon name="ios-person" style={{ color: '#8CB102',marginBottom:-9 }} />
                  <Input type="text" autoCapitalize="none" autoCorrect={false}
                   style={{marginBottom:-9,borderBottomWidth:0 , fontSize:13}} onBlur={()=>this.onDeactiveName()} onTouchStart={()=>this.onActiveName()}/>
                </Item>
                { this.state.name === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           />
                }

                <Label
                 style={{fontSize:12,
                         marginLeft:Metrics.screenWidth/8.5,
                         marginTop:Metrics.screenHeight/45,
                         marginBottom:-10}}
                         >Password</Label>
              <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              
                  <Image source={Images.message} style={{ marginBottom:-9 }} />
                  
                  <Input type="text" style={{marginBottom:-9,borderBottomWidth:0,fontSize:13 }} secureTextEntry={true} 
                   onBlur={()=>this.onDeactivePassword()} onTouchStart={()=>this.onActivePassword()}/>
                </Item>
                { this.state.Password === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           />
                }


                
                <Label
                style={{fontSize:12,
                        marginLeft:Metrics.screenWidth/8.5,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >Phone Number</Label>
              <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Image source={Images.phone} style={{ marginBottom:-9 }} />
                 <Input type="text" style={{marginBottom:-9,borderBottomWidth:0,fontSize:13 }} keyboardType="numeric"
                       onBlur={()=>this.onDeactivePhone()} onTouchStart={()=>this.onActivePhone()}
                 />
               </Item>
               { this.state.phone === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           />
                }



                  <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10,marginRight:10}}>Location</Text>

                  <Label style={{fontSize:12,
                        marginLeft:Metrics.screenWidth/19,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >
                        Street
                  </Label>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  <Input type="text" style={{marginBottom:-9,borderBottomWidth:0,fontSize:13}} 
                 onBlur={()=>this.onDeactiveStreet()} onTouchStart={()=>this.onActiveStreet()}
                   autoCapitalize="none"
                  autoCorrect={false}
                 
                  />
               </Item>
               { this.state.street === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           />
                }

                  <Label style={{fontSize:12,marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45,}}>Country</Label>
                  <ModalDropdown options={['INDIA', 'PAKISTAN','CANADA']}
                  onTouchStart={()=>this.setState({name:false,countrie:true,states:false,Password:false,phone:false,street:false,city:false,zip:false,txd:false})}
  onSelect={(idx, value)=>this.setState({country:value,states:false,street:false})}
  dropdownStyle={{width:Metrics.screenWidth - 10,height:110,marginLeft:10,marginRight:10}}>

     <View  style={{flexDirection:"column",marginTop:Metrics.screenHeight/40}}>
        <View style={{flexDirection:'row', marginLeft:Metrics.screenWidth/28}}>
        <Text style={{color:'black',marginLeft:Metrics.screenWidth/60,fontSize:13}}>{this.state.country}</Text>
        </View>
        { !this.state.countrie ?
        <Image source={Images.dropdownbar} resizeMode="contain"
        style={{width:Metrics.screenWidth-Metrics.screenWidth/15,  
           marginLeft:Metrics.screenWidth/28,
          
          }}  />
        :
        <Image source={Images.dropdownbar_green} resizeMode="contain"
        style={{width:Metrics.screenWidth-Metrics.screenWidth/15,  
           marginLeft:Metrics.screenWidth/28,}}>
           </Image>
        }

  </View>
  </ModalDropdown>

               <Label style={{fontSize:12,
                        marginLeft:Metrics.screenWidth/19,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >
                      City
                  </Label>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  
                 <Input type="text" style={{marginBottom:-9,borderBottomWidth: 0,fontSize:13}}  
                  autoCapitalize="none"
                 autoCorrect={false}
                 onBlur={()=>this.onDeactiveCity()} onTouchStart={()=>this.onActiveCity()}
                 />
               </Item>
               { this.state.city === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           />
                }

               <Label style={{fontSize:12,marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45,}}>
               State
               </Label>
               <ModalDropdown options={['PUNJAB', 'HARYANA','HIMACHAL PRADESH']}
               onTouchStart={()=>this.setState({ name:false,countrie:false,states:true,Password:false,phone:false,street:false,city:false,zip:false,txd:false})}
  onSelect={(idx, value)=>this.setState({state:value, countrie:false})}
  dropdownStyle={{width:Metrics.screenWidth - 10,height:110,marginLeft:10,marginRight:10}}>

     <View  style={{flexDirection:"column",marginTop:Metrics.screenHeight/40}}>
        <View style={{flexDirection:'row', marginLeft:Metrics.screenWidth/28}}>
        <Text style={{color:'black',marginLeft:Metrics.screenWidth/60,fontSize:13}}>{this.state.state}</Text>
        </View>
        { !this.state.states ?
        <Image source={Images.dropdownbar} resizeMode="contain"
        style={{width:Metrics.screenWidth-Metrics.screenWidth/15,  
           marginLeft:Metrics.screenWidth/28,
          
          }}  />
        :
        <Image source={Images.dropdownbar_green} resizeMode="contain"
        style={{width:Metrics.screenWidth-Metrics.screenWidth/15,  
           marginLeft:Metrics.screenWidth/28,}}>
           </Image>
        }

  </View>
  </ModalDropdown>

      <Label style={{fontSize:12,
                        marginLeft:Metrics.screenWidth/19,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >
                      Zip
                  </Label>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  <Input type="text" style={{marginBottom:-9,borderBottomWidth:0,fontSize:13}}  
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={()=>this.onDeactiveZip()} onTouchStart={()=>this.onActiveZip()}
                  />
               </Item>
               { this.state.zip === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           />
                }



               <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10,marginRight:10}}>Texas Drivers Licence</Text>

                  <Label style={{fontSize:12,
                        marginLeft:Metrics.screenWidth/19,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >
                        TXTDL
                  </Label>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  <Input type="text" style={{marginBottom:-9,borderBottomWidth: 0, fontSize:13}} 
                   autoCapitalize="none"
                   autoCorrect={false}
                   onBlur={()=>this.onDeactiveTxd()} onTouchStart={()=>this.onActiveTxd()}
                   />
               </Item>
               { this.state.txd === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           />
                }

             
               <View style={{flex:0.3, justifyContent:"center", alignItems:"center",marginTop:Metrics.screenHeight/10,marginBottom:30}}>
                   <TouchableOpacity 
                   style={{borderRadius:20,width:Metrics.screenWidth/1.3,height:40,justifyContent:"center",alignItems:"center",
                   backgroundColor:'#8CB102',}}>
                   <Text style={{color:"white", fontSize:16}}>SAVE CHANGES</Text>
                    
                   </TouchableOpacity>
                       </View>
              </Form>

              </Content>

          </Container>



        ) 
    }
}