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
    this.setState({ name:true, countrie:false, states:false })
  }
  onDeactiveName(){
    this.setState({ name:false})
  }
  onActivePassword(){
    this.setState({ Password:true, countrie:false, states:false})
  }
  onDeactivePassword(){
    this.setState({ Password:false})
  }
  onActivePhone(){
    this.setState({ phone:true, countrie:false, states:false})
  }
  onDeactivePhone(){
    this.setState({ phone:false})
  }
  onActiveStreet(){
    this.setState({ street:true, countrie:false, states:false})
  }
  onDeactiveStreet(){
    this.setState({ street:false})
  }
  onActiveCity(){
    this.setState({ city:true, countrie:false, states:false})
  }
  onDeactiveCity(){
    this.setState({ city:false})
  }
  onActiveZip(){
    this.setState({ zip:true, countrie:false, states:false})
  }
  onDeactiveZip(){
    this.setState({ zip:false})
  }
  onActiveTxd(){
    this.setState({ txd:true, countrie:false, states:false})
  }
  onDeactiveTxd(){
    this.setState({ txd:false})
  }

    render(){
  
        return(
         
          
          <Content>
            <Container style={{marginTop:Metrics.navBarHeight,marginRight:10, marginBottom:Metrics.screenHeight/4}}>
       
                <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10}}>Personel Information</Text>
              <Form style={{ marginBottom:20}}>
              <Label style={{fontSize:10,marginLeft:Metrics.screenWidth/8.5,marginTop:Metrics.screenHeight/45,marginBottom:-10}}>Name</Label>
              
                <Item style={{ borderColor: this.state.name === false ? '#A3A3A3' : '#8CB102', borderBottomWidth:2}}>
                  <Icon name="ios-person" style={{ color: '#8CB102',marginBottom:-9 }} />

                  <Input type="text" autoCapitalize="none" autoCorrect={false}
                   style={{marginBottom:-9, }} onBlur={()=>this.onDeactiveName()} onTouchStart={()=>this.onActiveName()}/>
                </Item>
                <Label
                 style={{fontSize:10,
                         marginLeft:Metrics.screenWidth/8.5,
                         marginTop:Metrics.screenHeight/45,
                         marginBottom:-10}}
                         >Password</Label>
                              <Item style={{ borderColor: this.state.Password === false ? '#A3A3A3' : '#8CB102',borderBottomWidth:2}}>

                  <Icon name="ios-mail" style={{ color: '#8CB102',marginBottom:-9 }} />
                  <Input type="text" style={{marginBottom:-9,}} secureTextEntry={true} 
                   onBlur={()=>this.onDeactivePassword()} onTouchStart={()=>this.onActivePassword()}/>
                </Item>
                
                <Label
                style={{fontSize:10,
                        marginLeft:Metrics.screenWidth/8.5,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >Phone Number</Label>
            <Item style={{ borderColor: this.state.phone === false ? '#A3A3A3' : '#8CB102', borderBottomWidth:2}}>
                 <Icon name="ios-call" style={{ color: '#8CB102',marginBottom:-9 }} />
                 <Input type="text" style={{marginBottom:-9}} keyboardType="numeric"
                       onBlur={()=>this.onDeactivePhone()} onTouchStart={()=>this.onActivePhone()}
                 />
               </Item>

                  <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10,marginRight:10}}>Location</Text>

                  <Label style={{fontSize:10,
                        marginLeft:Metrics.screenWidth/19,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >
                        Street
                  </Label>
                  <Item style={{ borderColor: this.state.street === false ? '#A3A3A3' : '#8CB102', borderBottomWidth:2}}>
                 <Input type="text" style={{marginBottom:-9}} 
                 onBlur={()=>this.onDeactiveStreet()} onTouchStart={()=>this.onActiveStreet()}
                   autoCapitalize="none"
                  autoCorrect={false}
                 
                  />
               </Item>

                  <Label style={{fontSize:10,marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45,}}>Country</Label>
                  <ModalDropdown options={['INDIA', 'PAKISTAN','CANADA']}
                  onSelect={(idx, value)=>this.setState({country:value,countrie:true, states:false})}
                  dropdownStyle={{width:Metrics.screenWidth - 18, height:110,marginLeft:10,marginRight:10}}>
                  <View style={{flex:1,flexDirection:'row',marginTop:3}}>
                    <Row>
                      <Col style={{flex:0.99,marginTop:3}}>
                        <Text style={{color:'black',marginLeft:Metrics.screenWidth/19,}}>{this.state.country}</Text>
                      </Col>
                      <Col style={{flex:0.09}}>
                       
                      </Col>
                    </Row>
                  </View>
                  
                  <View style={{ height:8,
                    backgroundColor: this.state.countrie === false ? '#A3A3A3' : '#8CB102',
                    marginLeft:Metrics.screenWidth/28,
                     marginTop:Metrics.screenHeight/28
                     }}>
                     <Image source={Images.dropdownbar} resizeMethod="contain"/>
        
                     </View>
                </ModalDropdown>

               <Label style={{fontSize:10,
                        marginLeft:Metrics.screenWidth/19,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >
                      City
                  </Label>
                  <Item style={{ borderColor: this.state.city === false ? '#A3A3A3' : '#8CB102', borderBottomWidth:2}}>

                 <Input type="text" style={{marginBottom:-9}}  
                  autoCapitalize="none"
                 autoCorrect={false}
                 onBlur={()=>this.onDeactiveCity()} onTouchStart={()=>this.onActiveCity()}
                 />
               </Item>

               <Label style={{fontSize:10,marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45,}}>
               State
               </Label>
                  <ModalDropdown options={['PUNJAB', 'HARYANA','HIMACHAL PRADESH']}
                  onSelect={(idx, value)=>this.setState({state:value, states:true, countrie:false})}
                  dropdownStyle={{width:Metrics.screenWidth - 10, height:110,marginLeft:10,marginRight:10}}>
                  <View style={{flex:1,flexDirection:'row',marginTop:3}}>
                    <Row>
                      <Col style={{flex:0.99,marginTop:3}}>
                        <Text style={{color:'black',marginLeft:Metrics.screenWidth/19,}}>{this.state.state}</Text>
                      </Col>
                      <Col style={{flex:0.09}}>
                        <Image source={Images.dropdown} style={{marginTop:10,marginLeft:5}} />
                      </Col>
                    </Row>
                  </View>
                  <View style={{
                    height:2,
                    backgroundColor: this.state.states === false ? '#A3A3A3' : '#8CB102',
                     marginLeft:Metrics.screenWidth/28,
                     marginTop:Metrics.screenHeight/20}}></View>
                  </ModalDropdown>

      <Label style={{fontSize:10,
                        marginLeft:Metrics.screenWidth/19,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >
                      Zip
                  </Label>
                  <Item style={{ borderColor: this.state.zip === false ? '#A3A3A3' : '#8CB102', borderBottomWidth:2}}>
                  <Input type="text" style={{marginBottom:-9}}  
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={()=>this.onDeactiveZip()} onTouchStart={()=>this.onActiveZip()}
                  />
               </Item>

               <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10,marginRight:10}}>Texas Drivers Licence</Text>

                  <Label style={{fontSize:10,
                        marginLeft:Metrics.screenWidth/19,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >
                        TXTDL
                  </Label>
                  <Item style={{ borderColor: this.state.name === false ? '#A3A3A3' : '#8CB102', borderBottomWidth:2}}>
                  <Input type="text" style={{marginBottom:-9}} 
                   autoCapitalize="none"
                   autoCorrect={false}
                   onBlur={()=>this.onDeactiveTxd()} onTouchStart={()=>this.onActiveTxd()}
                   />
               </Item>
             
               <View style={{flex:0.3, justifyContent:"center", alignItems:"center",marginTop:Metrics.screenHeight/10,marginBottom:30}}>
                   <TouchableOpacity 
                   style={{borderRadius:20,width:Metrics.screenWidth/1.3,height:40,justifyContent:"center",alignItems:"center",
                   backgroundColor:'#8CB102',}}>
                   <Text style={{color:"white", fontSize:16}}>SAVE CHANGES</Text>
                    
                   </TouchableOpacity>
                       </View>
              </Form>

          </Container>

          </Content>
  

        ) 
    }
}