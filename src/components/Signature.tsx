import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import React, { useRef } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import SignatureScreen from "react-native-signature-canvas";
import { StackParams } from "../models/stackParams";
import { Colors } from "../styles/colors";

const Sign = ({ onOK }: any) => {
  const [fontsLoaded] = useFonts({
    "montserrat-800": require("../assets/fonts/montserrat-800.ttf"),                
  });

  const ref = useRef<any>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const handleOK = (signature: any) => {
    console.log(signature);
    // onOK(signature);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleCancel = () => {
    navigation.goBack();
  }

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  };

  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

  return (
    <View style={styles.container}>
      <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
      <View style={styles.row}>      
        <View style={styles.rowSignature}>
          <TouchableOpacity 
            style={styles.buttonSignature}
            onPress={handleClear}
          >
            {fontsLoaded && <Text style={styles.textButtonSignature}>Limpar</Text>}
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonSignature}
            onPress={handleCancel}
          >
            {fontsLoaded && <Text style={styles.textButtonSignature}>Cancelar</Text>}
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.buttonPrimary}
          onPress={handleConfirm}
        >
          {fontsLoaded && <Text style={styles.textButtonPrimary}>Confirmar</Text>}
        </TouchableOpacity>             
      </View>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {        
    marginTop: 32,    
    alignItems: "center",
    justifyContent: "center",    
    height: 450,
    padding: 10,    
  },

  row: {
    display: "flex",    
    width: "100%",       
  },

  rowSignature: {
    flexDirection: 'row',    
    justifyContent: 'space-between',
    
  },

  textButtonSignature: {
    color: Colors.black2,
    fontFamily: 'montserrat-800',

  },

  buttonSignature: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,    
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 8,    
    borderWidth: 2,
    borderColor: Colors.secondary,    
  },

  textButtonPrimary: {
    fontFamily: 'montserrat-800',
    color: Colors.white,
  },

  buttonPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    height: 64,
    borderRadius: 8,
    width: '100%',
    backgroundColor: Colors.primary,    
  }
});