import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {
  IMG_Background,
  IMG_avata,
  IMG_imageQuestion,
} from '../assets/images/index.js';
import {IC_camera, IC_upload, IC_send} from '../assets/icons/index.js';
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
              <View style={{width: '18%', height: '100%'}}>
                <Image
                  source={IC_camera}
                  style={[
                    styles.imageStyle,
                    {backgroundColor: CUSTOM_COLOR.Denim},
                  ]}
                />
              </View>
              <View style={{width: '5%', height: '100%'}} />
              <View style={{width: '18%', height: '100%'}}>
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

        <View style={{width: '100%', height: 10}} />

        <>
          <View style={styles.questionContainer}>
            <View style={{justifyContent: 'center', marginLeft: '3%'}}>
              <Text style={styles.textinputStyle}>Answer</Text>
            </View>
          </View>
        </>

        <View style={{width: '100%', height: 5}} />

        <>
          <View style={styles.loadingContainer} />
        </>

        <View style={{width: '100%', height: 5}} />

        <>
          <View style={styles.questionContainer}>
            <View style={{flex: 7, justifyContent: 'center', marginLeft: '3%'}}>
              <TextInput
                style={styles.textinputStyle}
                placeholder="Enter the question"
              />
            </View>
            <View
              style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                // onPress={this.props.onPress}
              >
                <Image source={IC_send} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          </View>
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
  loadingContainer: {
    width: '90%',
    height: 30,
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  questionContainer: {
    width: '90%',
    height: 70,
    marginHorizontal: '5%',
    backgroundColor: CUSTOM_COLOR.White,
    flexDirection: 'row',
    borderRadius: 5,
  },
  textinputStyle: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
  },
  button: {
    width: '70%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
});
export default Home_Question;
