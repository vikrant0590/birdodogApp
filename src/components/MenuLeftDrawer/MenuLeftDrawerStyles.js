import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../theme';
export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container:{
        flex:1,
        marginLeft:Metrics.screenWidth/8,
        marginRight:Metrics.screenWidth/8,
         justifyContent:"center",
         alignItems:"center",
    
    },

    listContainer:{
        flex:1,
        backgroundColor:'transparent',
       
        marginBottom:10,
    
      },
      itemList: {
        flex:1,
        color: '#a7a7a7',
        height:Metrics.screenHeight/18,
        alignSelf:"center",
        justifyContent:'center',
        marginLeft:14,
        fontSize:17,
        fontFamily:'robotoRegular'
       
      },

  

});
    