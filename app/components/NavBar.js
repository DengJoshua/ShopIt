import React from "react";
import { View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function NavBar() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="mail" color="white" size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    padding: 5,
    position: "absolute",
    backgroundColor: "blue",
    width: "100%",
  },
});

export default NavBar;
