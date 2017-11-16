import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Row, Body, Left, Right, Icon, Button, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MapView, { MAP_TYPES } from 'react-native-maps';
import styles from './DashboardStyle';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.container}>
                    <MapView
                        provider={this.props.provider}
                        ref={ref => { this.map = ref; }}
                        mapType={MAP_TYPES.TERRAIN}
                        style={styles.map}
                        initialRegion={this.state.region}
                        onRegionChange={region => this.onRegionChange(region)}
                    />
                    <Row style={{ height: 40, marginBottom: height - 80, marginHorizontal: 20, backgroundColor: 'red' }}>
                        <Left>
                            <Button transparent onPress={() => { Actions.pop() }}>
                                <Icon name={'ios-menu'} style={{ fontSize: 20, marginLeft: 10 }} />
                            </Button>
                        </Left>
                        <Input
                            placeholder={'search'}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'flex-start'
                            }} />
                        <Right>
                            <Icon name={'ios-search-outline'} style={{ fontSize: 20, marginRight: 20 }} />
                        </Right>
                    </Row>
                </View>
            </View>
        );
    }
}