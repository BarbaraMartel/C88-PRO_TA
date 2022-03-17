import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="StartMapScreen" component={StartMapScreen} />
        <Stack.Screen name="DailyPicScreen" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraftScreen" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
