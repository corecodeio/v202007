import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";

import { TabsParamList } from ".././../types";
import { View, Text } from "react-native";

const TabOneScreen = () => {
  return (
    <View>
      <Text>TabOneScreen</Text>
    </View>
  );
};

const TabTwoScreen = () => {
  return (
    <View>
      <Text>TabOneScreen</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator<TabsParamList>();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabOne" component={TabOneScreen} />
      <Tab.Screen name="TabTwo" component={TabOneScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
