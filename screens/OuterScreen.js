import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Button, Input, Image } from "react-native-elements";

const OuterScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.conatiner}>
      <Image
        style={{ width: 300, height: 300 }}
        source={require("../assets/outerImage.jpg")}
      />
      <Text
        style={{
          marginBottom: 50,
          fontSize: 30,
          fontWeight: "500",
          padding: 2,
          textAlign: "center",
        }}
      >
        Take privacy with you. Be yourself in every message.
      </Text>
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Login")}
        title="CONTINUE"
      />
      <Button
        containerStyle={styles.button1}
        type="outline"
        title="Transfer or restore account"
        onPress={() =>
          Alert.alert("Sorry :(", "This feature is currently under testing.")
        }
      />
      <Text
        style={{
          marginTop: 40,
          fontSize: 10,
        }}
      >
        Developed By GuruF
      </Text>
    </KeyboardAvoidingView>
  );
};

export default OuterScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  button: {
    width: 280,
    borderRadius: 6,
    backgroundColor: "#3366FF",
  },
  button1: {
    width: 280,
    borderRadius: 6,
    marginTop: 15,
  },
});
