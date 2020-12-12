import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from '@seabass-ui/theme-provider';
import theme from './theme';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TextScreen from './src/Text';
import LayoutScreen from './src/Layout';
import InteractionScreen from './src/Interactions';
import FormsScreen from './src/Forms';
import { Pressable } from '@seabass-ui/seabass';
import { Stack } from '@seabass-ui/layout';

const NavigationStack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <Stack space={2} sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={() => navigation.navigate('Text')}>Text</Pressable>
      <Pressable onPress={() => navigation.navigate('Layout')}>
        Layout
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Interactions')}>
        Interactions
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Forms')}>Forms</Pressable>
    </Stack>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <NavigationStack.Navigator>
          <NavigationStack.Screen name="Home" component={HomeScreen} />
          <NavigationStack.Screen name="Text" component={TextScreen} />
          <NavigationStack.Screen name="Layout" component={LayoutScreen} />
          <NavigationStack.Screen name="Interactions" component={InteractionScreen} />
          <NavigationStack.Screen name="Forms" component={FormsScreen} />
        </NavigationStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
