import React, { Component} from 'react';
import { Text, View , Image, TouchableOpacity, Button,  TouchableHighlight} from 'react-native';
import { Container, Content,  Form, Item, Input, Label , Row,Col} from 'native-base';
 import {Metrics, Images,} from '../../theme';
 import { ImagePicker } from 'expo';
 import ModalDropdown from 'react-native-modal-dropdown';
 import {NewProperty, OwnerProperty} from '../../components';

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
            <Container
             style={{marginTop: Metrics.navBarHeight,
              marginLeft:Metrics.screenWidth/36,
             marginRight:Metrics.screenHeight/36,
             marginBottom:Metrics.screenHeight
             }}>
   
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
                            <Image source={Images.inactiveradio} style={{resizeMode:"contain"}}/>
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
                            <Image source={Images.inactiveradio} style={{resizeMode:"contain"}}/>
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
                         <Text style={{fontSize:12, color:'#333333'}}>Uplaod Image</Text>
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
                     
                     

                      {/* <View style={{flexDirection:'row',width:Metrics.screenWidth/1.1, flex:1, }}>
                       <View style={{  width:Metrics.screenWidth/3.5, marginRight:Metrics.screenWidth/40, alignItems:'flex-end',backgroundColor:'red'}}>
                       {imageSecond && 
                       
                       <TouchableOpacity onPress={()=> this.deleteSecond()}>
                        <Image source={Images.delimagesmall}
                        style={{marginRight:-Metrics.screenWidth/40,marginTop:-Metrics.screenHeight/30, resizeMode:"contain"}}/>
                        </TouchableOpacity>
                      
                    }

                       </View>   

                       <View style={{  width:Metrics.screenWidth/3.5, marginRight:Metrics.screenWidth/40,alignItems:'flex-end'}}>
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
                     </View>    */}

                  

              
                       {this.state.newProperty ?
        
                         <NewProperty/>
                         :
                         <OwnerProperty/>
                       }
                        
                      
                        <View style={{marginTop:Metrics.screenHeight/30}}>
          <Text style={{color:'#333333', fontSize:12}}>Details</Text>
        </View> 

        <View style={{flexDirection:'row', marginTop:Metrics.screenHeight/50}}>
            <View style={{flexDirection:'row',flex:0.5  }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.trashCliked ?
            <TouchableOpacity onPress={()=>this.setState({trashCliked:false})}>
              <Image source={Images.checkbox}/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity onPress={()=>this.setState({trashCliked:true})}>
              <Image source={Images.uncheckbox}/>
              </TouchableOpacity>
     
            }
            </View>

              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center",}}>
              <TouchableOpacity onPress={()=>this.setState({ trashCliked:!this.state.trashCliked})}>
                  <Text style={{fontSize:10,color:(this.state.trashCliked ? '#333333': '#878787')}}>Trash in Yard</Text>
                  </TouchableOpacity>
              </View>

            </View>
            

            <View style={{flexDirection:'row',flex:0.5, }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.Vacant ?
            <TouchableOpacity onPress={()=>this.setState({Vacant:false})}>
              <Image source={Images.checkbox}/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity onPress={()=>this.setState({Vacant:true})}>
              <Image source={Images.uncheckbox}/>
              </TouchableOpacity>
     
            }
            </View>

              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center",}}>
              <TouchableOpacity onPress={()=>this.setState({ Vacant:!this.state.Vacant})}>
                  <Text style={{fontSize:10,color:(this.state.Vacant ? '#333333': '#878787')}}>Looks Vacant</Text>
                  </TouchableOpacity>
              </View>

            </View>
        </View>

        
        <View style={{flexDirection:'row', marginTop:Metrics.screenHeight/50}}>
            <View style={{flexDirection:'row',flex:0.5  }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.hoarding ?
            <TouchableOpacity onPress={()=>this.setState({hoarding:false})}>
              <Image source={Images.checkbox}/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity onPress={()=>this.setState({hoarding:true})}>
              <Image source={Images.uncheckbox}/>
              </TouchableOpacity>
     
            }
            </View>

              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center",}}>
              <TouchableOpacity onPress={()=>this.setState({ hoarding:!this.state.hoarding})}>
                  <Text style={{fontSize:10,color:(this.state.hoarding ? '#333333': '#878787')}}>Hoarding of Items</Text>
                  </TouchableOpacity>
              </View>

            </View>
            

            <View style={{flexDirection:'row',flex:0.5, }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.lawn ?
            <TouchableOpacity onPress={()=>this.setState({lawn:false})}>
              <Image source={Images.checkbox}/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity onPress={()=>this.setState({lawn:true})}>
              <Image source={Images.uncheckbox}/>
              </TouchableOpacity>
     
            }
            </View>

              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center",}}>
              <TouchableOpacity onPress={()=>this.setState({ lawn:!this.state.lawn})}>
                  <Text style={{fontSize:10,color:(this.state.lawn ? '#333333': '#878787')}}>Lawn Over Grown</Text>
                  </TouchableOpacity>
              </View>

            </View>
        </View>
         

        <View style={{flexDirection:'row', marginTop:Metrics.screenHeight/50}}>
            <View style={{flexDirection:'row',flex:0.5  }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.rotting ?
            <TouchableOpacity onPress={()=>this.setState({rotting:false})}>
              <Image source={Images.checkbox}/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity onPress={()=>this.setState({rotting:true})}>
              <Image source={Images.uncheckbox}/>
              </TouchableOpacity>
     
            }
            </View>

              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center",}}>
              <TouchableOpacity onPress={()=>this.setState({ rotting:!this.state.rotting})}>
                  <Text style={{fontSize:10,color:(this.state.rotting ? '#333333': '#878787'),}}>Rotting Wood</Text>
                  </TouchableOpacity>
              </View>

            </View>
            

            <View style={{flexDirection:'row',flex:0.5, }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.foundation ?
            <TouchableOpacity onPress={()=>this.setState({foundation:false})}>
              <Image source={Images.checkbox}/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity onPress={()=>this.setState({foundation:true})}>
              <Image source={Images.uncheckbox}/>
              </TouchableOpacity>
     
            }
            </View>

              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center",}}>
              <TouchableOpacity onPress={()=>this.setState({ foundation:!this.state.foundation})}>
                  <Text style={{fontSize:10,color:(this.state.foundation ? '#333333': '#878787')}}>Foundation Issues</Text>
                  </TouchableOpacity>
              </View>

            </View>
        </View>


        <View style={{flexDirection:'row', marginTop:Metrics.screenHeight/50}}>
            <View style={{flexDirection:'row',flex:0.5  }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.low ?
            <TouchableOpacity onPress={()=>this.setState({low:false})}>
              <Image source={Images.checkbox}/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity onPress={()=>this.setState({low:true})}>
              <Image source={Images.uncheckbox}/>
              </TouchableOpacity>
     
            }
            </View>

              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center",}}>
              <TouchableOpacity onPress={()=>this.setState({ low:!this.state.low})}>
                  <Text style={{fontSize:10,color:(this.state.low ? '#333333': '#878787')}}>Low Hanging Trees</Text>
                  </TouchableOpacity>
              </View>

            </View>
            

            <View style={{flexDirection:'row',flex:0.5, }}>
              <View style={{flex:0.2, alignItems:"flex-start", justifyContent:"flex-start",}}>
            { this.state.roof ?
            <TouchableOpacity onPress={()=>this.setState({roof:false})}>
              <Image source={Images.checkbox}/>
              </TouchableOpacity>
            
              :
              <TouchableOpacity onPress={()=>this.setState({roof:true})}>
              <Image source={Images.uncheckbox}/>
              </TouchableOpacity>
     
            }
            </View>
            
          
              <View style={{flex:0.8,alignItems:"flex-start", justifyContent:"center"}}>
              <TouchableOpacity onPress={()=>this.setState({ roof:!this.state.roof})}>
                  <Text style={{fontSize:10,color:(this.state.roof ? '#333333': '#878787')}}>Roof Needs Repair</Text>
                  </TouchableOpacity>
              </View>
          

            </View>
        </View>



                        <View style={{marginTop:Metrics.screenHeight/15,flexDirection:'column'}}>
                          <Text style={{color:'#333333',fontSize:12}}>Notes</Text>
                          <Text style={{fontSize:10,color:'#878787',marginTop:Metrics.screenHeight/45}}>
                            Set ut perspiciatis unde omnis iste natus error sit volupatatem accusantium doloremqe laudantium, totam resizeMode
                            aperiam,eaque ipsa quae ab illo inventore veritatis at quasi architecto aperiam,eaque ipsa quae ab illo 
                            inventore veritatis at quasi architecto.

                          </Text>
                        </View>  

                 <View>
                        <TouchableOpacity  
                   style={{borderRadius:20,
                    width:Metrics.screenWidth/1.07,height:35,
                    justifyContent:"center",alignItems:"center",
                   backgroundColor:'#8db103',
                   marginTop:Metrics.screenHeight/15,
                   }}>
                   <Text style={{color:"white", fontSize:14}}>SUBMIT LEAD</Text>
                    
                   </TouchableOpacity>

               </View>
                   </View>  
            </Container>
            </Content>
        )
    }
}
