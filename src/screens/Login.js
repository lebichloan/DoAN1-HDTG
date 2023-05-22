import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import HeaderLogin from '../components/Headers/HeaderLogin.js';
import HeaderWithBack from '../components/Headers/HeaderWithBack.js';

const Login = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: '15%'}}>
        <HeaderLogin onPress={() => navigation.navigate('SignUp')} 
        title="Forgot Password"/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login;
