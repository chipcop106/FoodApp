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
// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//           <TaskManagerScreen />
//        </SafeAreaView>
//     </>
//   );
// };
const Stack = createStackNavigator ();
function RootStack(){
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Business Search' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default RootStack;

// export default App;