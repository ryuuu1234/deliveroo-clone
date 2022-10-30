import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Easing, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// DRAWER & BOTTOM TABS NAVIGATOR
import { createDrawerNavigator,DrawerItemList } from "@react-navigation/drawer";
import { Ionicons,Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen'
import COLORS from '../global/colors';



const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 1,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 100,
    easing: Easing.linear,
  }
}

const transition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: config,
    close: closeConfig
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

const AuthStack = createStackNavigator();
const NavigationAuth = () => {
  return (
    <AuthStack.Navigator
        screenOptions={{
            gestureEnabled:true,
            // gestureDirection: 'horizontal',
            headerShown:false
        }}
      >
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />

      {/* HOME SCREEN */}
      <AuthStack.Screen name="container" component={BottomTabMenus} options={transition} />
    </AuthStack.Navigator>
  )
}

const Stack = createStackNavigator();
const NavigationsAuthRequired = () => {
  return (
    <Stack.Navigator
      screenOptions={{
          gestureEnabled:true,
          // gestureDirection: 'horizontal',
      }}
  >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={transition} />
  </Stack.Navigator>
  )
}




// DRAWERCONST

const Tab = createBottomTabNavigator();
const BottomTabMenus = () => {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      screenOptions={{
        tabBarActiveTintColor: COLORS.negative,
        tabBarStyle: { position: 'absolute' },
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={NavigationsAuthRequired}
        options={{
          headerShown: false,
          tabBarShowLabel:false,
          tabBarIcon: ({ color}) => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={20}
                color= {color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};


// const Drawer = createDrawerNavigator();
// const MainNavigator = () => {
//   return (
//     <Drawer.Navigator 
//       drawerContent={(props) => {
//       return (
//         <View style={{ flex: 1, padding: 20 }}>
//           <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
//             <DrawerItemList {...props} />
//             <Button
//               title="Logout"
//               //color={Color.primary}
//               color="red"
//               onPress={() => {
//                  props.navigation.navigate("LoginScreen");
//               }}
//             />
//           </SafeAreaView>
//         </View>
//       );
//     }}
//     >
//       <Drawer.Screen name="Food Categori" component={Navigations}  options={{
//           drawerIcon: (props) => (
//             <Ionicons
//               name={Platform.OS === "android" ? "md-pizza" : "ios-pizza"}
//               size={23}
//               color={props.color}
//             />
//           ),
//         }}/>
        
//         <Drawer.Screen name="Filter" component={filterNavigations} options={{
//           drawerIcon: (props) => (
//             <Ionicons
//               name={Platform.OS === "android" ? "md-color-filter" : "ios-color-filter"}
//               size={23}
//               color={props.color}
//             />
//           ),
//         }}/>
//         <Drawer.Screen name="Profile" component={ProfileNavigation}  options={{
//           drawerIcon: (props) => (
//             <Feather name="user-check" size={23}  color={props.color} />
//           ),
//         }}/>
        
//       </Drawer.Navigator>
//   );
// };



export default Navigator = () => {
    return (
       <SafeAreaProvider>
            <NavigationContainer>
                <NavigationAuth />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}