import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";

function ListItemScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.images[1].image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.name}</Text>
        <Text style={styles.price}>${listing.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListItemScreen;
