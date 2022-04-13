import React from 'react';
import { AppProvider } from './hook/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './routes';
import { ImageBackground,StatusBar,StyleSheet } from 'react-native';
import imgBackground from './assets/img/backgroundGradiente/backgroundGradient.png'


export const Main = () => {
  return (
    <AppProvider>    
      <ImageBackground source={imgBackground} resizeMode="cover" style={styles.imgBackground} >
        <StatusBar  animated={true} backgroundColor="#E682A2"/>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>      
      </ImageBackground>  
    </AppProvider>
  );
}

const styles = StyleSheet.create({      
  imgBackground: {
      flex: 1,
  }, 
})



