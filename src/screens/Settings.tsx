import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from '../components/Background';
import { GoBack } from '../components/GoBack';
import { TitlePage } from '../components/TitlePage';


export const Settings = () => {
    return (
        <Background>   
            <GoBack/>         
            <View style={styles.container}>   
                <TitlePage title="Configurações"/>         
                <Text>Cadastro</Text>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,      
    },
});