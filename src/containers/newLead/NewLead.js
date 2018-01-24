import React, { Component} from 'react';
import { Text, View , Image, TouchableOpacity, Button,  TouchableHighlight} from 'react-native';
import { Container, Content,  Form, Item, Input, Label , Row,Col} from 'native-base';
 import {Metrics, Images,} from '../../theme';
 import { ImagePicker } from 'expo';
 import ModalDropdown from 'react-native-modal-dropdown';
 import {NewProperty, OwnerProperty} from '../../components';
 import { deleteImage , submitLead} from '../../redux/modules/auth';
 import Spinner from 'react-native-loading-spinner-overlay';
 import PropTypes, {any, object} from 'prop-types';
 import { connect } from 'react-redux';

 import config from '../../config/app';
 import api from '../../helpers/ApiClient';
import { toast } from '../../helpers/ToastMessage';
import { Actions } from 'react-native-router-flux';


 const checkboxArray =[];

 class NewLead extends Component {
    constructor(){
        super();
        this.state= {
            newProperty: true,
            ownerProperty: false,
            image:null,
            imageSecond:null,
            imageThird:null,
            imageFourth:null,
            trashCliked:false,
            property_type:'self',
            lead_images:[],
            notes:undefined,
            UserToken:undefined,
            isVisible:false,
            checkboxArray:[],
            detailsArray:[],
           
            error:false,
            emptyCity:false,
            emptyStreet:false,
            emptyState:false,
            emptyZip:false,
            emptyCountry:false,
            emptyAddress:false,
            emptyNotes:false,
            emptyName:false,
            emptyEmail:false,
            emptyPhone:false,

            cityError:false,
            streetError:false,
            stateError:false,
            zipError:false,
            countryError:false,
            nameError:false,
            emailError:false,
            phoneError:false,
            ziplength:false,
            mobileLengthError:false,
       
            checkTicked:0,
            imageSelected:0,
            
            


 // newProperty state

            state:"--CHOOSE--",
            city:false,
            State:false,
            street:false,
            zip:false,
            country:false,
            notes:false,
            cityy:undefined,
            statee:undefined,
            zipp:undefined,
            Country:undefined,
            address:false,
            Address:undefined,
            Street:undefined,
            Notes:undefined,
            
            

//owner state
            
            Oname:false,
            oname:undefined,
            Ophone:false,
            ophone:undefined,
            Oemail:false,
            oemail:undefined,
            DetailData:undefined,
          
        }
    }
    
    static  propTypes = {
      dispatch: PropTypes.func,
      user:PropTypes.object,
      detail:PropTypes.object
    
    };
  
    static contextTypes = {
      store: PropTypes.object,
      deleteImage: PropTypes.object
      
    };
  
    componentWillMount(){
  
   
      this.state.UserToken = this.props.auth.user.data.token;
      console.log("DELETE PERSON TOKEN", this.state.UserToken);

      console.log("DETAIL OF NEW LEAD", this.props.auth.detail.data)
      this.state.DetailData= this.props.auth.detail.data;
      console.log("DEATIL DATAA ***",this.state.DetailData.length);
      for(i=0;i<this.state.DetailData.length;i++){
        this.state.checkboxArray[i]=false;
    }

    }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri, imageSelected: this.state.imageSelected +1 });
      console.log("IMAGE RESEPONSE",result)
      var data = new FormData();
      data.append('file', {uri: this.state.image, name: 'selfie.jpg', type: 'image/jpg'});
      console.log("DATA",data)
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data;',
        },
        body: data,
       }

       fetch("http://s2.staging-host.com/birddog-express/api/lead/lead_image_save", config)
       .then((responseData) => {
      
        
           
           this.state.lead_images.push(JSON.parse(responseData._bodyInit).data.id);
           console.log("LEAD ID",this.state.lead_images)
       })
       .catch(err => {
         console.log(err);
       })
 
    }
   
  };



  _pickImageSecond = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ imageSecond: result.uri ,imageSelected: this.state.imageSelected +1});
      var data = new FormData()
      data.append('file', {uri: this.state.imageSecond, name: 'selfie.jpg', type: 'image/jpg'});
      console.log("DATA",data)
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data;',
        },
        body: data,
       }

       fetch("http://s2.staging-host.com/birddog-express/api/lead/lead_image_save", config)
       .then((responseData) => {
      
        
           
           this.state.lead_images.push(JSON.parse(responseData._bodyInit).data.id);
           console.log("LEAD ID****",this.state.lead_images)
       })
       .catch(err => {
         console.log(err);
       })
 
    }
  };

  _pickImageThird = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ imageThird: result.uri,imageSelected: this.state.imageSelected +1 });
      var data = new FormData();
      data.append('file', {uri: this.state.imageThird, name: 'selfie.jpg', type: 'image/jpg'});
      console.log("DATA",data)
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data;',
        },
        body: data,
       }

       fetch("http://s2.staging-host.com/birddog-express/api/lead/lead_image_save", config)
       .then((responseData) => {
      
        
           
           this.state.lead_images.push(JSON.parse(responseData._bodyInit).data.id);
           console.log("LEAD ID",this.state.lead_images)
       })
       .catch(err => {
         console.log(err);
       })
 
    }
  
  };

  _pickImageFourth = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ imageFourth: result.uri,imageSelected: this.state.imageSelected +1 });
      var data = new FormData();
      data.append('file', {uri: this.state.imageFourth, name: 'selfie.jpg', type: 'image/jpg'});
      console.log("DATA",data)
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data;',
        },
        body: data,
       }

       fetch("http://s2.staging-host.com/birddog-express/api/lead/lead_image_save", config)
       .then((responseData) => {
      
        
           
           this.state.lead_images.push(JSON.parse(responseData._bodyInit).data.id);
           console.log("LEAD ID",this.state.lead_images)
       })
       .catch(err => {
         console.log(err);
       })
 
    }
    
  };


   



  deleteFirst =()=>{
      this.setState({
          image:null,
          imageSelected: this.state.imageSelected -1,
      })
      
      const data={
        fileid:this.state.lead_images[0]
      }

      const {store: {dispatch}} = this.context;
      dispatch(deleteImage(data,this.state.UserToken))
      .then((res) => {
          
         console.log("delete Response", res);
         if(res.status === 200){
          delete this.state.lead_images[0];
           console.log("after Delete",this.state.lead_images);
          
         }
       
       }).catch(() => {
        
        
       });

  }


  deleteSecond =()=>{
    this.setState({
        imageSecond:null,
        imageSelected: this.state.imageSelected -1,
    
    })

    const data={
      fileid:this.state.lead_images[1]
    }

    const {store: {dispatch}} = this.context;
    dispatch(deleteImage(data,this.state.UserToken))
    .then((res) => {
        
       console.log("delete Response", res);
       if(res.status === 200){
        delete this.state.lead_images[1];
         console.log("after Delete",this.state.lead_images);
       }
     
     }).catch(() => {
      
      
     });
}

