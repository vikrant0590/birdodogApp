import React, { Component} from 'react';
import { Text, View , Image, TouchableOpacity, Button} from 'react-native';
import { Container, Content,  Form, Item, Input, Label , Row,Col} from 'native-base';
 import {Metrics, Images,} from '../../theme';
 import { ImagePicker } from 'expo';
 import ModalDropdown from 'react-native-modal-dropdown';

export default class NewLead extends Component {
    constructor(){
        super();
        this.state= {
            newProperty: true,
            ownerProperty: false,
            image:null,
            imageSecond:null,
            imageThird:null,
            imageFourth:null,
        }
    }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _pickImageSecond = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ imageSecond: result.uri });
    }
  };

  _pickImageThird = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ imageThird: result.uri });
    }
  };

  _pickImageFourth = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ imageFourth: result.uri });
    }
  };

  deleteFirst =()=>{
      this.setState({
          image:null
      
      })
  }
  deleteSecond =()=>{
    this.setState({
        imageSecond:null
    
    })
}

deleteThird =()=>{
    this.setState({
        imageThird:null
    
    })
}
deleteFourth =()=>{
    this.setState({
        imageFourth:null
    
    })
}

    render(){
        let { image, imageSecond, imageThird, imageFourth } = this.state;
        return(
          <Content>
            <Container style={{marginTop: Metrics.navBarHeight,marginLeft:Metrics.screenWidth/38,marginRight:Metrics.screenHeight/38}}>
   
                   <View style={{flexDirection:"column"}}>

                     <View style={{marginTop:Metrics.screenHeight/40}}>
                         <Text style={{fontSize:11}}>Select Property Type</Text>
                     </View>

                     <View style={{flexDirection:'row',marginTop:Metrics.screenHeight/50}}>
                        <View style={{flexDirection:'row', flex:0.4}}>
                          <View style={{flex:0.2}}>
                            <TouchableOpacity 
                              onPress={()=>this.setState({newProperty:true,ownerProperty:false})}
                             >
                            { this.state.newProperty ?
                      <Image source={Images.activeradio}/>
                            :
                            <Image source={Images.inactiveradio}/>
                            }
                         </TouchableOpacity>
                      </View>


                           <View style={{flex:0.8, alignItems:'flex-start', justifyContent:'center'}}>
                           <TouchableOpacity 
                              onPress={()=>this.setState({newProperty:true, ownerProperty:false})}
                             >
                              <Text style={{fontSize:10}}>New Property</Text>
                              </TouchableOpacity>
                          </View>

                      </View>
                      
                      <View style={{flexDirection:'row', flex:0.4}}>
                         <View style={{flex:0.2}}> 
                            <TouchableOpacity
                         onPress={()=>this.setState({ownerProperty:true,newProperty:false})}
                         style={{flexDirection:'row'}}
                         >
                            { this.state.ownerProperty ?
                      <Image source={Images.activeradio}/>
                            :
                            <Image source={Images.inactiveradio}/>
                            }

                        </TouchableOpacity>
                      </View>

                      <View style={{flex:0.8, alignItems:'flex-start', justifyContent:'center'}}>
                      <TouchableOpacity 
                              onPress={()=>this.setState({ownerProperty:true, newProperty:false})}
                             >
                              <Text style={{fontSize:10}}>Owner Property</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                     </View>



                     <View style={{marginTop:Metrics.screenHeight/30,marginBottom:Metrics.screenHeight/30}}>
                         <Text style={{fontSize:11}}>Uplaod Image</Text>
                     </View>

                   
                
                     {image ?
                     
                           <TouchableOpacity onPress={()=>this._pickImage() } >
                      <View style={{width:Metrics.screenWidth/1.1,}}>
                         
                            
                             
                                 <Image source={{ uri: image }} 
                                 style={{width:Metrics.screenWidth/1.1,height:Metrics.screenHeight/4,
                                 }}>
                          
                                 </Image>
                               
                              
                       </View>
                       </TouchableOpacity>
                     
                       
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
                     
                          <View >
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
                
                     <View style={{flexDirection:'row',width:Metrics.screenWidth/1.1, }}>
                       <View style={{  width:Metrics.screenWidth/3.5, marginRight:Metrics.screenWidth/40, alignItems:'flex-end',}}>
                       {imageSecond && 
                       <TouchableOpacity onPress={()=> this.deleteSecond()}>
                        <Image source={Images.delimagesmall}
                        style={{marginRight:-Metrics.screenWidth/40,marginTop:-Metrics.screenHeight/30}}/>
                        </TouchableOpacity>
                    }

                       </View>   

                       <View style={{  width:Metrics.screenWidth/3.5, marginRight:Metrics.screenWidth/40,alignItems:'flex-end',}}>
                       {imageThird && 
                       <TouchableOpacity onPress={()=> this.deleteThird()}>
                        <Image source={Images.delimagesmall}
                        style={{marginRight:-Metrics.screenWidth/40,marginTop:-Metrics.screenHeight/30}}/>
                        </TouchableOpacity>
                        
                    }

                       </View>   

                       <View style={{  width:Metrics.screenWidth/3.5, alignItems:'flex-end',}}>
                       {imageFourth && 
                       <TouchableOpacity onPress={()=>this.deleteFourth()}>
                        <Image source={Images.delimagesmall}
                         style={{marginRight:-Metrics.screenWidth/40,marginTop:-Metrics.screenHeight/30}}/>
                         </TouchableOpacity>
                    }
                       </View>   
                     </View>  

                  

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
                         <Text style={{fontSize:11,}}>Street * </Text>
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
       
            </Container>
            </Content>
        )
    }
}