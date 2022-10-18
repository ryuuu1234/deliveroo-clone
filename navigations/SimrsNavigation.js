import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Easing, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import LoginScreen from '../screens/LoginScreen';




const Stack = createStackNavigator();

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
    duration: 200,
    easing: Easing.linear,
  }
}

const AppStack = () => {
  return (
      <Stack.Navigator
            screenOptions={{
                gestureEnabled:true,
                gestureDirection: 'horizontal',
            }}
    >
      {/* <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="Restauran" component={RestauranScreen} 
        options={{
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: closeConfig
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      /> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default Navigator = () => {
    return (
       <SafeAreaProvider>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}