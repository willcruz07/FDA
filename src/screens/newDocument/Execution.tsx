import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox } from '../../components/CheckBox';
import { Input } from '../../components/Input';
import Sign from '../../components/Signature';
import { TitleSection } from '../../components/TitleSection';
import { useAppContext } from '../../hook/AppContext';
import { StackParams } from '../../models/stackParams';
import { Colors } from '../../styles/colors';

export const Execution = () => {
    const { state, dispatch } = useAppContext();

    const [fontsLoaded] = useFonts({
        "montserrat-800": require("../../assets/fonts/montserrat-800.ttf"),                
    });

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const [autorizacao, setAutorizacao] = useState(false);
    const [retoque, setRetoque] = useState(false);

    const handleShow = () => {
        console.log(state.order);
    }
     

    return (
        <View>
            <TitleSection title="Execução"/>                            
                <CheckBox 
                    title="Autorizo fotografar o local ANTES e DEPOIS pra qualquer tipo de divulgação profissional" 
                    onCheck={() => setAutorizacao(!autorizacao)} 
                    value={autorizacao} 
                    marginBottom={24}
                />

                <Input title="Valor" />

                <CheckBox 
                    title="Com retoque?" 
                    onCheck={() => setRetoque(!retoque)} 
                    value={retoque}                 
                />
                {retoque && (
                    <Input title="Data do retoque" />
                )}            

                <TouchableOpacity 
                    onPress={() => navigation.navigate('signature')}
                    style={styles.buttonSignature}
                >
                    <Text style={styles.textButton}>Assinar</Text>
                </TouchableOpacity>    
            

            <TouchableOpacity 
                onPress={() => handleShow()}
                style={styles.buttonPrimary}
            >
                <Text style={styles.textButtonPrimary}>Salvar</Text>
            </TouchableOpacity>                    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'space-between',

    },
    
    buttonSignature: {
        marginTop: 16,
        height: 64,
        width: '100%',        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 4,
        borderColor: Colors.secondary,
        
    },

    textButton: {
        fontFamily: 'montserrat-800',
        color: Colors.black2,
    },

    textButtonPrimary: {
        fontFamily: 'montserrat-800',
        color: Colors.white,
    },

    buttonPrimary: {        
        alignItems: 'center',
        justifyContent: 'center',        
        height: 64,
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 8,
        marginTop: 16,
    }
});