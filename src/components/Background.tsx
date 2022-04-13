import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import imgBackground from '../assets/img/backgroundGradiente/backgroundGradient.png'
import logoBackground from '../assets/img/logo/logo.png';

export const Background: React.FC = ({children}) => {
    return (
        <ImageBackground source={imgBackground} resizeMode="cover" style={styles.imgBackground} >            
            <View style={styles.container}>
                {children}
            </View>            
        </ImageBackground>
    )

}

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        paddingHorizontal: 16,   
        paddingTop: 32,      
    },    

    imgBackground: {
        flex: 1,
    },    
})