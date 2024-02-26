import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from "./src/screens/Home";
import Contact from "./src/screens/Contact";
import Profile from "./src/screens/Profile";



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

    <Stack.Navigator>

    <Stack.Screen name= "Home" component={Home} 
    options={{
      title: "Tela Inicial",
      headerStyle: {
        backgroundColor: "f4511e"
      },
      headerTintColor: "#000000",
      headerTintStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",

      
    }}
    />
    

    <Stack.Screen name= "Contact" component={Contact}></Stack.Screen>

    <Stack.Screen name= "Profile" component={Profile}></Stack.Screen>
    
    </Stack.Navigator>
    <StatusBar style='auto'></StatusBar>
    </NavigationContainer>

   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


