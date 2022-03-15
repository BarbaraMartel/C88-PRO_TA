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
        <Stack.Screen name="Inicio" component={PantallaInicio} />
        <Stack.Screen name="Localización de la EEI" component={PantallaLocalizacióndelaEEI} />
        <Stack.Screen name="Meteoritos" component={PantallaMetoritos} />
        <Stack.Screen name="Actualizaciones" component={PantallaActualizaciones} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
