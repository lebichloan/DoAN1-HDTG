import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CUSTOM_COLOR from '../constants/colors.js';
import Courses from '../screens/Test/Courses.js';
import Profile from '../screens/Test/Profile.js';
import Settings from '../screens/Test/Settings.js';
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  // return (
  //   <Tab.Navigator
  //     initialRouteName="Profile"
  //     activeColor={CUSTOM_COLOR.BrightRed}
  //     barStyle={{
  //       position: 'absolute',
  //       backgroundColor: CUSTOM_COLOR.White,
  //       height: 90,
  //       borderWidth: 1,
  //       borderColor: CUSTOM_COLOR.Ink,
  //       borderTopEndRadius: 20,
  //       borderTopStartRadius: 20,
  //       zIndex: 2,
  //       top: '90%',
  //       overflow: 'hidden',
  //     }}>
  //     <Tab.Screen
  //       name="Course"
  //       component={Courses}
  //       options={{
  //         tabBarLabel: 'Courses',
  //         tabBarIcon: ({color}) => (
  //           <MaterialCommunityIcons name="book" color={color} size={26} />
  //         ),
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Profile"
  //       component={Profile}
  //       options={{
  //         tabBarLabel: 'Profile',
  //         tabBarIcon: ({color}) => (
  //           <MaterialCommunityIcons name="account" color={color} size={26} />
  //         ),
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Settings"
  //       component={Settings}
  //       options={{
  //         tabBarLabel: 'Settings',
  //         tabBarIcon: ({color}) => (
  //           <MaterialCommunityIcons
  //             name="brightness-7"
  //             color={color}
  //             size={26}
  //           />
  //         ),
  //       }}
  //     />
  //   </Tab.Navigator>
  // );
};
export default Tabs;
