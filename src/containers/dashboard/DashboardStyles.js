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

});
    