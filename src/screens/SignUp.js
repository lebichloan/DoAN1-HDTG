import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import HeaderLogin from '../components/Headers/HeaderLogin.js';
import TextInputCard from '../components/Cards/TextInputCard.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import Content from '../components/Headers/Content.js';
import {IC_nextIcon} from '../assets/icons/index.js';
import NavigateButton from '../components/Buttons/NavigateButton.js';

const SignUp = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderLogin onPress={() => navigation.goBack()} title="Sign Up" />
      </View>

      <>
        <View style={styles.inputContainer}>
          <View style={styles.inputCardContainer}>
            <TextInputCard title="Full name" txtInput="Nguyen Van A" />
          </View>
          <View style={{width: '90%', height: 20}} />
          <View style={styles.inputCardContainer}>
            <TextInputCard title="Email" txtInput="Please enter your email" />
          </View>
          <View style={{width: '90%', height: 20}} />
          <View style={styles.inputCardContainer}>
            <PasswordCard title="Password" txtInput="********" />
          </View>
          <View style={{width: '90%', height: 20}} />
          <View style={styles.inputCardContainer}>
            <PasswordCard title="Corfirm you password" txtInput="********" />
          </View>
        </View>
      </>

      <>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => navigation.navigate('Login')}>
          <View
            style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
            <Content content="Already have an account?" />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={IC_nextIcon}
              style={{width: '70%', height: '60%', resizeMode: 'stretch'}}
            />
          </View>
        </TouchableOpacity>
      </>

      <>
        <View style={styles.buttonContainer}>
          <NavigateButton
            text="SIGN UP"
            onPress={() => navigation.navigate('SignUp_Succeed')}
          />
        </View>
      </>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Anakiwa,
  },
  headerContainer: {
    width: '100%',
    height: 120,
  },
  inputContainer: {
    width: '100%',
    height: 400,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCardContainer: {
    width: '90%',
    height: 80,
  },
  textContainer: {
    width: '60%',
    height: 30,
    marginLeft: '35%',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '90%',
    height: 55,
    marginTop: 20,
    marginLeft: '5%',
  },
});
export default SignUp;
