/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,

  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

const Stack = createStackNavigator ();

function RootStack(){
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: true }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Business Search' }}
        />
          <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
          options={{ title: 'Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default RootStack;

// export default App;