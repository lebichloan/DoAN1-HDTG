import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';

const HistoryChoose = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HistoryChoose;
