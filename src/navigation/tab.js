import React from 'react';
import {Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CUSTOM_COLOR from '../constants/colors.js';
import Home_Question from '../screens/Home_Question.js';
import History from '../screens/History.js';
import Account from '../screens/Account.js';
import {IC_home, IC_history, IC_account} from '../assets/icons/index.js';
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home_Question"
      activeColor={CUSTOM_COLOR.Denim}
      barStyle={{
        position: 'absolute',
        backgroundColor: CUSTOM_COLOR.White,
        height: 90,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.SilverChalice,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        zIndex: 2,
        top: '90%',
        overflow: 'hidden',
      }}>
      <Tab.Screen
        name="Home_Question"
        component={Home_Question}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              source={IC_home}
              style={{width: '95%', height: '95%', resizeMode: 'stretch'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: () => (
            <Image
              source={IC_history}
              style={{width: '95%', height: '95%', resizeMode: 'stretch'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => (
            <Image
              source={IC_account}
              style={{width: '95%', height: '95%', resizeMode: 'stretch'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
