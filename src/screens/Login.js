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

const Login = props => {
  const {navigation} = props;
  // const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderLogin onPress={() => navigation.goBack()} title="Login" />
      </View>

      <>
        <View style={styles.inputContainer}>
          <View style={styles.inputCardContainer}>
            <TextInputCard title="Email" txtInput="Please enter your email" />
          </View>
          <View style={{width: '90%', height: 20}} />
          <View style={styles.inputCardContainer}>
            <PasswordCard title="Password" txtInput="********" />
          </View>
        </View>
      </>

      <>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => navigation.navigate('ForgotPassword_Email')}>
          <View
            style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Content content="Forgot password?" />
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
            text="LOGIN"
            onPress={() => navigation.navigate('Home_Question')}
          />
        </View>
      </>

      <>
        <View style={styles.textSignUpContainer}>
          <Content content="Don't you have an account? " />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textSignUpStyle}>Sign up</Text>
          </TouchableOpacity>
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
    height: 200,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCardContainer: {
    width: '90%',
    height: 80,
  },
  textContainer: {
    width: '45%',
    height: 30,
    marginLeft: '50%',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '90%',
    height: 55,
    marginTop: 40,
    marginLeft: '5%',
  },
  textSignUpContainer: {
    width: '90%',
    height: 30,
    marginLeft: '5%',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSignUpStyle: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 20,
    color: CUSTOM_COLOR.Black,
    fontWeight: 'bold',
  },
});
export default Login;
