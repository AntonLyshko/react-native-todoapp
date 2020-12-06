import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navbar from './src/navbar/Navbar'
import styled from 'styled-components/native'
import Main from './src/main/Main'
import TodoScreen from './screens/TodoScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AddItemScreen from './screens/AddItemScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const App = () => {


  const Stack = createStackNavigator()


  const [loaded] = useFonts({
    'SFPRO-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    'SFPRO-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
    'SFPRO-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Todo" component={TodoScreen} />
          <Stack.Screen name="AddItem" component={AddItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>

  );
}

const Container = styled.View`
  display: flex;
  flex: 1;
  font-family: 'SFPRO-Bold'
  color: #ffffff;
  background: #181A20;

`;


export default App;
