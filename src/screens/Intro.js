import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import { IMG_Background } from '../assets/images/index.js';

const Intro = props => {
const {navigation} = props;
const [status, setStatus] = useState('');
return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={IMG_Background} resizeMode="cover" style={styles.image}>

        </ImageBackground>
    </SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
    flex: 1,
},
}); 
export default Intro;
