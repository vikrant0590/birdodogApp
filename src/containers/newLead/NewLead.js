import React, { Component} from 'react';
import { Text, View , Image, TouchableOpacity, Button,  TouchableHighlight} from 'react-native';
import { Container, Content,  Form, Item, Input, Label , Row,Col} from 'native-base';
 import {Metrics, Images,} from '../../theme';
 import { ImagePicker } from 'expo';
 import ModalDropdown from 'react-native-modal-dropdown';
 import {NewProperty, OwnerProperty} from '../../components';
 import { deleteImage , submitLead} from '../../redux/modules/auth';
 import Spinner from 'react-native-loading-spinner-overlay';
 import PropTypes, {any} from 'prop-types';
 import { connect } from 'react-redux';

 import config from '../../config/app';
 import api from '../../helpers/ApiClient';
import { toast } from '../../helpers/ToastMessage';


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
            
            


 // newProperty state

            state:"--CHOOSE--",
            city:false,
            State:false,
            zip:false,
            country:false,
            cityy:undefined,
            statee:undefined,
            zipp:undefined,
            Country:undefined,
            address:false,
            Address:undefined,
            Street:undefined,

//owner state
            
            Oname:false,
            Ophone:false,
            Oemail:false,
            Ostreet:false,
            Ocity:false,
            Ostate:false,
            Ozip:false,
            Onamee:undefined,
            Ophonee:undefined,
            Oemaill:undefined,
            Ocityy:undefined,
            Ostatee:undefined,
            Ozipp:undefined,
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
      this.setState({ image: result.uri });
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
      this.setState({ imageSecond: result.uri });
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
      this.setState({ imageThird: result.uri });
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
      this.setState({ imageFourth: result.uri });
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
        imageSecond:null
    
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
        imageThird:null
    
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
        imageFourth:null
    
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
  this.state.isVisible = true;
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


    const data = {
      property_type : this.state.property_type,
      address : this.state.Address,
      city : this.state.cityy,
      state : this.state.statee,
      street:this.state.Street,
      zip_code : this.state.zipp,
      country : this.state.Country,
      details:finalDetail,
      notes:this.state.notes,
      lead_images : finalArray,
    }

    const {store: {dispatch}} = this.context;

    dispatch(submitLead(data,this.state.UserToken))
   .then((res) => {
    
      if(res.status === 200){
        toast("Successfully submitted.");
        
        this.setState({isVisible:false})
      }else {
        this.setState({isVisible:false})
      }
     
        
     
    
    }).catch(() => {
      this.setState({isVisible: false});
       
    });
    
  }


  //New Property Function
  onActiveStreet(){
    this.setState({ street:true,city:false,State:false,zip:false,country:false })
  }
  onDeactiveStreet(){
    this.setState({ street:false})
  }
  onActiveCity(){
    this.setState({ street:false,city:true,State:false,zip:false,country:false })
  }
  onDeactiveCity(){
    this.setState({ city:false})
  }
  onActiveState(){
    this.setState({ street:false,city:false,State:true,zip:false,country:false })
  }
  onDeactiveState(){
    this.setState({ State:false})
  }
  onActiveCountry(){
    this.setState({ street:false,city:false,State:false,zip:false,country:true })
  }
  onDeactiveCountry (){
    this.setState({ country:false})
  }
  onActiveZip(){
    this.setState({ street:false,city:false,State:false,zip:true ,country:false})
  }
  onDeactiveZip(){
    this.setState({ zip:false})
  }

  onActiveAddress(){
    this.setState({ street:false,city:false,State:false,zip:false,country:false, address:true })
  }
  onDeactiveAddress(){
      this.setState({ address:false})
  }

  //owner property functions
  onActiveStreett(){
    this.setState({ Ostreet:true,Ocity:false,Ostate:false,Ozip:false,Oname:false ,Ophone:false,Oemail:false})
  }
  onDeactiveStreett(){
    this.setState({ Ostreet:false})
  }
  onActiveCityy(){
    this.setState({ Ostreet:false,Ocity:true,Ostate:false,Ozip:false,Oname:false ,Ophone:false,Oemail:false})
}
  onDeactiveCityy(){
    this.setState({ Ocity:false})
  }
  onActiveStatee(){
    this.setState({ Ostreet:false,Ocity:false,Ostate:true,Ozip:false,Oname:false,Ophone:false,Oemail:false })
}
  onDeactiveStatee(){
    this.setState({ Ostate:false})
  }
  onActiveZipp(){
    this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:true,Oname:false,Ophone:false,Oemail:false })
}
  onDeactiveZipp(){
    this.setState({ Ozip:false})
  }

  onActiveNamee(){
    this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:false,Oname:true,Ophone:false,Oemail:false })
}
  onDeactiveNamee(){
    this.setState({ Oname:false})
  }
  onActivePhonee(){
    this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:false,Oname:false,Ophone:true,Oemail:false })
}
  onDeactivePhonee(){
    this.setState({ Ophone:false})
  }
  onActiveEmaill(){
    this.setState({ Ostreet:false,Ocity:false,Ostate:false,Ozip:false,Oname:false,Ophone:false,Oemail:true })
}
  onDeactiveEmaill(){
    this.setState({ Oemail:false})
  }

  newOwnerOnPress = ()=> {
    if(this.state.newProperty ===true){
    this.setState({
      ownerProperty:true,
      newProperty:false,
      property_type:'owner',
      cityy:undefined,
      zipp:undefined,
      Country:undefined,
      statee:undefined,
      state:undefined,
      Onamee:undefined,
      Ophonee:undefined,
      Ostatee:undefined,
      Ozipp:undefined,
      Oemaill:undefined,
      Ocityy:undefined,
      image:null,
      imageSecond:null,
      imageThird:null,
      imageFourth:null,
      notes:undefined,
      Address:undefined,
      Street:undefined,
     })
  }
}
newPropertyOnPress = () => {
  if(this.state.ownerProperty === true){
    this.setState({
      newProperty:true,
      ownerProperty:false,
      property_type:'self',
      cityy:undefined,
      zipp:undefined,
      state:undefined,
      Onamee:undefined,
      Country:undefined,
      Ophonee:undefined,
      Ostatee:undefined,
      Ozipp:undefined,
      Oemaill:undefined,
      Ocityy:undefined,
      image:null,
      imageSecond:null,
      imageThird:null,
      imageFourth:null,
      notes:undefined,
      Address:undefined,
      Street:undefined,
      
     })
  }
}