deleteThird =()=>{
    this.setState({
        imageThird:null,
        imageSelected: this.state.imageSelected -1,
    
    })
    const data={
      fileid:this.state.lead_images[2]
    }

    const { store: {dispatch}} = this.context;
    dispatch(deleteImage(data,this.state.UserToken))
    .then((res) => {
        
       console.log("delete Response", res);
       if(res.status === 200){
        delete this.state.lead_images[2];
         console.log("after Delete",this.state.lead_images);
         console.log("LENGth",this.state.lead_images.length())
       }
     
     }).catch(() => {
      
      
     });
}
deleteFourth =()=>{
    this.setState({
        imageFourth:null,
        imageSelected: this.state.imageSelected -1,
    
    })

    const data={
      fileid:this.state.lead_images[3]
    }

    const {store: {dispatch}} = this.context;
    dispatch(deleteImage(data,this.state.UserToken))
    .then((res) => {
        
       console.log("delete Response", res);
       if(res.status === 200){
        delete this.state.lead_images[3];
         console.log("after Delete",this.state.lead_images);
       }
     
     }).catch(() => {
      
      
     });
}


onPressSubmit = () => {
  var data=any;
  const finalArray = [];
  const finalDetail=[];
    for(var i=0;i< this.state.lead_images.length; i++) {
    if(this.state.lead_images[i]!= undefined){
    finalArray.push(this.state.lead_images[i]);
    }
      
    }
    console.log("FIANL ARRAY",finalArray);

    for(var i=0;i< this.state.detailsArray.length; i++) {
      if(this.state.detailsArray[i]!= undefined){
    finalDetail.push(this.state.detailsArray[i]);
      }
      }
      console.log("FINAL Detail",this.state.detailsArray);
      console.log(" Detail array",finalDetail);

      if(!this.state.error && this.state.checkTicked!==0 && this.state.imageSelected!==0){
       
        this.state.isVisible = true;
        if(this.property_type ==='self'){
     data = {
      property_type : this.state.property_type,
      address : this.state.Address,
      city : this.state.cityy,
      state : this.state.statee,
      street:this.state.Street,
      zip_code : this.state.zipp,
      country : this.state.Country,
      details:finalDetail,
      notes:this.state.Notes,
      lead_images : finalArray,
    }
  }else {
     data = {
      property_type : this.state.property_type,
      address : this.state.Address,
      city : this.state.cityy,
      state : this.state.statee,
      street:this.state.Street,
      zip_code : this.state.zipp,
      country : this.state.Country,
      details:finalDetail,
      notes:this.state.Notes,
      lead_images : finalArray,
      owner_mobile:this.state.ophone,
      owner_name: this.state.oname,
      owner_email: this.state.oemail,
    }
  }

    const {store: {dispatch}} = this.context;

    dispatch(submitLead(data,this.state.UserToken))
   .then((res) => {
    
      if(res.status === 200){
    
        this.setState({lead_images:[]});     // check it if needed..
        toast("Successfully submitted.");
        
        this.setState({isVisible:false});
        Actions.tracklead();
        
      }else {
        this.setState({isVisible:false})
      }
     
        
     
    
    }).catch(() => {
      this.setState({isVisible: false});
       
    });
    
  } else {
    toast('Please Correct your form data.');
  }
}


  //New Property Function
  onActiveStreet(){
    this.setState({ street:true,city:false,State:false,zip:false,country:false,address:false,notes:false,emptyStreet:false,streetError:false })
  }
  onDeactiveStreet(){
    this.setState({ street:false});
    const streetValdiation =/^[0-9a-zA-Z]*$/;
    if(this.state.Street ==='' || this.state.Street=== undefined){
        this.setState({emptyStreet:true, error: true})
    }else{
    if(streetValdiation.test(this.state.Street)){
      this.setState({ streetError:false, error:false})
    }else {
      this.setState({streetError:true, error:true})
    }
  }

  }
  onActiveCity(){
    this.setState({ street:false,city:true,State:false,zip:false,country:false,address:false,notes:false, emptyCity:false,cityError:false })
  }
  onDeactiveCity(){
    this.setState({ city:false});
    const CityValdiation =/^[a-zA-Z .]*$/;
    if(this.state.cityy =='' || this.state.cityy=== undefined){
        this.setState({emptyCity:true, error: true})
    }else{
    if(CityValdiation.test(this.state.cityy)){
      this.setState({ cityError:false, error:false})
    }else {
      this.setState({cityError:true, error:true})
    }
  }
  }
  onActiveState(){
    this.setState({ street:false,city:false,State:true,zip:false,country:false,address:false,notes:false,emptyState:false,stateError:false })
  }
  onDeactiveState(){
    this.setState({ State:false});

    const StateValdiation =/^[a-zA-Z .]*$/;
    if(this.state.statee =='' || this.state.statee=== undefined){
        this.setState({emptyState:true, error: true})
    }else{
    if(StateValdiation.test(this.state.statee)){
      this.setState({ stateError:false, error:false})
    }else {
      this.setState({stateError:true, error:true})
    }
  }
  }

  onActiveCountry(){
    this.setState({ street:false,city:false,State:false,zip:false,country:true,address:false,notes:false,emptyCountry:false, countryError:false })
  }
  onDeactiveCountry (){
    this.setState({ country:false});
    const CountryValdiation =/^[a-zA-Z .]*$/;
    if(this.state.Country =='' || this.state.Country=== undefined){
        this.setState({emptyCountry:true, error: true})
    }else{
    if(CountryValdiation.test(this.state.Country)){
      this.setState({ countryError:false, error:false})
    }else {
      this.setState({countryError:true, error:true})
    }
  }

  }
  onActiveZip(){
    this.setState({ street:false,city:false,State:false,zip:true ,country:false,address:false,notes:false,emptyZip:false,zipError:false,ziplength:false})
  }

  onDeactiveZip(){
    this.setState({ zip:false});
    const ZipValdiation =/^[0-9a-zA-Z]*$/;
    if(this.state.zipp =='' || this.state.zipp=== undefined){
        this.setState({emptyZip:true, error: true})
    }else{
    if(ZipValdiation.test(this.state.zipp)){
      this.setState({ zipError:false, error:false});
      if(this.state.zipp.length < 4){
        this.setState({ziplength:true, error:true})
      }
    }else {
      this.setState({zipError:true, error:true})
    }
  }
  }

  onActiveAddress(){
    this.setState({ street:false,city:false,State:false,zip:false,country:false, address:true ,notes:false, emptyAddress:false,})
  }
  onDeactiveAddress(){
      this.setState({ address:false});

      if(this.state.Address ==='' || this.state.Address=== undefined){
        this.setState({emptyAddress:true, error: true})
    }

  }

  onActiveNotes(){
    this.setState({ street:false,city:false,State:false,zip:false,country:false, address:false, notes:true,emptyNotes:false });
  }
  onDeactiveNotes(){
    this.setState({ notes:false});
    
    if(this.state.Notes ==='' || this.state.Notes=== undefined){
      this.setState({emptyNotes:true, error: true})
  }
  }


  //owner property functions

 

  onActiveNamee(){
    this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:false,Oname:true,Ophone:false,Oemail:false,emptyName:false,nameError:false })
}
  onDeactiveNamee(){
    this.setState({ Oname:false});
    const nameValdiation =/^[a-zA-Z ]+$/;
    if(this.state.oname ==='' || this.state.oname === undefined){
      this.setState({ emptyName: true, error:true})
    }else {
     if(nameValdiation.test(this.state.oname)){
        this.setState({ nameError:false, error:false,emptyName:false})
    }else {
      this.setState({nameError:true, error:true})
    }
  }
  }
  onActivePhonee(){
    this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:false,Oname:false,Ophone:true,Oemail:false,emptyPhone:false })
}
  onDeactivePhonee(){
    this.setState({ Ophone:false});
    if(this.state.ophone === '' || this.state.ophone === undefined){
      this.setState({ emptyPhone:true,error:true});
    }else{
      this.setState({ emptyPhone:false,error:false})
    }


    if(this.state.ophone.length <10){
      this.setState({emptyPhone:false,mobileLengthError:true,error:true})
    }

  }
  onActiveEmaill(){
    this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:false,Oname:false,Ophone:false,Oemail:true,emptyEmail:false,emailError:false })
}
  onDeactiveEmaill(){
    this.setState({ Oemail:false});

    const emailValdiation =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.state.oemail ==='' || this.state.oemail=== undefined){
      this.setState({ emptyEmail: true, error:true})
    }else {
     if(emailValdiation.test(this.state.oemail)){
        this.setState({ emailError:false, error:false,emptyName:false})
    }else {
      this.setState({emailError:true, error:true})
    }
  }
  }

 
  newOwnerOnPress = ()=> {

    if(this.state.newProperty ===true){
      for(var i=0; i<this.state.checkboxArray.length;i++){
        this.state.checkboxArray[i]=false;
      }
    this.setState({
      ownerProperty:true,
      newProperty:false,
      property_type:'owner',
      cityy:undefined,
      zipp:undefined,
      Country:undefined,
      statee:undefined,
      state:undefined,
      oname:undefined,
      ophone:undefined,
      oemail:undefined,
      image:null,
      imageSecond:null,
      imageThird:null,
      imageFourth:null,
      notes:undefined,
      Address:undefined,
      Street:undefined,
      Notes:undefined,

            emptyCity:false,
            emptyStreet:false,
            emptyState:false,
            emptyZip:false,
            emptyCountry:false,
            emptyAddress:false,
            emptyNotes:false,
            emptyName:false,
            emptyEmail:false,
            emptyPhone:false,

            cityError:false,
            streetError:false,
            stateError:false,
            zipError:false,
            countryError:false,
            nameError:false,
            emailError:false,
            phoneError:false,
            
   
      
     })
  }
}
newPropertyOnPress = () => {
  
  if(this.state.ownerProperty === true){
    for(var i=0; i<this.state.checkboxArray.length;i++){
      this.state.checkboxArray[i]=false;
    }
    
    this.setState({
      newProperty:true,
      ownerProperty:false,
      property_type:'self',
      cityy:undefined,
      zipp:undefined,
      state:undefined,
      oname:undefined,
      Country:undefined,
      ophone:undefined,
      oemail:undefined,
      image:null,
      imageSecond:null,
      imageThird:null,
      imageFourth:null,
      notes:undefined,
      Address:undefined,
      Street:undefined,
      Notes:undefined,

            emptyCity:false,
            emptyStreet:false,
            emptyState:false,
            emptyZip:false,
            emptyCountry:false,
            emptyAddress:false,
            emptyNotes:false,
            emptyName:false,
            emptyPhone:false,
            emptyEmail:false,

            cityError:false,
            streetError:false,
            stateError:false,
            zipError:false,
            countryError:false,
            nameError:false,
            emailError:false,
            phoneError:false,
            
   
      
     })
  }
}

