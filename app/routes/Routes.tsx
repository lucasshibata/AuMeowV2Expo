import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateUser from '../(tabs)/CreateUser';
import CadastroDono from '../(tabs)/CadastroDono';
import CadastroPrestador from '../(tabs)/CadastroPrestador';
import Login from '../(tabs)/Login';
import RecoverPassword from '../(tabs)/RecoverPassword';
import OAuth2Screen from '../(tabs)/OAuth2Screen';
import NavigationScreen from '../(tabs)/NavigationScreen';
import Shopping from '../(tabs)/Shopping'; 
import PetServices from '../(tabs)/PetServices';
import AuthProvider from '../context/AuthContext';
import EspecificProduct from '../(tabs)/EspecificProduct';

const Stack = createNativeStackNavigator();

export default ()=>{
    return(
        <NavigationContainer independent={true}>
            <AuthProvider>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen options={{headerShown:false}}
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="CreateUser"
                        component={CreateUser}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="CadastroDono"
                        component={CadastroDono}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="CadastroPrestador"
                        component={CadastroPrestador}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="RecoverPassword"
                        component={RecoverPassword}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="OAuth2Screen"
                        component={OAuth2Screen}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="NavigationScreen"
                        component={NavigationScreen}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="Shopping"
                        component={Shopping}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="PetServices"
                        component={PetServices}
                    />
                    <Stack.Screen options={{headerTransparent:true, title:''}}
                        name="EspecificProduct"
                        component={EspecificProduct}
                    />
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
};
