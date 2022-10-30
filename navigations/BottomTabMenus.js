import { View, Text } from 'react-native'
import React from 'react'

// DRAWER & BOTTOM TABS NAVIGATOR
import { createDrawerNavigator,DrawerItemList } from "@react-navigation/drawer";
import { Ionicons,Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const BottomTabMenus = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        //activeColor: Color.accentColor,
        activeColor: 'red',
        barStyle: {
          //backgroundColor: Color.primaryColor,
          backgroundColor: 'red',
        },
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={props.components}
        options={{
          headerShown:false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={25}
                //color={Color.primaryColor}
                color="red"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabMenus