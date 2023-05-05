import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import * as Progress from 'react-native-progress';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';

const Intro = props => {
const {navigation} = props;
const [status, setStatus] = useState('');
return (
    <SafeAreaView style={styles.container}>
        <Progress.Bar progress={0.3} width={200} />
    </SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
    flex: 1,
},
}); 
export default Intro;
