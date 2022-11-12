import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
 
import ContactUs from './app/screen/ContactUs';
 

const Stack = createNativeStackNavigator ();

 export default class App extends react.Component {
  render () {
    return (
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName="Screen"
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Screen" component={ContactUs} />
 
          
         

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
