import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import HeaderLogin from '../components/Headers/HeaderLogin.js';
import Content from '../components/Headers/Content.js';
import TextInputCard from '../components/Cards/TextInputCard.js';
import NavigateButton from '../components/Buttons/NavigateButton.js';

const ForgotPassword_Email = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderLogin
          onPress={() => navigation.goBack()}
          title="Forgot password"
        />
      </View>

      <>
        <View style={styles.inputContainer}>
          <Content content="Please enter your email to receive the link reset password" />
          <View style={{width: '100%', height: 20}} />
          <View style={styles.inputCardContainer}>
            <TextInputCard title="Email" txtInput="Please enter your email" />
          </View>
        </View>
      </>

      <>
        <View style={styles.buttonContainer}>
          <NavigateButton
            text="SEND EMAIL"
            onPress={() => navigation.navigate('ForgotPassword_Succeed')}
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
    width: '90%',
    height: 200,
    marginTop: 40,
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCardContainer: {
    width: '100%',
    height: 80,
  },
  buttonContainer: {
    width: '90%',
    height: 55,
    marginTop: 40,
    marginLeft: '5%',
  },
});
export default ForgotPassword_Email;
