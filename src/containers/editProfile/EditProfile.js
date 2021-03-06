import React,{ Component } from 'react';
import {View, Text, TouchableOpacity, Image, NetInfo,Platform} from 'react-native';
import {Content, Form, Item, Label, Input, Icon, Container, StyleProvider, Row, Col} from 'native-base';
import {  Colors , Images, Metrics} from '../../theme';
import ModalDropdown from 'react-native-modal-dropdown';
import { toast } from '../../helpers/ToastMessage';
import { userupdate, getProfile } from '../../redux/modules/auth';
import PropTypes, { any } from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import {Font} from 'expo';


import {Actions} from 'react-native-router-flux';


 class EditProfile extends Component {
  
  constructor(props){
    super(props);
    this.state ={
     data:[],
     loading:false,
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
     

      name1:undefined,
      mobile1:undefined,
      city1:undefined,
      state1:undefined,
      address1:undefined,
      email1:undefined,
      zip1:undefined,
      txdl1:undefined,

      errorName:false,
      errorMobile:false,
      errorAddress:false,
      errorCity:false,
      errorState:false,
      errorZip:false,
      errorTxdl:false,

      nameError:false,
      mobileError:false,
      cityError:false,
      stateError:false,
      addressError:false,
      zipError:false,
      txdlError:false,
      zipLength:false,
      emptyName:false,
      emptyMobile:false,
      emptyTxdl:false,
      emptyCity:false,
      emptyState:false,
      emptyZip:false,
      emptyAddress:false,
      mobileSyntaxError:false
      
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


  // internet connection

  async componentDidMount() {
    await Font.loadAsync({
      bold: require('../../fonts/OpenSans-Bold.ttf'),
    boldItalic: require('../../fonts/OpenSans-BoldItalic.ttf'),
    extraBold: require('../../fonts/OpenSans-ExtraBold.ttf'),
    extraBoldItalic:require('../../fonts/OpenSans-ExtraBoldItalic.ttf'),
    italic: require('../../fonts/OpenSans-Italic.ttf'),
    light: require('../../fonts/OpenSans-Light.ttf'),
    lightItalic: require('../../fonts/OpenSans-LightItalic.ttf'),
    regular: require('../../fonts/OpenSans-Regular.ttf'),
    semiBoldItalic: require('../../fonts/OpenSans-SemiboldItalic.ttf'),
    semiBold: require('../../fonts/OpenSans-Semibold.ttf'),
    robotoRegular: require('../../fonts/Roboto-Regular.ttf'),
    robotoMedium:require('../../fonts/Roboto-Medium.ttf'),
    });
    this.setState({isload:true});
    NetInfo.isConnected.addEventListener(
      'change',
      this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({isConnected}); }
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'change',
      this._handleConnectivityChange
    );
  }

  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
    console.log('connectionInfo', isConnected);
    if(!this.state.isConnected){
      toast('Looks like you lost your internet connection. Please try again after your link is active')
    
    }
  };
  
  componentWillMount(){
    this.state.UserToken = this.props.auth.user.data.token;
    console.log("************",this.state.data)
    this.fetchData();
    

     
    }
     

    fetchData= async() => {
      this.setState({loading:true})
    const data = {
        method: 'GET',
        headers: {
        'Usertoken': this.state.UserToken
        },
       
        }
      const response =await fetch( `http://s2.staging-host.com/birddog-express/api/user/profile`,data);
        const json = await response.json();
        console.log("JSON",json)
        this.setState({
          data:json.data,
           loading:false,
           name1:json.data.name,
           mobile1:json.data.mobile,
           city1:json.data.city,
           state1:json.data.state,
           txdl1:json.data.txdl,
           zip1:json.data.zipcode,
           address1:json.data.address,
           email1:json.data.email,
           txdl1:json.data.txdl,
           });

           if(this.state.name1 ==='' || this.state.name1 === null){
            this.setState({ errorName:true})
          }
          if(this.state.mobile1 === '' || this.state.mobile1 === null){
            this.setState({ errorMobile:true})
          }
          if(this.state.city1 === '' || this.state.city1 === null){
            this.setState({ errorCity:true})
          }
          if(this.state.state1 === '' || this.state.state1 === null){
            this.setState({ errorState:true})
          }
          if(this.state.zip1 === '' || this.state.zip1 === null){
            this.setState({ errorZip:true})
          }

          if(this.state.address1 === '' || this.state.address1 === null){
            this.setState({ errorAddress:true})
          }
          if(this.state.txdl1 === '' || this.state.txdl1 === null){
            this.setState({ errorTxdl:true})
          }
  }

  
  


  onActiveName(){
    this.setState({ name:true,countrie:false,states:false,email:false,mobile:false,address:false,city:false,zip:false,txd:false })
  }
  onDeactiveName(){
    this.setState({ name:false})
    const nameValdiation =/^[a-zA-Z ]+$/;
    if(this.state.name1 === '' || this.state.name1 === null){
      this.setState({ emptyName: true, errorName:true})
    }else {
    
     if(nameValdiation.test(this.state.name1)){
     
        this.setState({ nameError:false,emptyName:false,errorName:false})
    }else {
     
      this.setState({nameError:true, errorName:true})
    }
  }

}
  onActiveEmail(){
    this.setState({ name:false,countrie:false,states:false,email:true,mobile:false,address:false,city:false,zip:false,txd:false })
  }
  onDeactiveEmail(){
    this.setState({ email:false});
    
  }


  onActivePhone(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:true,address:false,city:false,zip:false,txd:false })
  }
  onDeactivePhone(){
    this.setState({ mobile:false})
    const phoneValidation =/^\d+$/;
    if(this.state.mobile1 ==='' || this.state.mobile1 === null){
      this.setState({ emptyMobile:true, errorMobile:true})
    }else if(phoneValidation.test(this.state.mobile1)){
      if( this.state.mobile1.length < 10){
      this.setState({emptyMobile:false,mobileError:true,errorMobile:true})
    }else{
      this.setState({emptyMobile:false,mobileError:false,emptyMobile:false})
    }
  }
    else{
      this.setState({ mobileSyntaxError:true, errorMobile:true})
    } 

    
  }


  onActiveAddress(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:false,address:true,city:false,zip:false,txd:false })
  }
  onDeactiveAddress(){
    this.setState({ address:false})
    if(this.state.address1 === '' || this.state.address1 == null){
      this.setState({
        emptyAddress:true,
        errorAddress:true
      })
    }else{
      this.setState({errorAddress:false,emptyAddress:false})
    }
  }


  onActiveCity(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:false,address:false,city:true,zip:false,txd:false })
  }
  onDeactiveCity(){
    this.setState({ city:false});
    const CityValdiation =/^[a-zA-Z .]*$/;
    if(this.state.city1 ==='' || this.state.city1 === null){
        this.setState({emptyCity:true, errorCity: true})
    }else{
    if(CityValdiation.test(this.state.city1)){
      this.setState({ cityError:false, errorCity:false,emptyCity:false})
    }else {
      this.setState({cityError:true, errorCity:true})
    }
  }
}

    onActiveState(){
      this.setState({ name:false,countrie:false,states:true,email:false,mobile:false,address:false,city:false,zip:false,txd:false, })
    }
    onDeactiveState(){
      this.setState({states:false})
      const StateValdiation =/^[a-zA-Z .]*$/;
      if(this.state.state1 ==='' || this.state.state1=== null){
        this.setState({emptyState: true, errorState:true})
      }else {
      if(StateValdiation.test(this.state.state1)){
        this.setState({ stateError:false, errorState:false,emptyState:false})
      }else {
        this.setState({stateError:true, errorState:true})
      }
    }
  }



  
  onActiveZip(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:false,address:false,city:false,zip:true,txd:false })
  }
  onDeactiveZip(){
    this.setState({ zip:false})
    const zipValdiation =/^[0-9a-zA-Z]*$/; 
    if(this.state.zip1 ==='' || this.state.zip1 === null){
      this.setState({ emptyZip: true, errorZip: true})
    }else {
    if(zipValdiation.test(this.state.zip1)){
      this.setState({ zipError:false, errorZip:false})
      if(this.state.zip1.length < 4 ){
          this.setState({errorZip:true,zipLength:true})
      }
    }else {
      this.setState({zipError:true, errorZip:true})
    }
  }
}

  onActiveTxd(){
    this.setState({ name:false,countrie:false,states:false,email:false,mobile:false,address:false,city:false,zip:false,txd:true })
  }
  onDeactiveTxd(){
    const txdlValdiation =/^[0-9a-zA-Z]*$/; 
    this.setState({ txd:false})
  if(this.state.txdl1 === '' || this.state.txdl1 === null){
       this.setState({ emptyTxdl: true, errorTxdl: true })
  }else {
    if(txdlValdiation.test(this.state.txdl1)){
      this.setState({txdlError:false,errorTxdl:false})
      
    } else{
    this.setState({txdlError:true,errorTxdl:true})
  }

  }
}

  checkError = ()=>{
    if(this.state.name1 ==='' || this.state.name1 === null){
      this.setState({ emptyName:true})
    }
    if(this.state.mobile1 === '' || this.state.mobile1 === null){
      this.setState({ emptyMobile:true})
    }
    if(this.state.city1 === '' || this.state.city1 === null){
      this.setState({ emptyCity:true})
    }
    if(this.state.state1 === '' || this.state.state1 === null){
      this.setState({ emptyState:true})
    }
    if(this.state.zip1 === '' || this.state.zip1 === null){
      this.setState({ emptyZip:true})
    }

    if(this.state.address1 === '' || this.state.address1 === null){
      this.setState({ emptyAddress:true})
    }
    if(this.state.txdl1 === '' || this.state.txdl1 === null){
      this.setState({ emptyTxdl:true})
    }

    if(this.state.errorName || this.state.errorCity || this.state.errorZip || this.state.errorTxdl || this.state.errorMobile  || this.state.errorState || this.state.errorAddress){

      toast("Please fill the required fields. ");
    }else {
      this.saveProfile();
    }
  }

  saveProfile =()=>{
    this.UserToken = this.props.auth.user.data.token;
   this.setState({isVisible:true});
    const {name1, mobile1, city1,address1, state1,txdl1,zip1} = this.state;

    
      
        const {store: {dispatch}} = this.context;
        let data = {
          name:name1,
          mobile:mobile1,  
          city:city1,
          address:address1,
          state:state1,
          txdl:txdl1,
          zipcode:zip1     
        };
        this.setState({isVisible: true});
        dispatch(userupdate(data,this.state.UserToken ))
          .then((res) => {
            this.setState({ isVisible:false})
            if(res.status === 200){
               dispatch(getProfile(this.state.UserToken));
            this.setState({isVisible: false});
           
            toast('Successfully Updated!');
           Actions.pop();
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
          
          <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color:'white'}} />
         <View style={{flex:1,marginTop:Metrics.navBarHeight, }}>
         {this.state.isload && 
             <Content >
       
                <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10, fontFamily:'robotoRegular'}}>Personel Information</Text>
              <Form style={{ marginBottom:20}}>
              <View style={{flex:1,flexDirection:'row',marginLeft:Metrics.screenWidth/8.5,marginTop:Metrics.screenHeight/45,marginBottom:-10,}}>
                   <View style={{flex:0.4}}>
                      <Text style={{fontSize:13,color:'#A3A3A3',fontFamily:'robotoRegular'}}>Name *</Text> 
                 </View>
                 <View style={{flex:0.6, alignItems:'flex-start'}}>
                     { this.state.nameError &&
                   <Text style={{fontSize:12, color:'red',fontFamily:'robotoRegular'}}>Only Characters allowed.</Text> 
                    }
                        { this.state.emptyName &&
                   <Text style={{fontSize:12, color:'red',fontFamily:'robotoRegular'}}>This field is required.</Text> 
                    }
                  </View> 
              </View>
             
              
              <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Image source={Images.profilee} resizeMode="contain"  style={{ marginBottom:-9 }} />
                  <Input type="text"
                  value={this.state.name1}
                 
                   autoCapitalize="words" 
                   autoCorrect={false}
                   returnKeyType="next"
                   autoFocus ={false}
                   maxLength={30}
                   style={{marginBottom:-9,borderBottomWidth:0 , fontSize:13,marginLeft:Metrics.screenWidth/50}} 
                   onBlur={()=>this.onDeactiveName()}
                    onTouchStart={()=>this.onActiveName()}
                    onChangeText={(name) => {
                      this.setState({name1:name,nameError:false,emptyName:false,errorName:false});
                   
                    
                      }}
                      onSubmitEditing={ (event) => { this.refs.phone._root.focus() }} 
                
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
                 style={{fontSize:13,color:'#A3A3A3',
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
                  style={{marginBottom:-9,borderBottomWidth:0 , fontSize:13,marginLeft:Metrics.screenWidth/50}} 
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


       <View style={{flex:1,flexDirection:'row',marginLeft:Metrics.screenWidth/8.5,marginTop:Metrics.screenHeight/45,marginBottom:-10,}}> 
              <View style={{flex:0.4}}>  
                <Text style={{fontSize:13,color:'#A3A3A3',fontFamily:'robotoRegular'}} >Phone Number *</Text>
               </View> 
                 <View  style={{flex:0.6,alignItems:'flex-start'}}>
                 { this.state.mobileSyntaxError &&
              <Text style={{fontSize:12, color:'red',fontFamily:'robotoRegular'}}>Phone number is not valid.</Text> 
              }
                { this.state.mobileError &&
              <Text style={{fontSize:12, color:'red',fontFamily:'robotoRegular'}}>Min 10 digits required.</Text> 
              }
                    { this.state.emptyMobile &&
                   <Text style={{fontSize:12, color:'red',fontFamily:'robotoRegular'}}>This field is required.</Text> 
                    }
              </View>

        </View>
              <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Image source={Images.phone} style={{ marginBottom:-9 }} />
                 <Input type="text"
                 ref="phone"
                value={this.state.mobile1}
                  maxLength={10}
                  autoCorrect={false}
                  keyboardType={Platform.OS =='ios' ? "number-pad" :'numeric'}
              
                  returnKeyType='done'
                  autoFocus ={false}
                  
                  style={{marginBottom:-9,borderBottomWidth:0 , fontSize:13,marginLeft:Metrics.screenWidth/50}} 
                  keyboardType="numeric"
                       onBlur={()=>this.onDeactivePhone()}
                        onTouchStart={()=>this.onActivePhone()}
                        onChangeText={(mobile) => {
                          this.setState({mobile1:mobile,emptyMobile:false,error:false,mobileError:false,mobileSyntaxError:false, errorMobile:false});
                        }}
                        onSubmitEditing={ (event) => { this.refs.address._root.focus() }} 
                 />
               </Item>
               { this.state.mobile === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
           />
                }



                  <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10,marginRight:10,fontFamily:'robotoRegular'}}>Location</Text>
                  <View style={{ flex:1,flexDirection:'row', marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45, marginBottom:-10}}>
                  <View style={{flex:0.2}}>
                  <Text style={{fontSize:13,color:'#A3A3A3',fontFamily:'robotoRegular'}}>Address *</Text>
                  </View>
                     <View style={{flex:0.8, alignItems:'flex-start'}}>
                     {this.state.emptyAddress &&
                  <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>This field is required.</Text>
                     }
                  </View>
                 </View>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  <Input
                  ref="address"
                   type="text"
                   value={this.state.address1}
                   autoCapitalize="words" 
                   autoCorrect={false}
                   returnKeyType="next"
                   maxLength={50}
                  style={{marginBottom:-9,borderBottomWidth:0,fontSize:13}} 
                 onBlur={()=>this.onDeactiveAddress()}
                  onTouchStart={()=>this.onActiveAddress()}
                  onChangeText={(address)=> this.setState({address1:address,emptyAddress:false,errorAddress:false})}
                  onSubmitEditing={ (event) => { this.refs.city._root.focus() }} 
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

      
            <View style={{ flex:1,flexDirection:'row', marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45, marginBottom:-10}}>
               <View style={{flex:0.2}}>
               <Text style={{fontSize:13,color:'#A3A3A3',fontFamily:'robotoRegular'}}>City *</Text>
               </View>
                  <View style={{flex:0.8, alignItems:'flex-start'}}>
                  { this.state.cityError &&
               <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>City not valid.</Text>
                  }
                     { this.state.emptyCity &&
               <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>This field is required.</Text>
                  }
               </View>
            </View>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  
                 <Input type="text"
                 ref="city"
                 maxLength={30}
                  value={this.state.city1}
                  returnKeyType="next"
                  style={{marginBottom:-9,borderBottomWidth: 0,fontSize:13}}  
                  autoCapitalize="words" 
                 autoCorrect={false}
                 onBlur={()=>this.onDeactiveCity()}
                  onTouchStart={()=>this.onActiveCity()}
                  onChangeText={(city)=>this.setState({ city1:city,cityError:false,emptyCity:false,errorCity:false})}
                  onSubmitEditing={ (event) => { this.refs.state._root.focus() }} 
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

            <View style={{ flex:1,flexDirection:'row', marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45, marginBottom:-10}}>
               <View style={{flex:0.2}}>
                   <Text style={{fontSize:13,color:'#A3A3A3',fontFamily:'robotoRegular'}}>State *</Text>
               </View>
                  <View style={{flex:0.8, alignItems:'flex-start'}}>
                  {this.state.stateError &&
                      <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>State not valid.</Text>
                  }
                     { this.state.emptyState &&
               <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>This field is required.</Text>
                  }
               </View>
            </View>

            <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  
                  <Input type="text"
                   ref="state"
                   returnKeyType="next"
                   value={this.state.state1}
                   maxLength={30}
                   style={{marginBottom:-9,borderBottomWidth: 0,fontSize:13}}  
                   autoCapitalize="words" 
                  autoCorrect={false}
                  onBlur={()=>this.onDeactiveState()}
                   onTouchStart={()=>this.onActiveState()}
                   onChangeText={(state)=>this.setState({ state1:state, stateError:false, emptyState:false, errorState:false})}
                   onSubmitEditing={ (event) => { this.refs.zip._root.focus() }} 
                  />
                   
                </Item>
                { this.state.states === false ?
                 <Image source={Images.bar} resizeMode="contain" 
            style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
            /> :
            <Image source={Images.bar_green} resizeMode="contain" 
            style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginLeft:Metrics.screenWidth/27, }}
            />
                 }
          

      
         <View style={{ flex:1,flexDirection:'row', marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45, marginBottom:-10}}>
               <View style={{flex:0.2}}>
                   <Text style={{fontSize:13,color:'#A3A3A3',fontFamily:'robotoRegular'}}>Zip *</Text>
               </View>
                  <View style={{flex:0.8, alignItems:'flex-start'}}>
                  { this.state.zipError &&
                     <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>Zipcode not valid.</Text>
                  }
                     { this.state.emptyZip &&
               <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>*This field is required.</Text>
                  }
                       { this.state.zipLength &&
               <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>Min 4 Characters required.</Text>
                  }
               </View>
            </View>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  <Input type="text" 
                  ref="zip"
                  returnKeyType="next"
                  value={this.state.zip1}
                   maxLength={10}
                  style={{marginBottom:-9,borderBottomWidth:0,fontSize:13}}  
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={()=>this.onDeactiveZip()}
                   onTouchStart={()=>this.onActiveZip()}
                   onChangeText={(zip)=>this.setState({ zip1:zip, zipError:false, emptyZip:false,zipLength:false, errorZip:false})}
                   onSubmitEditing={ (event) => { this.refs.txtdl._root.focus() }} 
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



               <Text style={{marginTop:Metrics.screenHeight/35,marginLeft:10,marginRight:10,fontFamily:'robotoRegular'}}>Texas Drivers Licence</Text>

                 
            <View style={{ flex:1,flexDirection:'row', marginLeft:Metrics.screenWidth/19,marginTop:Metrics.screenHeight/45, marginBottom:-10}}>
               <View style={{flex:0.2}}>
               <Text style={{fontSize:13,color:'#A3A3A3',fontFamily:'robotoRegular'}}>TXTDL *</Text>
               </View>
                  <View style={{flex:0.8, alignItems:'flex-start'}}>
                  {this.state.txdlError &&
               <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>txtdl not valid.</Text>
                  }
                     {this.state.emptyTxdl &&
               <Text style={{ color:'red',fontSize:12,fontFamily:'robotoRegular'}}>This field is required.</Text>
                  }
               </View>
            </View>
                  <Item  style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
                  <Input type="text" 
                  ref="txtdl"
                    maxLength={45}
                    value={this.state.txdl1}
                   style={{marginBottom:-9,borderBottomWidth: 0, fontSize:13}} 
                   autoCapitalize="none"
                   autoCorrect={false}
                   onBlur={()=>this.onDeactiveTxd()} 
                   onTouchStart={()=>this.onActiveTxd()}
                   onChangeText={(txd)=>this.setState({txdl1:txd, txdlError:false,emptyTxdl:false,errorTxdl:false})}
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
                   <Text style={{color:"white", fontSize:16,fontFamily:'robotoRegular'}}>SAVE CHANGES</Text>
                    
                   </TouchableOpacity>
                       </View>
              </Form>
          
              </Content>
         }
           </View>
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
