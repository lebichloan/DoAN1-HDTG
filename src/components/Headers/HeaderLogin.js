import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PreviousButton from '../Buttons/PreviousButton';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

const HeaderLogin = props => {
  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <PreviousButton onPress={props.onPress}> </PreviousButton>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 2,
    marginLeft: '7%',
  },
  textContainer: {
    flex: 5,
    marginLeft: '10%',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 35,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
});
export default HeaderLogin;