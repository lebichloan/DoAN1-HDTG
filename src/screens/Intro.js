import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ImageBackground, Image} from 'react-native';
import {IMG_Background} from '../assets/images/index.js';

const Intro = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground
        source={IMG_Background}
        resizeMode="cover"
        style={styles.image}
      /> */}
      <Image
        source={IMG_Background}
        style={[styles.container, {width: '100%', height: '100%'}]}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // image: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
});
export default Intro;
