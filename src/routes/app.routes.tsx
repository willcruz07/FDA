import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackParams } from "../models/stackParams";
import { Home } from "../screens/Home";
import { History } from '../screens/History';
import { Settings } from '../screens/Settings';
import { NewDocument } from '../screens/newDocument';
import { Signature } from '../screens/newDocument/Signature';

const Stack = createNativeStackNavigator<StackParams>();

export const AppRoutes = () => {
    return (        
        <Stack.Navigator 
            initialRouteName="home" 
            screenOptions={{
                headerShown: false,                
            }}                        
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="newDocument" component={NewDocument} />
            <Stack.Screen name="history" component={History} />
            <Stack.Screen name="settings" component={Settings} />            
            <Stack.Screen name="signature" component={Signature} />            
        </Stack.Navigator>                    
    )
}

