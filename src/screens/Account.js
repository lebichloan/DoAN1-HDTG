import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {IMG_Background, IMG_avata} from '../assets/images/index.js';
import HeaderWithBack from '../components/Headers/HeaderWithBack.js';
import InfoCard from '../components/Cards/InfoCard.js';

const Account = props => {
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
              title="Account"
            />
          </View>
        </>

        <View style={{width: '100%', height: 20}} />

        <>
          <View style={styles.infoContainer}>
            <View
              style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={IMG_avata}
                style={{
                  width: '80%',
                  height: '55%',
                  resizeMode: 'cover',
                  borderRadius: 50,
                }}
              />
            </View>
            <View
              style={{
                flex: 5,
                justifyContent: 'center',
              }}>
              <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>
                Username
              </Text>
              <View style={{width: '100%', height: 5}} />
              <Text style={styles.textStyle}>abc@gmail.com</Text>
            </View>
          </View>
        </>

        <View style={{width: '100%', height: 20}} />

        <>
          <View style={styles.infoCardContainer}>
            <View style={styles.cardContainer}>
              <InfoCard
                title="Your Profile"
                onPress={() => navigation.navigate('Profile')}
              />
            </View>
            <View style={{width: '100%', height: 20}} />

            <View style={styles.cardContainer}>
              <InfoCard
                title="Help"
                onPress={() => navigation.navigate('Help')}
              />
            </View>
            <View style={{width: '100%', height: 20}} />

            <View style={styles.cardContainer}>
              <InfoCard
                title="Log out"
                // onPress={() => navigation.navigate('Profile')}
              />
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
  headerContainer: {
    width: '100%',
    height: 60,
  },
  infoContainer: {
    width: '90%',
    height: 150,
    marginHorizontal: '5%',
    backgroundColor: CUSTOM_COLOR.Malibu,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textStyle: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 23,
    color: CUSTOM_COLOR.White,
  },
  infoCardContainer: {
    width: '100%',
    height: 350,
    // marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '90%',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Account;
