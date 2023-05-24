import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text, ScrollView} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import HeaderLogin from '../components/Headers/HeaderLogin.js';
import Content from '../components/Headers/Content.js';
import NavigateButton from '../components/Buttons/NavigateButton.js';

const Help = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderLogin onPress={() => navigation.goBack()} title="Help" />
      </View>

      <>
        <View style={styles.bodyContainer}>
          <ScrollView style={styles.textViewContainer}>
            <Text style={styles.textStyle}>
              Đây là một ứng dụng được xây dựng nhằm phục vụ cho đồ án môn học
              của chúng tôi và ứng dụng này sử dụng một model Visual Question
              Answer đơn giản và chủ yếu là nhưng câu hỏi và câu trả lời tập
              chung vào chủ đề màu sắc. Để sử dụng ứng dụng bạn chỉ cần tạo tài
              khoản với địa chỉ email và đăng nhập vào hệ thống để sử dụng. Bạn
              chỉ cần đưa một bức ảnh mà bạn muốn hỏi đáp và nhập câu hỏi và gửi
              lên, sau vài giây app sẽ đưa ra câu trả lời tương ứng với câu hỏi.
              Mọi thắc mắc hay đóng góp xin vui lòng liên hệ qua điện thoại hoặc
              tin nhắn 0379361210.
            </Text>
          </ScrollView>
        </View>
      </>

      <>
        <View style={styles.buttonContainer}>
          <NavigateButton text="I GOT IT" onPress={() => navigation.goBack()} />
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
  bodyContainer: {
    width: '90%',
    height: 410,
    marginLeft: '5%',
    marginTop: 20,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 10,
  },
  textViewContainer: {
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '7%',
    marginBottom: '7%',
  },
  textStyle: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: 20,
    color: CUSTOM_COLOR.Black,
  },
  buttonContainer: {
    width: '90%',
    height: 55,
    marginTop: 30,
    marginLeft: '5%',
  },
});
export default Help;
