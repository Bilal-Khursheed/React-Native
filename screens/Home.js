import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { BackgroundCarousel } from "./BackgroundCarousel";

const images = [
  "https://images.unsplash.com/photo-1583507623011-5cc6ff99e11c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80",
  "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1572041002237-762bdc102cf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://media.istockphoto.com/vectors/farmer-pouring-the-milk-vector-id819216646?k=6&m=819216646&s=612x612&w=0&h=bWtHpC9Ri9UAdqcBR6xHxiDLbB4Pye6TkBmBbCDHmK4=",
  "https://images.unsplash.com/photo-1545468259-3061e564cf56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=342&q=80",
];

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundCarousel images={images} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
