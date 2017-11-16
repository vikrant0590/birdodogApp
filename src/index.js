import React, { Component } from 'react';
import {
    Login,
    SignUp,
    Dashboard
} from './containers';
import { Router, Scene } from 'react-native-router-flux';

export default class AppRouter extends Component {
    render() {
        return (
            <Router
                navigationBarStyle={{ backgroundColor: '#fc214f', borderBottomWidth: 0, }}>
                <Scene key='root'>
                    <Scene key="login" component={Login} hideNavBar={true}  />
                    <Scene key="signup" component={SignUp} hideNavBar={true} initial />
                    <Scene key="dashboard" component={Dashboard} hideNavBar={true} />
                </Scene>
            </Router>
        )
    }
}