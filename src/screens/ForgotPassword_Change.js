import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import HeaderLogin from '../components/Headers/HeaderLogin.js';
import PasswordCard from '../components/Cards/PasswordCard.js';
import NavigateButton from '../components/Buttons/NavigateButton.js';

const ForgotPassword_Change = props => {
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
          <NavigateButton
            text="GO TO LOGIN"
            onPress={() => navigation.navigate('Login')}
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
    height: 200,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCardContainer: {
    width: '90%',
    height: 80,
  },
  buttonContainer: {
    width: '90%',
    height: 55,
    marginTop: 40,
    marginLeft: '5%',
  },
});
export default ForgotPassword_Change;
