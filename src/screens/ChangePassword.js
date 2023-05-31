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

const ChangePassword = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderLogin
          onPress={() => navigation.goBack()}
          title="Change password"
        />
      </View>

      <>
        <View style={styles.inputOldContainer}>
          <View style={styles.inputCardContainer}>
            <PasswordCard title="Enter your password" txtInput="********" />
          </View>
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
        </View>
      </>

      <>
        <View style={styles.inputContainer}>
          <View style={styles.inputCardContainer}>
            <PasswordCard title="Enter new password" txtInput="********" />
          </View>
          <View style={{width: '90%', height: 20}} />
          <View style={styles.inputCardContainer}>
            <PasswordCard
              title="Corfirm your new password"
              txtInput="********"
            />
          </View>
        </View>
      </>

      <>
        <View style={styles.buttonContainer}>
          <NavigateButton text="SAVE" onPress={() => navigation.goBack()} />
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
  inputOldContainer: {
    width: '100%',
    height: 130,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    height: 200,
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
    marginLeft: '45%',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '90%',
    height: 55,
    marginTop: 40,
    marginLeft: '5%',
  },
});
export default ChangePassword;
