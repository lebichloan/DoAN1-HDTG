import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainNavigator from './src/navigation/navigation.js'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <MainNavigator></MainNavigator>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  
})