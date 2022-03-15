import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Localización de la EEI" component={IssLocationScreen} />
        <Stack.Screen name="Meteoritos" component={MeteorScreen} />
        <Stack.Screen name="Actualizaciones" component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
