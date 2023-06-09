import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from '../screens/Account';
import ChangePassword from '../screens/ChangePassword';
import ForgotPassword_Change from '../screens/ForgotPassword_Change';
import ForgotPassword_Succeed from '../screens/ForgotPassword_Succeed';
import ForgotPassword_Email from '../screens/ForgotPassword_Email';
import GettingStarted from '../screens/GettingStarted';
import Help from '../screens/Help';
import History from '../screens/History';
import HistoryChoose from '../screens/HistoryChoose';
import Home_Answer from '../screens/Home_Answer';
import Home_Question from '../screens/Home_Question';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import OpenCamera from '../screens/OpenCamera';
import Profile from '../screens/Profile';
import SignUp_Succeed from '../screens/SignUp_Succeed';
import SignUp from '../screens/SignUp';
import TakePhoto from '../screens/TakePhoto';
import Tabs from './tab';

const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen
        name="ForgotPassword_Change"
        component={ForgotPassword_Change}
      />
      <Stack.Screen
        name="ForgotPassword_Succeed"
        component={ForgotPassword_Succeed}
      />
      <Stack.Screen
        name="ForgotPassword_Email"
        component={ForgotPassword_Email}
      />
      <Stack.Screen name="GettingStarted" component={GettingStarted} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="HistoryChoose" component={HistoryChoose} />
      <Stack.Screen name="Home_Answer" component={Home_Answer} />
      <Stack.Screen name="Home_Question" component={Home_Question} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OpenCamera" component={OpenCamera} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignUp_Succeed" component={SignUp_Succeed} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TakePhoto" component={TakePhoto} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
