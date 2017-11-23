import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../theme';
export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container:{
        flex:1,
        marginLeft:Metrics.screenWidth/15,
        marginRight:Metrics.screenWidth/15,
      
    },

});
    