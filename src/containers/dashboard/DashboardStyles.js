import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../theme';
export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container:{
        marginTop:Metrics.navBarHeight,
         flex:1 
    },
    List:{
       
        flex:1,
    },
    ListRow:{
        flex:1,
        height:Metrics.screenHeight/6,
        flexDirection:'row',
        marginLeft:Metrics.screenWidth/25,
        marginRight:Metrics.screenWidth/25,
        marginTop:12,
    },
    ListImageRow:{
        flexDirection:'column'
    },
    ImageTouch:{
        height:Metrics.screenHeight/6,
        width:Metrics.screenWidth/2.4,
    },
    ImageThumb:{
               borderBottomLeftRadius:5,
               borderBottomRightRadius:5,
               borderTopLeftRadius:5,
               borderTopRightRadius:5,
               borderRadius:5,
               height:Metrics.screenHeight/6,
               width:Metrics.screenWidth/2.4,
               backgroundColor:'#878787'
    },
    flatListContainer:{
        flex:1
    
    },
    playIcon:{
        marginTop:-Metrics.screenHeight/8.8,
        alignItems:'center',
         justifyContent:'center'
    },
    lockIcon:{
        marginTop:-Metrics.screenHeight/8.8,
        marginLeft:Metrics.screenWidth/6.3,
        alignItems:'center',
         justifyContent:'center'
    },
    DetailColumn:{
        height:Metrics.screenHeight/6,
        width:Metrics.screenWidth/2.1,
        flex:1,
       flexDirection:'column',
     marginLeft:Metrics.screenWidth/30,
    },
    titleView:{
        alignItems:'flex-start',
        justifyContent:"center",
        marginTop:Metrics.screenHeight/120,
        flex:0.2,
    },
    titleText:{
        color:'#333333', 
        fontSize:16,
        fontFamily:'robotoBold'
    },
    decView:{
        flex:0.5,
    },
    videoDesc:{
        color:'#878787',
         fontSize:12,
          fontFamily:'robotoLight'
    },
    viewDetailView:{
        flex:0.3,
    },
    viewDetailTouchArea:{
        alignItems:'center',
         flexDirection:'row',
    },
    viewDetailButton:{
        marginRight:Metrics.screenWidth/60,
    },
    ViewDetailText:{
        fontSize:12, color:'#333333', justifyContent:'center',fontFamily:'robotoBold'
    },
    ListRowSeperator:{
        marginTop:12,
        height:0.4,
         backgroundColor:'#cecece'
    }
 
    

});
    