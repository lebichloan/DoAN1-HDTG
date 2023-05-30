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
import {
  IMG_Background,
  IMG_avata,
  IMG_imageQuestion,
} from '../assets/images/index.js';
import {IC_camera, IC_upload} from '../assets/icons/index.js';
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
                  width: '65%',
                  height: '85%',
                  resizeMode: 'cover',
                  borderRadius: 50,
                }}
              />
            </View>
            <View
              style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.textSignUpStyle}>...</Text>
            </View>
            <View
              style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: '100%', height: '100%'}}>
                <FuntionButton
                  text="Clear All"
                  onPress={() => navigation.navigate('Home_Answer')}
                />
              </View>
            </View>
          </View>
        </>

        <View style={{width: '100%', height: 10}} />

        <>
          <View style={styles.optionCameraContainer}>
            <View
              style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={IMG_imageQuestion} style={styles.imageStyle} />
            </View>
            <View style={{width: '100%', height: 5}} />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View style={{width: '20%', height: '100%'}}>
                <Image
                  source={IC_camera}
                  style={[
                    styles.imageStyle,
                    {backgroundColor: CUSTOM_COLOR.Denim},
                  ]}
                />
              </View>
              <View style={{width: '5%', height: '100%'}} />
              <View style={{width: '20%', height: '100%'}}>
                <Image
                  source={IC_upload}
                  style={[
                    styles.imageStyle,
                    {backgroundColor: CUSTOM_COLOR.Denim},
                  ]}
                />
              </View>
            </View>
          </View>
        </>

        <>
        </>

        <>
          <View style={styles.loadingContainer} />
        </>

        <>
          <View style={styles.questionContainer} />
        </>
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
    height: 50,
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
    width: '80%',
    height: 350,
    marginHorizontal: '10%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  questionContainer: {
    width: '90%',
    height: 80,
    marginHorizontal: '5%',
    backgroundColor: 'red',
  },
  loadingContainer: {
    width: '90%',
    height: 30,
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    marginTop: 70,
  },
});
export default Home_Question;
