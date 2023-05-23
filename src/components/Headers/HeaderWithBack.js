import React from 'react';
import {View, StyleSheet} from 'react-native';
import PreviousButton from '../Buttons/PreviousButton.js';

const HeaderWithBack = props => {
  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <PreviousButton onPress={props.onPress}> </PreviousButton>
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
    flex: 1,
    marginLeft: '7%',
  },
});
export default HeaderWithBack;
