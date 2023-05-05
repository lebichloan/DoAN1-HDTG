import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CUSTOM_COLOR from '../constants/colors.js';
import Home_Question from '../screens/Home_Question.js';
import History from '../screens/History.js';
import Account from '../screens/Account.js';
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home_Question"
      activeColor={CUSTOM_COLOR.BrightRed}
      barStyle={{
        position: 'absolute',
        backgroundColor: CUSTOM_COLOR.White,
        height: 90,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.Ink,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        zIndex: 2,
        top: '90%',
        overflow: 'hidden',
      }}>
      <Tab.Screen
        name="Home_Question"
        component={Home_Question}
        options={{
          tabBarLabel: 'Home_Question',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="brightness-7"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
