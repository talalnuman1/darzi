import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import {useNavigation} from '@react-navigation/native';
import api from '../api';
export default function SignUp() {
  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    c_password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    c_password: '',
  });
  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    password: useRef(null),
    c_password: useRef(null),
  };

  const handleNext = field => {
    inputRefs[field].current?.focus();
  };

  const handleInputChange = (key, value) => {
    console.log(value);
    setInputValues({...inputValues, [key]: value});
    if (key === 'email') {
      // Check if email is valid
      const emailRegex = /\S+@\S+\.\S+/;
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? '' : 'Please enter a valid email',
      });
    } else if (key === 'password') {
      // Check if password is at least 8 characters long
      setErrors({
        ...errors,
        password:
          value.length >= 8
            ? ''
            : 'Password must be at least 8 characters long',
        c_password:
          value === inputValues.c_password ? '' : 'Passwords do not match',
      });
    } else if (key === 'c_password') {
      // Check if passwords match
      setErrors({
        ...errors,
        c_password:
          value === inputValues.password ? '' : 'Passwords do not match',
      });
    }
  };

  const userRegister = async data => {
    try {
      const response = await api.auth.userRegister(data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = () => {
    Keyboard.dismiss();
    // Check if all fields are valid
    if (
      errors.email === '' &&
      errors.password === '' &&
      errors.c_password === '' &&
      inputValues.email.length > 0 &&
      inputValues.password.length > 0 &&
      inputValues.c_password.length > 0
    ) {
      // Submit form
      console.log(inputValues);
      userRegister(inputValues);
      console.log('Form submitted');
    } else {
      console.log(errors);
      console.log('Form has errors');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cricle} />
      <View style={styles.left}>
        <TouchableOpacity style={styles.btnsignupblack}>
          <Text style={styles.whitetext}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnsignupwhite}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.blacktext}>Login</Text>
        </TouchableOpacity>

        <View style={styles.talkBubbleTriangle} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* <ScrollView> */}
        <SafeAreaView style={styles.subcontiner}>
          <View>
            <Text style={styles.textsignup}>Signup</Text>
            <View style={styles.flexrow}>
              <Text style={styles.textformtext}>Name</Text>
              <Image
                source={require('../assets/icons/user.png')}
                style={styles.iconstyle}
              />
            </View>
            <TextInput
              style={styles.input}
              keyboardType="text"
              value={inputValues.name}
              onChangeText={value => handleInputChange('name', value)}
              returnKeyType="next"
              onSubmitEditing={() => handleNext('email')}
              ref={inputRefs.name}
            />
            <View style={styles.flexrow}>
              <Text style={styles.textformtext}>Email</Text>
              <Image
                source={require('../assets/icons/email.png')}
                style={styles.iconstyle}
              />
            </View>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              value={inputValues.email}
              onChangeText={value => handleInputChange('email', value)}
              returnKeyType="next"
              onSubmitEditing={() => handleNext('password')}
              ref={inputRefs.email}
            />
            <View style={styles.flexrow}>
              <Text style={styles.textformtext}>Password</Text>
              <Image
                source={require('../assets/icons/lock.png')}
                style={styles.iconstyle}
              />
            </View>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={inputValues.password}
              onChangeText={value => handleInputChange('password', value)}
              returnKeyType="next"
              onSubmitEditing={() => handleNext('c_password')}
              ref={inputRefs.password}
            />
            <View style={styles.flexrow}>
              <Text style={styles.textformtext}>Confrim Password</Text>
              <Image
                source={require('../assets/icons/lock.png')}
                style={styles.iconstyle}
              />
            </View>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={inputValues.c_password}
              onChangeText={value => handleInputChange('c_password', value)}
              returnKeyType="done"
              onSubmitEditing={handleSubmit}
              ref={inputRefs.c_password}
            />
            <TouchableOpacity
              style={styles.btnsignup}
              onPress={() => {
                handleSubmit();
              }}>
              <Text style={styles.signtext}>Signup</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
      <View style={styles.cricle2} />
      <View style={styles.littleleft}>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Image
            style={styles.topmargin}
            source={require('../assets/images/image2.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.topmargin}
          source={require('../assets/images/image3.png')}
        />
        <Image
          style={styles.topmargin}
          source={require('../assets/images/image4.png')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  cricle: {
    top: hp(5),
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: wp(56),
    borderTopWidth: hp(32),
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    backgroundColor: 'black',
    borderRadius: wp(55),
    transform: [{scaleX: 3}, {skewX: '50deg'}, {translateX: -20}],
    // width: wp(100),
    // height: hp(60),
    // borderRadius: 50,
    // backgroundColor: 'black',
    // transform: [{scaleX: 2}],
  },
  input: {
    height: hp(6),
    width: wp(60),
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    margin: hp(1),
    borderRadius: wp(2),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    // marginBottom: hp(2),
    // marginTop: hp(1),
  },
  subcontiner: {
    backgroundColor: colors.white,
    height: hp(64),
    paddingVertical: hp(4),
    paddingHorizontal: wp(2),
    borderRadius: 8,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: hp(-5),
    elevation: 5,
  },
  btnsignup: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    elevation: 8,
    marginTop: hp(3),
    width: wp(50),
    alignSelf: 'center',
  },
  btnsignupblack: {
    backgroundColor: colors.black,
    borderTopRightRadius: wp(2),
    borderBottomRightRadius: wp(2),
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
  },
  btnsignupwhite: {
    backgroundColor: colors.white,
    borderTopRightRadius: wp(2),
    borderBottomRightRadius: wp(2),
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
  },
  textsignup: {
    fontSize: hp(4),
    color: colors.black,
    marginBottom: hp(2),
    fontFamily: 'Poppins-SemiBold',
  },
  textformtext: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontSize: hp(2),
    fontFamily: 'Poppins-SemiBold',
    marginLeft: wp(2),
  },
  cricle2: {
    position: 'absolute',
    bottom: 0,
    // right: 0,
    width: wp(100),
    height: hp(25),
    backgroundColor: colors.black,
    borderTopLeftRadius: wp(53),
    // marginBottom: hp(-17),
    zIndex: -1,
    transform: [{scaleX: 2}, {skewX: '25deg'}, {translateX: 100}],
  },
  flexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconstyle: {
    marginRight: wp(2),
  },
  signtext: {
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  left: {
    position: 'absolute',
    zIndex: 1,
    // left: 0,
    top: hp(30),
  },
  whitetext: {
    color: 'rgba(255, 255, 255, 0.78)',
    fontFamily: 'Poppins-Medium',
  },
  blacktext: {
    color: colors.black,
    fontFamily: 'Poppins-Medium',
  },
  littleleft: {
    width: '20%',
    // position: 'absolute',
    bottom: hp(30),
    alignItems: 'center',
    // left: wp(5),
    // marginTop: hp(15),
    // marginLeft: wp(5),
  },
  topmargin: {
    marginTop: hp(3),
  },

  talkBubbleTriangle: {
    position: 'absolute',
    left: wp(25),
    // top: hp(10),
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 20,
    borderRightWidth: 26,
    borderRightColor: colors.white,
    borderBottomWidth: 20,
    borderBottomColor: 'transparent',
    zIndex: 1,
  },
});
