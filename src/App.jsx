import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

const Drawer = createDrawerNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name='Home' component={HomeScreen}/>
                    <Drawer.Screen name='Details' component={DetailsScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}