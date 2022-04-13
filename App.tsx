
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './src/Main';
import { Colors } from './src/styles/colors';


export default function App() {
  return (
    <SafeAreaProvider>      
      <Main/>
    </SafeAreaProvider>
  );
}
