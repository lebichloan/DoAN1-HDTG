import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PreviousButton from '../Buttons/PreviousButton.js';
import CUSTOM_COLOR from '../../constants/colors.js';
import FONT_FAMILY from '../../constants/fonts.js';

const HeaderWithBack = props => {
  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <PreviousButton onPress={props.onPress}> </PreviousButton>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.textinputStyle}>{props.title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    backgroundColor: CUSTOM_COLOR.White,
  },
  buttonContainer: {
    // flex: 1,
    marginLeft: '7%',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinputStyle: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 20,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
});
export default HeaderWithBack;
