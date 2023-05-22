import React from 'react';
import {StyleSheet, Text} from 'react-native';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

const HeaderTitlle = props => {
  return <Text style={styles.titleView}>{props.title}</Text>;
};
const styles = StyleSheet.create({
  titleView: {
    fontFamily: FONT_FAMILY.SemiBold,
    fontSize: 30,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
});
export default HeaderTitlle;

// Header screeen 5,7,8,9
