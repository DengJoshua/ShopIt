import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListItemScreen from "../screens/ListItemScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="ListItem"
      component={ListItemScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
