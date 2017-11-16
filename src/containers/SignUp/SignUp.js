import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            firstname: undefined,
            lastname: undefined,
            email: undefined,
            password: undefined,
            confirmpassword: undefined
        }
    }

    onPressSignUp = () =>{
        Actions.dashboard();
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 120,
                            width: 120,
                            height: 40,
                            alignSelf: 'center'
                        }}
                        onPress={() =>{this.onPressSignUp()}}>
                        <Text>submit</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}