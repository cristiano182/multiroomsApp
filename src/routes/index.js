import { View, Text } from 'react-native'
import React, { Component } from 'react'
import { APP_NAME } from 'react-native-dotenv'
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import HomeScreen from "../screens/home/index"
import MapaScreen from "../screens/mapa/index"
import Page from "../screens/page1/index"
import LoginScreen from "../screens/login/index"
import RegistrarScreen from "../screens/register/index"
import PreloadScreen from '../screens/preload/index'
import LinearGradient from 'react-native-linear-gradient'


const MainStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: APP_NAME,
            headerBackground: (
                <LinearGradient
                colors={['#540a82', '#a10cf2']}
                  style={{ flex: 1 }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                />
              ),
            headerTintColor: 'white',
            headerRight: (
                <View style={{ marginRight: 23, flexDirection: 'row' }}>
                    <Text style={{ color: 'white' }}> {navigation.getParam('usersOnline')} online </Text>
                </View >
            )
        })
    },
    Mapa: {
        screen: MapaScreen,
        navigationOptions: {
            headerTransparent: true,
            headerTintColor: '#27c694',
            headerTitle: 'Amigos Proximos'

        },
    },
    Page: {
        screen: Page,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Room',
            headerBackground: (
                <LinearGradient
                colors={['#540a82', '#a10cf2']}
                  style={{ flex: 1 }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                />
              ),
            headerTintColor: 'white',
        })

    }
},
    {
        initialRouteName: 'Home',
    }
)


const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Registrar: {
        screen: RegistrarScreen
    },

},
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)
const PreloadStack = createStackNavigator({
    Preload: {
        screen: PreloadScreen
    },

},
    {
        initialRouteName: 'Preload',
        headerMode: 'none'
    })

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: PreloadStack,
        App: MainStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));


