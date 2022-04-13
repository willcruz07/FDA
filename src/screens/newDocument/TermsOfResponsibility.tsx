import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '../../components/CheckBox';
import { Input } from '../../components/Input';
import { TitleSection } from '../../components/TitleSection';
import { Colors } from '../../styles/colors';

export const TermsOfResponsibility = () => {
    const [fontsLoaded] = useFonts({
        "poppins-500": require("../../assets/fonts/poppins-500.ttf"),                
    });

    const [problema, setProblema] = useState(false);

    return (
        <View>
            <TitleSection title="Termo de responsabilidade"/>
            <View style={styles.containerTerms}>
                <ScrollView>
                    {fontsLoaded && (<Text style={styles.textTerms}>
                        Se existir algum problema que considere necessário, informar a profissional antes do procedimento e descreva-o abaixo caso não seja informado e descrito, a profissional se isenta de qualquer problema após o prcedimento relacionado a saúde. 
                    </Text>)}
                </ScrollView>
            </View>

            <CheckBox title="Possui algum problema?" value={problema} onCheck={() => setProblema(!problema)}/>            
            {problema && (                
                <Input title="Qual"/>                  
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    containerTerms: {
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 8,     
        marginBottom: 24,           
    },

    textTerms: {
        color: Colors.black2,
        fontFamily: 'poppins-500',
    },

})