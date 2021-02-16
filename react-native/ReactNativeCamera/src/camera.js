import React, { Component } from 'react'
import { Text, View } from 'react-native'

import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import logo from "./assets/logo.png";

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.photo}></View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="camera-alt" size={40} color={"#f37272"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="delete" size={40} color={"#f37272"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f37272"
  },
  logo: {
    alignSelf: "center",
    marginTop: 60
  },
  photo: {
    width: 300,
    height: 200,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 80
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
