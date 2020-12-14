import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const items = [
  {
    id: 1,
    name: "Mercendez Benz",
    price: "10,000,000",
    images: [
      {
        id: 2,
        image: require("../assets/cars1.jpg"),
      },
      {
        id: 3,
        image: require("../assets/cars2.jpg"),
      },
    ],
  },
  {
    id: 2,
    name: "Alfa Romeo",
    price: "24,000,000",
    images: [
      {
        id: "1a",
        image: require("../assets/cars3.jpg"),
      },
      {
        id: "1b",
        image: require("../assets/car.jpg"),
      },
    ],
  },
  {
    id: 3,
    name: "Toyota Alex  ",
    price: "13,000,000",
    images: [
      {
        id: "1c",
        image: require("../assets/car.jpg"),
      },
    ],
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            subTitle={"Ugx " + item.price}
            image={item.images[0]}
            onPress={() => navigation.navigate("ListItem", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 10,
  },
});

export default ListingsScreen;
