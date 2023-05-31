import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import HeaderWithBack from '../components/Headers/HeaderWithBack.js';
import {IMG_Background} from '../assets/images/index.js';
import {IC_Search} from '../assets/icons/index.js';

const History = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMG_Background}
        resizeMode="cover"
        style={styles.container}>
        <>
          <View style={styles.headerContainer}>
            <HeaderWithBack
              onPress={() => navigation.goBack()}
              title="History"
            />
          </View>
        </>

        <View style={{width: '100%', height: 15}} />

        <>
          <View style={styles.searchContainer}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={IC_Search}
                style={{
                  width: '40%',
                  height: '40%',
                  resizeMode: 'cover',
                  borderRadius: 50,
                }}
              />
            </View>
            <View style={{flex: 6}}>
              <TextInput style={styles.textinputStyle} placeholder="Search" />
            </View>
          </View>
        </>

        <View style={{width: '100%', height: 15}} />

        <></>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: 60,
  },
  searchContainer: {
    width: '90%',
    height: 50,
    marginHorizontal: '5%',
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 50,
    flexDirection: 'row',
  },
  textinputStyle: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
  },
});
export default History;
