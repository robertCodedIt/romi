import React, { Component } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import * as Network from 'expo-network';
import { LinearGradient } from "expo-linear-gradient";
// import socket io
import io from "socket.io-client";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { chatMessage: "", allMessages: [] };
    this.styles = {
      textInput: {
        backgroundColor: "white",
        fontSize: 14,

        marginHorizontal: 100,
        height: "auto",
        marginVertical: 60,
        borderWidth: 0,
        width: 200,
      },
      background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 300,
      },
      button: {
        padding: 15,
        alignItems: "center",
        borderRadius: 5,
      },
      text: {
        backgroundColor: "transparent",
        fontSize: 15,
        color: "#fff",
      },
    };
  }

  componentDidMount() {
    // be sure to call all asynchronous functions inside the componentDidMount method
    
    // be sure to add the ip address in the http request
   
    this.socket = io("http://2601:3c7:4202:37e0:5d46:550d:ece:1da9:3000");
    this.socket.on("chat message", (msg) => {
      this.setState({ allMessages: [...this.state.allMessages, msg] });
    });
    this.socket.on("output-message", (msg) => {
      console.log(msg);
      if (msg.length) {
        msg.forEach((message, key) => {
          key = message._id;
          this.setState({
            allMessages: [...this.state.allMessages, message.message],
          });
        });
      }
    });
  }
  submitMessage = () => {
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  };
  render() {
    const chatMessages = this.state.allMessages.map((message) => (
      <Text key={message}>{message}</Text>
    ));
    return (
      <>
        <View style={this.styles.container}>
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={this.styles.background}
          />
          <LinearGradient
            //         // Button Linear Gradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
          >
            <Text style={this.styles.text}>
              Welcome To RoMi's World Famous Chatroom
            </Text>
          </LinearGradient>
        </View>

        <View>
          <TextInput
            placeholder={` Chat! Press Enter to send!`}
            onChangeText={(chatMessage) => {
              this.setState({ chatMessage });
            }}
            value={this.state.chatMessage}
            onSubmitEditing={() => {
              this.submitMessage();
            }}
            autoCorrect={false}
            style={this.styles.textInput}
          />
        </View>
        <ScrollView>{chatMessages}</ScrollView>
      </>
    );
  }
}
export default Chat;