checkBoxDetail (id){
 
  this.state.checkTicked = this.state.checkTicked +1;
 
  switch(id) {
    case 1: {
      this.setState({trashCliked:true});
      
     this.state.checkboxArray[id-1]= true;
      
      this.state.detailsArray[0]=id;
      break;
  }
  case 2:{
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1] = true;
   
    this.state.detailsArray[1]=id;
    break;
  }
  case 3:{
     
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1] = true;
  
    this.state.detailsArray[2]=id;
    break;
  }
  case 4:{
     
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1] = true;
   
    this.state.detailsArray[3]=id;
    break;
  }
  case 5:{
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1] = true;
   
    this.state.detailsArray[4]=id;
    break;

  }
  case 6: {
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1] = true;
    
    this.state.detailsArray[5]=id;
    break;
  
  }
  case 7: {
     
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1] = true;
   
    this.state.detailsArray[6]=id;
    break;
  }
  case 8:{
      
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1] = true;
    
    this.state.detailsArray[7]=id;
    break;
  }
  default:

}
}

uncheckBoxDetail(id){
 
  this.state.checkTicked = this.state.checkTicked -1;
  

  this.setState({trashCliked:false});

  switch(id) {
    case 1: 
    this.setState({trashCliked:true});
       this.state.checkboxArray[id-1]=false;
       
       this.state.detailsArray[0]=undefined;
       break;
  
  case 2:{
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1]=false;
   
    this.state.detailsArray[1]=undefined;
    break;
  }
  case 3:{
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1]=false;
 
    this.state.detailsArray[2]=undefined;
    break;
  }
  case 4:{
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1]=false;
   
    this.state.detailsArray[3]=undefined;
    break;
  }
  case 5:{
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1]=false;
  
    this.state.detailsArray[4]=undefined;

    break;
  }
  case 6: {
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1]=false;
   
    this.state.detailsArray[5]=undefined;

    break;
  }
  case 7: {
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1]=false;
  
    this.state.detailsArray[6]=undefined;

    break;
  }
  case 8:{
    this.setState({trashCliked:true});
    this.state.checkboxArray[id-1]=false;
   
    this.state.detailsArray[7]=undefined;

    break;
  }
  default:
 
}
}


    render(){

      var payments = [];
     
      
     

	for(let i = 0; i < this.state.DetailData.length; i=i+2){


		payments.push(
			<View key={i} style={{flexDirection:'row', marginTop:Metrics.screenHeight/50}}>
            <View style={{flexDirection:'row',flex:0.5  }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.checkboxArray[this.state.DetailData[i].id-1] ?
            <TouchableOpacity onPress={()=>this.uncheckBoxDetail(this.state.DetailData[i].id)}>
          
              <Image source={Images.checkbox} resizeMode='contain'/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity  onPress={()=>this.checkBoxDetail(this.state.DetailData[i].id)}>
              <Image source={Images.uncheckbox} resizeMode='contain'/>
              </TouchableOpacity>
     
            }
            </View>

              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center",}}>
              { this.state.checkboxArray[this.state.DetailData[i].id-1] ?
              <TouchableOpacity  onPress={()=>this.uncheckBoxDetail(this.state.DetailData[i].id)}>
                  <Text style={{fontSize:10,color:(this.state.checkboxArray[this.state.DetailData[i].id-1] ? '#333333': '#878787')}}>{this.state.DetailData[i].name}</Text>
                  </TouchableOpacity>
              :
              <TouchableOpacity  onPress={()=>this.checkBoxDetail(this.state.DetailData[i].id)}>
              <Text style={{fontSize:10,color:(this.state.checkboxArray[this.state.DetailData[i].id-1] ? '#333333': '#878787')}}>{this.state.DetailData[i].name}</Text>
              </TouchableOpacity>
              }
              </View>

            </View>
            

            <View style={{flexDirection:'row',flex:0.5, }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.checkboxArray[this.state.DetailData[i+1].id-1] ?
            <TouchableOpacity onPress={()=>this.uncheckBoxDetail(this.state.DetailData[i+1].id)}>
              <Image source={Images.checkbox} resizeMode='contain'/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity onPress={()=>this.checkBoxDetail(this.state.DetailData[i+1].id)}>
              <Image source={Images.uncheckbox} resizeMode='contain'/>
              </TouchableOpacity>
     
            }
            </View>

              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center",}}>
              { this.state.checkboxArray[this.state.DetailData[i+1].id-1] ?
                         <TouchableOpacity onPress={()=>this.uncheckBoxDetail(this.state.DetailData[i+1].id)}>

                  <Text style={{fontSize:10,color:(this.state.checkboxArray[this.state.DetailData[i+1].id-1]  ? '#333333': '#878787')}}>{this.state.DetailData[i+1].name}</Text>
                  </TouchableOpacity>
               :
               <TouchableOpacity onPress={()=>this.checkBoxDetail(this.state.DetailData[i+1].id)}>
                  <Text style={{fontSize:10,color:(this.state.checkboxArray[this.state.DetailData[i+1].id-1]  ? '#333333': '#878787')}}>{this.state.DetailData[i+1].name}</Text>
                  </TouchableOpacity>
              }
              </View>

            </View>
        </View>
		)
  
}
        let { image, imageSecond, imageThird, imageFourth } = this.state;
        return(
          <Container
          style={{flex:1,marginTop: Metrics.navBarHeight }}>
              <Spinner visible={this.state.isVisible} textContent={"Loading..."} textStyle={{color:'white'}} />

          <Content>
                   <View style={{flexDirection:"column",marginBottom: Metrics.screenHeight/8,marginLeft:Metrics.screenWidth/36,marginRight:Metrics.screenHeight/36,}}>

                     <View style={{marginTop:Metrics.screenHeight/40}}>
                         <Text style={{fontSize:11}}>Select Property Type</Text>
                     </View>

                     <View style={{flexDirection:'row',marginTop:Metrics.screenHeight/50}}>
                        <View style={{flexDirection:'row', flex:0.4}}>
                          <View style={{flex:0.2}}>
                           
                           <TouchableOpacity 
                          onPress={()=>this.newPropertyOnPress()} >
                            { this.state.newProperty ?
                      <Image source={Images.activeradio}/>
                            :
                            <Image source={Images.inactiveradio} style={{resizeMode:"contain"}}/>
                            }
                         </TouchableOpacity>
                           
                      </View>


                           <View style={{flex:0.8, alignItems:'flex-start', justifyContent:'center',}}>
                          
                           <TouchableOpacity 
                              onPress={()=>this.newPropertyOnPress()}>
                              <Text style={{fontSize:10}}>New Property</Text>
                              </TouchableOpacity>
                          </View>

                      </View>
                      
                      <View style={{flexDirection:'row', flex:0.4}}>
                         <View style={{flex:0.2}}> 
                            <TouchableOpacity
                         onPress={()=>this.newOwnerOnPress()}
                         style={{flexDirection:'row'}}
                         >
                            { this.state.ownerProperty ?
                      <Image source={Images.activeradio}/>
                            :
                            <Image source={Images.inactiveradio} style={{resizeMode:"contain"}}/>
                            }

                        </TouchableOpacity>
                      </View>

                      <View style={{flex:0.8, alignItems:'flex-start', justifyContent:'center'}}>
                      <TouchableOpacity 
                        onPress={()=>this.newOwnerOnPress()}>
                              <Text style={{fontSize:10}}>Owner Property</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                     </View>



                     <View style={{flexDirection:'row' ,marginTop:Metrics.screenHeight/30,marginBottom:Metrics.screenHeight/30}}>
                        <View style={{flex:0.3}}>
                          <Text style={{fontSize:12, color:'#333333'}}>Uplaod Image</Text>
                         </View>

                         <View style={{flex:0.7,alignItems:'flex-start'}}>
                         {this.state.image === null && this.state.imageSecond === null && this.state.imageThird === null && this.state.imageFourth===null &&
                          <Text style={{fontSize:12, color:'gray'}}>( Atleast one image is required.)</Text>
                         }
                         </View>
                     </View>

                   
                
                     {image ?
                     
                      <View style={{width:Metrics.screenWidth/1.1,}}>
                         
                            
                             
                                 <Image source={{ uri: image }} 
                                 style={{width:Metrics.screenWidth/1.1,height:Metrics.screenHeight/4,
                                 }}>
                          
                                 </Image>
                               
                              
                       </View>
                      
                     
                       
                       :
                       <TouchableOpacity onPress={this._pickImage}>
                         <View style={{
                            
                            borderColor:'#b4b4b4',
                        borderRadius:1,
                        borderWidth:1,
                        borderStyle: 'dashed' ,
                        width:Metrics.screenWidth/1.1,
                        height:Metrics.screenHeight/4,
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor:'#ECECEC'
                        }}>
                        
                               <Image source={Images.addico}/>
                       </View>  
                   </TouchableOpacity>
                     }

                     <View>
                       { image &&
                     
                     <View style={{alignItems:'flex-end',marginTop:-Metrics.screenHeight/3.6,}}>
                     <TouchableOpacity onPress={()=>this.deleteFirst()}>
                      <Image source={Images.delimagelarge} ></Image>
                      </TouchableOpacity>
                      </View>
                    
                     }
                     </View>
                  

                     <View style={{flexDirection:'row',width:Metrics.screenWidth/1.1, }}>

                     { imageSecond ?
                     <View style={{marginTop:Metrics.screenHeight/70,marginRight:Metrics.screenWidth/40,}}>
                     
                          <View>
                             <TouchableOpacity onPress={()=>this._pickImageSecond()}>
                             <Image source={{ uri: imageSecond }}
                             style={{  width:Metrics.screenWidth/3.5,   height:Metrics.screenHeight/10, }}  />
                             </TouchableOpacity>
                           </View>
                 
                   

                   </View>
                   :
                   <TouchableOpacity onPress={()=>this._pickImageSecond()}>
                 <View style={{
                     marginTop:Metrics.screenHeight/70,
                     marginRight:Metrics.screenWidth/40,
                     borderColor:'#b4b4b4',
                    borderRadius:1,
                    borderWidth:0.7,
                    borderStyle: 'dashed' ,
                    width:Metrics.screenWidth/3.5,
                    height:Metrics.screenHeight/10,
                    justifyContent:"center",
                   alignItems:"center",
                    backgroundColor:'#ECECEC',
                    flex:1
                    }}>
                     
                           <Image source={Images.addico}/>   
               </View>  
               </TouchableOpacity>
                    
                     }


                   { imageThird ?
                     <View style={{marginTop:Metrics.screenHeight/70,flexDirection:'row',marginRight:Metrics.screenWidth/40,}}>
                     
                          <View>
                          <TouchableOpacity onPress={()=>this._pickImageThird()}>
                             <Image source={{ uri: imageThird }}
                             style={{  width:Metrics.screenWidth/3.5,
                                height:Metrics.screenHeight/10 }}  />
                             </TouchableOpacity>
                           </View>
                 
                  

                   </View>
                   :
                   <TouchableOpacity onPress={()=>this._pickImageThird()}>
                   <View style={{marginTop:Metrics.screenHeight/70,
                     marginRight:Metrics.screenWidth/40,
                     borderColor:'#b4b4b4',
                    borderRadius:1,
                    borderWidth:0.7,
                    borderStyle: 'dashed' ,
                    width:Metrics.screenWidth/3.5,
                    height:Metrics.screenHeight/10,
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:'#ECECEC'
                    }}>
                     
                           <Image source={Images.addico}/>   
               </View>  
               </TouchableOpacity>
                    
                     }

              { imageFourth ?
                     <View 
                     style={{
                       marginTop:Metrics.screenHeight/70,
                       flexDirection:'row', 
                       marginRight:Metrics.screenWidth/40,}}>
                     
                          <View>
                          <TouchableOpacity onPress={()=>this._pickImageFourth}>
                             <Image source={{ uri: imageFourth }}
                             style={{  width:Metrics.screenWidth/3.5,
                                height:Metrics.screenHeight/10,}}/>
                             </TouchableOpacity>
                           </View>
                 
                 

                   </View>
                   :
                   <TouchableOpacity onPress={()=>this._pickImageFourth()}>
                   <View style={{marginTop:Metrics.screenHeight/70,
                     marginRight:Metrics.screenWidth/40,
                    borderColor:'#b4b4b4',
                    borderRadius:1,
                    borderWidth:0.7,
                    borderStyle: 'dashed' ,
                    width:Metrics.screenWidth/3.5,
                    height:Metrics.screenHeight/10,
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:'#ECECEC'
                    }}>
                     
                           <Image source={Images.addico} style={{}}/>   
               </View>  
               </TouchableOpacity>
                    
                     }

                     </View>   
                    {/* Cut image Here */}
                     <View style={{flexDirection:'row',width:Metrics.screenWidth/1.1, flex:1, }}>
                     <View style={{flex:1,marginLeft:Metrics.screenWidth/90}}>
                       { imageSecond &&
                     
                     <View style={{alignItems:'flex-end',marginTop:-Metrics.screenHeight/30,}}>
                     <TouchableOpacity onPress={()=>this.deleteSecond()}>
                      <Image source={Images.delimagesmall} ></Image>
                      </TouchableOpacity>
                      </View>
                    
                     }
                     </View>
                     <View style={{flex:1,marginLeft:Metrics.screenWidth/42}}>
                       { imageThird &&
                     
                     <View style={{alignItems:'flex-end',marginTop:-Metrics.screenHeight/30,}}>
                     <TouchableOpacity onPress={()=>this.deleteThird()}>
                      <Image source={Images.delimagesmall} ></Image>
                      </TouchableOpacity>
                      </View>
                    
                     }
                     </View>
                     <View style={{flex:1,marginLeft:Metrics.screenWidth/37}}>
                       { imageFourth &&
                     
                     <View style={{alignItems:'flex-end',marginTop:-Metrics.screenHeight/30,}}>
                     <TouchableOpacity onPress={()=>this.deleteFourth()}>
                      <Image source={Images.delimagesmall}></Image>
                      </TouchableOpacity>
                      </View>
                    
                     }
                     </View>
                     </View>
                     
              
                       {this.state.newProperty ?
      // New Property Form here    *****************************************

           <View>
           <View style={{ marginTop:Metrics.screenHeight/20,}}>
               
                     <Text style={{ fontSize:12,color:'#333333'}}>Property Detail</Text> 
               
                
        </View>



        <View style={{marginTop:Metrics.screenHeight/40}}>
      {this.state.emptyStreet &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
       {this.state.streetError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid street</Text>
      }
        <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
        <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/30}}>Street *</Text>
        <Input style={{borderBottomWidth: 0}}
          value={this.state.Street}
          maxLength={20}
          autoCapitalize="none" 
             autoCorrect={false}
             returnKeyType="next"
             autoFocus ={false}
         onBlur={()=>this.onDeactiveStreet()}
         onTouchStart={()=>this.onActiveStreet()}
         onChangeText={(street)=>this.setState({ Street:street,emptyStreet:false,streetError:false})}
         
         />

     </Item>
     { this.state.street === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
           />
                }
 </View>

    
             
           
      <View style={{marginTop:Metrics.screenHeight/40}}>
      {this.state.emptyCity &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
        {this.state.cityError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid city.</Text>
      }
          <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0,}}>
             
                 <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/12}}>City *</Text>
             
             <Input 
             style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/40}}
             maxLength={30}
             autoCapitalize="none" 
             autoCorrect={false}
             returnKeyType="next"
             autoFocus ={false}
             value={this.state.cityy}
              onBlur={()=>this.onDeactiveCity()}
               onTouchStart={()=>this.onActiveCity()}
               onChangeText={(city)=> this.setState({cityy:city,emptyCity:false,cityError:false})}
               
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
      {this.state.emptyState &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
       {this.state.stateError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid state.</Text>
      }
       <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/22}}>State *</Text>
       <Input 
       maxLength={30}
       value={this.state.statee}
       onBlur={()=>this.onDeactiveState()} 
       onTouchStart={()=>this.onActiveState()} 
        style={{borderBottomWidth: 0,}}
        autoCapitalize="none" 
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        onChangeText={(state)=>this.setState({statee:state,emptyState:false, stateError:false})}
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
      {this.state.emptyZip &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
      {this.state.zipError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid Zipcode.</Text>
      }
       {this.state.ziplength &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Min 4 characters required.</Text>
      }
          <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
             <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/10}}>Zip *</Text>
             <Input
             maxLength={10}
             autoCapitalize={'none'}
             autoCorrect={false}
             returnKeyType="next"
             autoFocus ={false}
             value={this.state.zipp}
              onBlur={()=>this.onDeactiveZip()}
               onTouchStart={()=>this.onActiveZip()}
                style={{borderBottomWidth: 0, marginLeft:-Metrics.screenWidth/40}}
                onChangeText={(zip)=>this.setState({zipp:zip,emptyZip:false, zipError:false,ziplength:false})}
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



      <View style={{marginTop:Metrics.screenHeight/40}}>
        {this.state.emptyAddress &&
        <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
        }
       <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/22}}>Address * </Text>
       <Input 
       maxLength={50}
       value={this.state.Address}
       onBlur={()=>this.onDeactiveAddress()} 
       onTouchStart={()=>this.onActiveAddress()} 
        style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/20}}
        autoCapitalize="none" 
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        onChangeText={(address)=>this.setState({Address:address, emptyAddress:false})}
        />

    </Item>
    { this.state.address === false ?
               <Image source={Images.bar} resizeMode="contain" 
          style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
          /> :
          <Image source={Images.bar_green} resizeMode="contain" 
          style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
          />
               }

   
        </View>



      <View style={{marginTop:Metrics.screenHeight/40}}>
      {this.state.emptyCountry &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
        {this.state.countryError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid country.</Text>
      }
       <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/22}}>Country * </Text>
       <Input 
       maxLength={30}
       value={this.state.Country}
       onBlur={()=>this.onDeactiveCountry()} 
       onTouchStart={()=>this.onActiveCountry()} 
        style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/20}}
        autoCapitalize="none" 
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        onChangeText={(country=>this.setState({Country:country,emptyCountry:false, countryError:false}))}
        />

    </Item>
    { this.state.country === false ?
               <Image source={Images.bar} resizeMode="contain" 
          style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
          /> :
          <Image source={Images.bar_green} resizeMode="contain" 
          style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
          />
               }

   
        </View>




      
       </View>
      
        
    


                         :


             //Owner Property Form starts from Here ****************************************************

                              <View>
            
                   <View style={{ marginTop:Metrics.screenHeight/20}}>
            <Text style={{ fontSize:12,color:'#333333'}}>Owner Contact Info</Text> 
         </View>

     <View style={{marginTop:Metrics.screenHeight/40}}>
     {this.state.emptyName &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
        {this.state.nameError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid name.</Text>
      }
        <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
        <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/16}}>Owner Name *</Text>
        <Input style={{borderBottomWidth: 0, }} 
        maxLength={30}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        onBlur={()=>this.onDeactiveNamee()}
         onTouchStart={()=>this.onActiveNamee()}
         value={this.state.oname}
         onChangeText={(oname)=>this.setState({ oname:oname, emptyName:false, nameError:false})}
         />

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
       {this.state.emptyPhone &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
        {this.state.phoneError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid phone number.</Text>
      }

{this.state.mobileLengthError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Min 10 digits required.</Text>
      }
           <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/30}}>Phone Number *</Text>
              <Input style={{borderBottomWidth: 0}}
              maxLength={10}
              autoCapitalize={'none'}
              autoCorrect={false}
              returnKeyType="next"
              autoFocus ={false}
              keyboardType='numeric'
              value={this.state.ophone}
              onBlur={()=>this.onDeactivePhonee()}
              onTouchStart={()=>this.onActivePhonee()}
              onChangeText={(ophone)=>this.setState({ ophone:ophone, emptyPhone:false, phoneError:false, mobileLengthError:false})}
                />

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
       {this.state.emptyEmail &&
           <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
        {this.state.emailError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid Email.</Text>
      }
           <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/20}}>Email Address *</Text>
              <Input style={{borderBottomWidth: 0}}
              autoCapitalize={'none'}
              autoCorrect={false}
              returnKeyType="next"
              autoFocus ={false}
               value={this.state.oemail}
               onBlur={()=>this.onDeactiveEmaill()} 
               onTouchStart={()=>this.onActiveEmaill()}
               onChangeText={(oemail)=>this.setState({ oemail:oemail, emptyEmail:false, emailError:false})}
               />

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
      {this.state.emptyStreet &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
       {this.state.streetError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid street</Text>
      }
        <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
        <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/30}}>Street *</Text>
        <Input style={{borderBottomWidth: 0}}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        maxLength={20}
         onBlur={()=>this.onDeactiveStreet()}
         onTouchStart={()=>this.onActiveStreet()}
         onChangeText={(street)=>this.setState({ Street:street,emptyStreet:false,streetError:false})}
         
         />

     </Item>
     { this.state.street === false ?
                <Image source={Images.bar} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
           /> :
           <Image source={Images.bar_green} resizeMode="contain" 
           style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
           />
                }
 </View>


          
 <View style={{marginTop:Metrics.screenHeight/40}}>
 {this.state.emptyCity &&
 <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
 }
   {this.state.cityError &&
 <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid city.</Text>
 }
     <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0,}}>
        
            <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/12}}>City *</Text>
        
        <Input 
        style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/40}}
        maxLength={30}
        autoCapitalize="none" 
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        value={this.state.cityy}
         onBlur={()=>this.onDeactiveCity()}
          onTouchStart={()=>this.onActiveCity()}
          onChangeText={(city)=> this.setState({cityy:city,emptyCity:false,cityError:false})}
          
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
      {this.state.emptyState &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
       {this.state.stateError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid state.</Text>
      }
       <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/22}}>State *</Text>
       <Input 
       maxLength={30}
       value={this.state.statee}
       onBlur={()=>this.onDeactiveState()} 
       onTouchStart={()=>this.onActiveState()} 
        style={{borderBottomWidth: 0,}}
        autoCapitalize="none" 
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        onChangeText={(state)=>this.setState({statee:state,emptyState:false, stateError:false})}
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
{this.state.emptyZip &&
<Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
}
{this.state.zipError &&
<Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid Zipcode.</Text>
}
 {this.state.ziplength &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Min 4 characters required.</Text>
      }

    <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/10}}>Zip *</Text>
       <Input
       maxLength={10}
       autoCapitalize={'none'}
       autoCorrect={false}
       returnKeyType="next"
       autoFocus ={false}
       value={this.state.zipp}
        onBlur={()=>this.onDeactiveZip()}
         onTouchStart={()=>this.onActiveZip()}
          style={{borderBottomWidth: 0, marginLeft:-Metrics.screenWidth/40}}
          onChangeText={(zip)=>this.setState({zipp:zip,emptyZip:false, zipError:false,ziplength:false})}
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


