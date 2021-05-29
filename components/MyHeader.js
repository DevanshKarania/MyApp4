import React from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class MyHeader extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Header
                leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={() => this.props.navigation.toggleDrawer()} />}
                centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize: 20, fontWeight: "bold", } }}
                backgroundColor="#F1B6AB"
            />
        )
    }
}