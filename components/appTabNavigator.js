import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RequestScreen from '../screens/requestScreen';
import SuggestScreen from '../screens/suggestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    RequestMedicines: {
        screen: RequestScreen,
        navigationOptions: {
            tabBarIcon:
                <Image
                    source={require('../assets/medicines.jpg')}
                    style={{ width: 30, height: 30 }} />,
            tabBarLabel: "Request Medicines"
        }
    },
    Suggestions: {
        screen: SuggestScreen,
        navigationOptions: {
            tabBarIcon:
                <Image
                    source={require('../assets/suggestion.png')}
                    style={{ width: 30, height: 30 }} />,
            tabBarLabel: "Suggestions"
        }
    }
})