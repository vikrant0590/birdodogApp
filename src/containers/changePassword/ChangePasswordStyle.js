import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../theme';

export default StyleSheet.create({
   // ...ApplicationStyles.screen,
    container:{
        flex:1,
       marginLeft:Metrics.screenWidth/20,
       marginRight:Metrics.screenWidth/20,
        // justifyContent:"center",
         //alignItems:"center",
         marginTop:Metrics.navBarHeight,
         flexDirection:'column',
      
        
    
    },

});
    