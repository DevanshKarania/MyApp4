import React from 'react';
import { TouchableOpacity, Text, View, Image, TextInput, StyleSheet } from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class SuggestScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            topic: "",
            suggestion: '',
            clientContact: '',
            clientName: ''
        }
    }

    createUniqueId() {
        return Math.random().toString(36).substring(7);
    }

    addSuggestion = async (topic, suggestion) => {
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        var clientName = this.state.clientName;
        var clientContact = this.state.clientContact;
        // console.log("state 34: ", this.state)
        db.collection('Suggestions').add({
            "userId": userId,
            "topic": topic,
            "suggestion": suggestion,
            "requestId": randomRequestId,
            "clientName": clientName,
            "clientContact": clientContact,
            "date": firebase.firestore.FieldValue.serverTimestamp(),
        })
        this.setState({
            topic: '',
            suggestion: ''
        })
        alert("Suggestion Sent Successfully")
    }

    getUserDetails = (userId) => {
        db.collection("users").where('emailID', '==', userId).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    this.setState({
                        clientName: doc.data().firstName + " " + doc.data().lastName,
                        clientContact: doc.data().contact
                    })
                })
            })
    }

    componentDidMount() {
        this.getUserDetails(this.state.userId)
    }

    render() {
        return (
            <View>
                <MyHeader title="Suggestions/Enquiries" navigation={this.props.navigation} />
                <View>
                    <TextInput
                        style={styles.formTextInput}
                        label={"Topic"}
                        placeholder={"Suggestion Topic"}
                        containerStyle={{ marginTop: 60 }}
                        onChangeText={(text) => {
                            this.setState({
                                topic: text
                            })
                        }}
                    />

                    <TextInput
                        style={styles.textInputBox}
                        label={"Suggestions"}
                        placeholder={"Suggestion/Enquiry"}
                        containerStyle={{ marginTop: 60 }}
                        onChangeText={(text) => {
                            this.setState({
                                suggestion: text
                            })
                        }}
                    />

                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            this.addSuggestion(this.state.topic, this.state.suggestion);
                        }}>
                        <Text style={{ color: 'black' }}>Send Suggestion</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    textInputBox: {
        width: "75%",
        height: 350,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    button: {
        width: "25%",
        height: 50,
        marginTop: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#CE8A8A",
        shadowColor: "#DDDCDC",
        shadowOffset: {
            width: 0,
            height: 8
        }
    }
})