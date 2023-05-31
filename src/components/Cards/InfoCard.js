import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors.js';
import FONT_FAMILY from '../../constants/fonts.js';
import NextButton from '../Buttons/NextButton.js';

const InfoCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={[styles.unitContainer, {flex: 9}]}>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
        <View style={[styles.unitContainer, {flex: 1}]}>
          <NextButton onPress={props.onPress}> </NextButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  childContainer: {
    width: '90%',
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 25,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
});
export default InfoCard;
