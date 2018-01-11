import React,{ Component } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Content, Form, Item, Label, Input, Icon, Container, StyleProvider, Row, Col} from 'native-base';
import {  Colors , Images, Metrics} from '../../theme';
import ModalDropdown from 'react-native-modal-dropdown';
import { toast } from '../../helpers/ToastMessage';
import { userupdate, getProfile } from '../../redux/modules/auth';
import PropTypes, { any } from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

import {Actions} from 'react-native-router-flux';


 class EditProfile extends Component {
  
  constructor(props){
    super(props);
    this.state ={
    
      country: '--CHOOSE--',
      state:'--CHOOSE--',
      name:false,
      email:false,
      mobile:false,
      address:false,
      countrie:false,
      states:false,
      city:false,
      zip:false,
      txd:false,
      UserToken:undefined,

      name1:this.props.data.data.name,
      mobile1:this.props.data.data.mobile,
      city1:this.props.data.data.city,
      state1:this.props.data.data.state,
      address1:this.props.data.data.address,
      email1:this.props.data.data.email,
      zip1:this.props.data.data.zipcode,
      txdl1:this.props.data.data.txdl,


      error:false
      
    }
  }

  static  propTypes = {
    dispatch: PropTypes.func,
    data:any
  };

  static contextTypes = {
    store: PropTypes.object,
    userupdate: PropTypes.object,
    getProfile: PropTypes.object
  };




  onActiveName(){
    this.setState({ name:true,countrie:false,states:false,email:false,mobile:false,address:false,city:false,zip:false,txd:false })
  }
  onDeactiveName(){
    this.setState({ name:false});
    if(this.state.name1 !== undefined){
    if(this.state.name1.length >30){
      toast('Name can not exceed 30 characters.');
      this.setState({error:true})
    }else{
    this.setState({ error:false})
    }
  }
}
  onActiveEmail(){
    this.setState({ name:false,countrie:false,states:false,email:true,mobile:false,address:false,city:false,zip:false,txd:false })
  }
  onDeactiveEmail(){
    this.setState({ email:false})
  }
  onActivePhone(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:true,address:false,city:false,zip:false,txd:false })
  }
  onDeactivePhone(){
    this.setState({ mobile:false})
  }
  onActiveAddress(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:false,address:true,city:false,zip:false,txd:false })
  }
  onDeactiveAddress(){
    this.setState({ address:false})
  }
  onActiveCity(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:false,address:false,city:true,zip:false,txd:false })
  }
  onDeactiveCity(){
    this.setState({ city:false})
    if(this.state.city1 !== undefined){
      if(this.state.city1.length >30){
        toast('City can not exceed 30 characters.');
        this.setState({error:true})
      }else{
      this.setState({ error:false})
      }
    }


  }
  onActiveZip(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:false,address:false,city:false,zip:true,txd:false })
  }
  onDeactiveZip(){
    this.setState({ zip:false})
  }
  onActiveTxd(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:false,address:false,city:false,zip:false,txd:true })
  }
  onDeactiveTxd(){
    this.setState({ txd:false})
  }
  checkError = ()=>{
    if(this.state.error === false){
      this.saveProfile();
    }else {
      toast("Correct Your Errors");
    }
  }

  saveProfile =()=>{
    this.UserToken = this.props.auth.user.data.token;
   this.setState({isVisible:true});
    const {name1, mobile1, city1} = this.state;

    
      
        const {store: {dispatch}} = this.context;
        let data = {
          name:name1,
          mobile:mobile1,  
          city:city1      
        };
        this.setState({isVisible: true});
        dispatch(userupdate(data,this.UserToken ))
          .then((res) => {
            this.setState({ isVisible:false})
            if(res.status === 200){
              dispatch(getProfile(this.UserToken));
            this.setState({isVisible: false});
            toast('Successfully Updated!');
            }
            
            
            else {
              this.setState({isVisible: false});
              toast('Oops, something went wrong. Please try again later!');
            }
          })
          .catch(ex => {
            this.setState({isVisible: false});
            alert(ex.error.message);
          });
      }

     
    

    render(){
  
      console.log("PARAMS", this.props.data);
        return(
         
          
          <Container>
          
            
             <Content style={{flex:1,marginTop:Metrics.navBarHeight, marginBottom:Metrics.screenHeight/10}}>
                <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10}}>Personel Information</Text>
              <Form style={{ marginBottom:20}}>
              <Label style={{fontSize:12,marginLeft:Metrics.screenWidth/8.5,marginTop:Metrics.screenHeight/45,marginBottom:-10}}>Name</Label>
              
              <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Image source={Images.profilee} resizeMode="contain"  style={{ marginBottom:-9 }} />
                  <Input type="text"
                  value={this.state.name1}
                   autoCapitalize="none" 
                   autoCorrect={false}
                   returnKeyType="next"
                   autoFocus ={false}
                   style={{marginBottom:-9,borderBottomWidth:0 , fontSize:13}} 
                   onBlur={()=>this.onDeactiveName()}
                    onTouchStart={()=>this.onActiveName()}
                    onChangeText={(name) => {
                      this.setState({name1:name});
                    }}
                    />
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
                         >Email</Label>
              <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              
                  <Image source={Images.message} style={{ marginBottom:-9 }} />
                  
                  <Input type="text" 
                 value={this.state.email1}
                 editable={false}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  returnKeyType="next"
                  autoFocus ={false}
                  style={{marginBottom:-9,borderBottomWidth:0,fontSize:13 }}
                   onBlur={()=>this.onDeactiveEmail()}
                    onTouchStart={()=>this.onActiveEmail()}
                   
                    />
                </Item>
                { this.state.email === false ?
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
                 <Input type="text"
                value={this.state.mobile1}

                  autoCorrect={false}
                  returnKeyType="next"
                  autoFocus ={false}
                  
                  style={{marginBottom:-9,borderBottomWidth:0,fontSize:13 }} 
                  keyboardType="numeric"
                       onBlur={()=>this.onDeactivePhone()}
                        onTouchStart={()=>this.onActivePhone()}
                        onChangeText={(mobile) => {
                          this.setState({mobile1:mobile});
                        }}
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
                        Address
                  </Label>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  <Input type="text"
                   value={this.state.address1}
                  style={{marginBottom:-9,borderBottomWidth:0,fontSize:13}} 
                 onBlur={()=>this.onDeactiveAddress()} onTouchStart={()=>this.onActiveAddress()}
                   autoCapitalize="none"
                  autoCorrect={false}
                 
                  />
               </Item>
               { this.state.address === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           />
                }

                  {/* <Label style={{fontSize:12,marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45,}}>Country</Label>
                  <ModalDropdown options={['INDIA', 'PAKISTAN','CANADA']}
                  onTouchStart={()=>this.setState({name:false,countrie:true,states:false,Password:false,mobile:false,street:false,city:false,zip:false,txd:false})}
  onSelect={(idx, value)=>this.setState({country:value,states:false,street:false})}
  dropdownStyle={{width:Metrics.screenWidth - 10,height:110,marginLeft:10,marginRight:10}}>

     <View  style={{flexDirection:"column",marginTop:Metrics.screenHeight/40}}>
        <View style={{flexDirection:'row', marginLeft:Metrics.screenWidth/28}}>
        <Text style={{color:'black',marginLeft:Metrics.screenWidth/60,fontSize:13}}>{this.props.data.data.}</Text>
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
  </ModalDropdown> */}

               <Label style={{fontSize:12,
                        marginLeft:Metrics.screenWidth/19,
                        marginTop:Metrics.screenHeight/45,
                        marginBottom:-10}}
                        >
                      City
                  </Label>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  
                 <Input type="text"
                  value={this.state.city1}

                  style={{marginBottom:-9,borderBottomWidth: 0,fontSize:13}}  
                  autoCapitalize="none"
                 autoCorrect={false}
                 onBlur={()=>this.onDeactiveCity()}
                  onTouchStart={()=>this.onActiveCity()}
                  onChangeText={(city)=>this.setState({ city1:city})}
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
               onTouchStart={()=>this.setState({ name:false,countrie:false,states:true,Password:false,mobile:false,street:false,city:false,zip:false,txd:false})}
  onSelect={(idx, value)=>this.setState({state:value, countrie:false})}
  dropdownStyle={{width:Metrics.screenWidth - 10,height:110,marginLeft:10,marginRight:10}}>

     <View  style={{flexDirection:"column",marginTop:Metrics.screenHeight/40}}>
        <View style={{flexDirection:'row', marginLeft:Metrics.screenWidth/28}}>
        <Text style={{color:'black',marginLeft:Metrics.screenWidth/60,fontSize:13}}>  {this.state.state1}</Text>
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
                  <Input type="text" 
                  value={this.state.zip1}

                  style={{marginBottom:-9,borderBottomWidth:0,fontSize:13}}  
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={()=>this.onDeactiveZip()}
                   onTouchStart={()=>this.onActiveZip()}
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
                  <Input type="text" 
                                       value={this.state.txdl1}
                                     style={{marginBottom:-9,borderBottomWidth: 0, fontSize:13}} 
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
                  onPress={()=> this.checkError()}
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
  
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};
const  mapDispatchToProps = {

};

export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(EditProfile)