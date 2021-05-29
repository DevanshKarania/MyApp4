import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import CustomSideBarMenu from './customSideBarMenu';
//import SettingScreen from '../screens/settingScreen';
import RequestScreen from '../screens/requestScreen';
import SuggestScreen from '../screens/suggestScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    RequestScreen: {
        screen: RequestScreen
    },
    SuggestScreen:{
        screen:SuggestScreen
    },
},
    {
        contentComponent: CustomSideBarMenu
    },
    {
        initialRouteName: 'Home'
    }
)