checkBoxDetail (id){

  
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



                     <View style={{marginTop:Metrics.screenHeight/30,marginBottom:Metrics.screenHeight/30}}>
                         <Text style={{fontSize:12, color:'#333333'}}>Uplaod Image</Text>
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
                     <View style={{flex:1}}>
                       { imageSecond &&
                     
                     <View style={{alignItems:'flex-end',marginTop:-Metrics.screenHeight/30,}}>
                     <TouchableOpacity onPress={()=>this.deleteSecond()}>
                      <Image source={Images.delimagesmall} ></Image>
                      </TouchableOpacity>
                      </View>
                    
                     }
                     </View>
                     <View style={{flex:1}}>
                       { imageThird &&
                     
                     <View style={{alignItems:'flex-end',marginTop:-Metrics.screenHeight/30,}}>
                     <TouchableOpacity onPress={()=>this.deleteThird()}>
                      <Image source={Images.delimagesmall} ></Image>
                      </TouchableOpacity>
                      </View>
                    
                     }
                     </View>
                     <View style={{flex:1}}>
                       { imageFourth &&
                     
                     <View style={{alignItems:'flex-end',marginTop:-Metrics.screenHeight/30,}}>
                     <TouchableOpacity onPress={()=>this.deleteFourth()}>
                      <Image source={Images.delimagesmall} ></Image>
                      </TouchableOpacity>
                      </View>
                    
                     }
                     </View>
                     </View>
                     
              
                       {this.state.newProperty ?
      // New Property Form here    *****************************************

           <View>
           <View style={{ marginTop:Metrics.screenHeight/20}}>
           <Text style={{ fontSize:12,color:'#333333'}}>Property Detail</Text> 
        </View>
      <View style={{marginTop:Metrics.screenHeight/40}}>
          <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
             <Label style={{fontSize:11,color:'#A3A3A3'}}>City *</Label>
             <Input 
             style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/40}}
             autoCapitalize="none" 
             autoCorrect={false}
             returnKeyType="next"
             autoFocus ={false}
             value={this.state.cityy}
              onBlur={()=>this.onDeactiveCity()}
               onTouchStart={()=>this.onActiveCity()}
               onChangeText={(city)=> this.setState({cityy:city})}
               
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
        <Label style={{fontSize:11,}}>Street *</Label>
        <Input style={{borderBottomWidth: 0}} 
         onBlur={()=>this.onDeactiveStreet()}
         onTouchStart={()=>this.onActiveStreet()}
         onChangeText={(street)=>this.setState({ Street:street})}
         
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
       <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Label style={{fontSize:11,color:'#A3A3A3'}}>State * </Label>
       <Input 
       value={this.state.statee}
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


      {/* <View>
      
        <ModalDropdown options={['PUNJAB', 'HARYANA','HIMACHAL PRADESH']}
            onTouchStart={()=>this.setState({city:false,street:false,zip:false,State:true})}  
 onSelect={(idx, value)=>this.setState({state:value,city:false,street:false,zip:false})}
 dropdownStyle={{width:Metrics.screenWidth-Metrics.screenWidth/15,}}>

    <View  style={{marginTop:10,flexDirection:"column",marginTop:Metrics.screenHeight/20}}>
       <View style={{flexDirection:'row',}}>
        <Text style={{fontSize:11,color:'gray'}}>State * </Text>
       <Text style={{color:'black',marginLeft:Metrics.screenWidth/50}}>{this.state.state}</Text>
       </View>
       { this.state.State === false ?
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
      </View>  */}


    
      <View style={{marginTop:Metrics.screenHeight/40}}>
          <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
             <Label style={{fontSize:11,color:'#A3A3A3'}}>Zip *</Label>
             <Input
             value={this.state.zipp}
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


      <View style={{marginTop:Metrics.screenHeight/40}}>
       <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Label style={{fontSize:11,color:'#A3A3A3'}}>Country * </Label>
       <Input 
       value={this.state.Country}
       onBlur={()=>this.onDeactiveCountry()} 
       onTouchStart={()=>this.onActiveCountry()} 
        style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/20}}
        autoCapitalize="none" 
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        onChangeText={(country=>this.setState({Country:country}))}
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




        <View style={{marginTop:Metrics.screenHeight/40}}>
       <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
       <Label style={{fontSize:11,color:'#A3A3A3'}}>Address * </Label>
       <Input 
       value={this.state.Address}
       onBlur={()=>this.onDeactiveAddress()} 
       onTouchStart={()=>this.onActiveAddress()} 
        style={{borderBottomWidth: 0,marginLeft:-Metrics.screenWidth/20}}
        autoCapitalize="none" 
        autoCorrect={false}
        returnKeyType="next"
        autoFocus ={false}
        onChangeText={(address)=>this.setState({Address:address})}
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

      
       </View>
      
        
    


                         :


             //Owner Property Form starts from Here ****************************************************

                              <View>
            
                   <View style={{ marginTop:Metrics.screenHeight/20}}>
            <Text style={{ fontSize:12,color:'#333333'}}>Owner Contact Info</Text> 
         </View>

     <View style={{marginTop:Metrics.screenHeight/40}}>
        <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
        <Label style={{fontSize:11,color:'#A3A3A3'}}>Owner Name *</Label>
        <Input style={{borderBottomWidth: 0, }} 
        onBlur={()=>this.onDeactiveNamee()}
         onTouchStart={()=>this.onActiveNamee()}
         value={this.state.Onamee}
         onChangeText={(oname)=>this.setState({ Onamee:oname})}
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
           <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Label style={{fontSize:11,color:'#A3A3A3'}}>Phone Number *</Label>
              <Input style={{borderBottomWidth: 0}}
               value={this.state.Ophonee}
               onBlur={()=>this.onDeactivePhonee()}
                onTouchStart={()=>this.onActivePhonee()}
                onChangeText={(ophone)=>this.setState({ Ophonee:ophone})}
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
           <Item inlineLabel style={{backgroundColor:'transparent',borderBottomWidth: 0}}>
              <Label style={{fontSize:11,color:'#A3A3A3'}}>Email Address *</Label>
              <Input style={{borderBottomWidth: 0}}
               value={this.state.Oemaill}
               onBlur={()=>this.onDeactiveEmaill()} 
               onTouchStart={()=>this.onActiveEmaill()}
               onChangeText={(oemail)=>this.setState({ Oemaill:oemail})}
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
              <Label style={{fontSize:11,color:'#A3A3A3'}}>City *</Label>
              <Input style={{borderBottomWidth: 0}}
               onBlur={()=>this.onDeactiveCityy()}
               onTouchStart={()=>this.onActiveCityy()}
               onChangeText={(ocity)=>this.setState({ Ocityy:ocity})}
               />

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
         <Text style={{fontSize:11,color:'#A3A3A3'}}>State * </Text>
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
              <Label style={{fontSize:11,color:'#A3A3A3'}}>Zip *</Label>
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
                       }
                        


                      
                        <View style={{marginTop:Metrics.screenHeight/30}}>
                            <Text style={{color:'#333333', fontSize:12}}>Details</Text>
                         </View> 

      

                      <View>
                        {payments}
                        </View>


                        <View style={{marginTop:Metrics.screenHeight/30,flexDirection:'column'}}>
                          <Text style={{color:'#333333',fontSize:12}}>Notes</Text>
                          <Input style={{borderBottomWidth: 0.7, borderColor:'#A3A3A3'}}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            returnKeyType="next"
                            autoFocus ={false}
                          value={this.state.notes}
                          multiline={true}
                          maxLength={250}
                          //onBlur={()=>this.onDeactiveEmaill()} 
                          //onTouchStart={()=>this.onActiveEmaill()}
                          onChangeText={(notes)=>this.setState({ notes:notes})}/>
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