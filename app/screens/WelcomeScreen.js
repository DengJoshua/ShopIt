import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/yonja.jpeg")} />
        <Text style={styles.tagline}>Welcome to ShopIt</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
