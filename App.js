import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="ios-pizza" color="red" size={100} />
        <Text>Welcome to Miami Son!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>🙋 🙋 🙋 🙋</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