<View style={{marginTop:Metrics.screenHeight/40}}>
        {this.state.emptyAddress &&
        <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
        }
       <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/20}}>Address * </Text>
       <Input 
       maxLength={50}
       value={this.state.Address}
       onBlur={()=>this.onDeactiveAddress()} 
       onTouchStart={()=>this.onActiveAddress()} 
        style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/20}}
        autoCapitalize="none" 
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        onChangeText={(address)=>this.setState({Address:address, emptyAddress:false})}
        />

    </Item>
    { this.state.address === false ?
               <Image source={Images.bar} resizeMode="contain" 
          style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
          /> :
          <Image source={Images.bar_green} resizeMode="contain" 
          style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
          />
               }

   
        </View>



      <View style={{marginTop:Metrics.screenHeight/40}}>
      {this.state.emptyCountry &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*This field is required.</Text>
      }
        {this.state.countryError &&
      <Text style={{fontSize:11,color:'red', marginBottom:-Metrics.screenHeight/40}}>*Invalid country.</Text>
      }
       <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Text style={{fontSize:11,color:'#A3A3A3',marginRight:Metrics.screenWidth/22}}>Country * </Text>
       <Input 
       maxLength={30}
       value={this.state.Country}
       onBlur={()=>this.onDeactiveCountry()} 
       onTouchStart={()=>this.onActiveCountry()} 
        style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/20}}
        autoCapitalize="none" 
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        onChangeText={(country=>this.setState({Country:country,emptyCountry:false, countryError:false}))}
        />

    </Item>
    { this.state.country === false ?
               <Image source={Images.bar} resizeMode="contain" 
          style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45 }}
          /> :
          <Image source={Images.bar_green} resizeMode="contain" 
          style={{width:Metrics.screenWidth-Metrics.screenWidth/15,marginTop:-Metrics.screenHeight/45, }}
          />
               }

   
        </View>




        </View>
                       }
                        


                      
                        <View style={{marginTop:Metrics.screenHeight/30, flexDirection:'row'}}>
                           <View style={{flex:0.3}}>
                              <Text style={{color:'#333333', fontSize:12}}>Details</Text>
                            </View>
                            <View style={{flex:0.7, alignItems:'flex-start'}}>
                            { this.state.checkTicked === 0 &&
                               <Text style={{ fontSize:12,color:'gray'}}>(Atleast one detail is required.)</Text> 
                            }
                            </View>
                         </View> 

      

                      <View>
                        {payments}
                        </View>


                        <View style={{marginTop:Metrics.screenHeight/30,flexDirection:'column'}}>
                        <View>
                        {this.state.emptyNotes &&
                         <Text style={{fontSize:12,color:'red'}}>*This field is required.</Text>
                         }
                          </View>
                        
                                   <Text style={{color:'#333333',fontSize:12}}>Notes</Text>
                           
                              
                            </View>

                            <View>

                          <Input style={{borderBottomWidth: 0.7, borderColor:'#A3A3A3'}}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            returnKeyType="next"
                            autoFocus ={false}
                           value={this.state.Notes}
                          multiline={true}
                          maxLength={250}
                        onBlur={()=>this.onDeactiveNotes()} 
                        onTouchStart={()=>this.onActiveNotes()}
                          onChangeText={(notes)=>this.setState({ Notes:notes, emptyNotes:false})}/>
                        </View>  

                 <View>
                        <TouchableOpacity  
                        onPress={()=> this.onPressSubmit()}
                   style={{
                     borderRadius:20,
                    width:Metrics.screenWidth/1.07,
                    height:35,
                    justifyContent:"center",alignItems:"center",
                   backgroundColor:'#8db103',
                   marginTop:Metrics.screenHeight/15,
                 
                   }}>
                   <Text style={{color:"white", fontSize:14}}>SUBMIT LEAD</Text>
                    
                   </TouchableOpacity>

               </View>
                   </View>  
       
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

export default  connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(NewLead)