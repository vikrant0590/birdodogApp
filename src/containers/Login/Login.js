import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Input, Button } from 'native-base';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: undefined,
            password: undefined,
        }
    }
    onPressLogin = () => {
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
                        onPress={() => { this.onPressLogin() }}>
                        <Text>submit</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}