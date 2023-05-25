import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  Image,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {IMG_Background, IMG_avata} from '../assets/images/index.js';
import FuntionButton from '../components/Buttons/FuntionButton.js';

const Home_Question = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMG_Background}
        resizeMode="cover"
        style={styles.container}>
        <>
          <View style={styles.avataConatiner}>
            <View
              style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={IMG_avata}
                style={{
                  width: '90%',
                  height: '85%',
                  resizeMode: 'cover',
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.textSignUpStyle}>...</Text>
            </View>
            <View
              style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: '100%', height: '75%'}}>
                {/* <FuntionButton
                  text="Clear All"
                  onPress={() => navigation.navigate('Home_Answer')}
                /> */}
              </View>
            </View>
          </View>
        </>

        <>
          <View style={styles.optionCameraContainer} />
        </>

        <></>

        <></>

        <></>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avataConatiner: {
    width: '90%',
    height: 70,
    marginHorizontal: '5%',
    marginTop: 10,
    flexDirection: 'row',
  },
  textSignUpStyle: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: 25,
    color: CUSTOM_COLOR.White,
    fontWeight: 'bold',
  },
  optionCameraContainer: {
    width: '90%',
    height: '500',
    backgroundColor: 'red',
  },
});
export default Home_Question;
