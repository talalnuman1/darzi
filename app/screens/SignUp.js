import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import {useNavigation} from '@react-navigation/native';
export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cricle} />
      <View>
        <View style={styles.left}>
          <TouchableOpacity style={styles.btnsignupblack}>
            <Text style={styles.whitetext}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnsignupwhite}>
            <Text style={styles.blacktext}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.talkBubbleTriangle} />
        <SafeAreaView style={styles.subcontiner}>
          <View>
            <Text style={styles.textsignup}>Signup</Text>
            <View style={styles.flexrow}>
              <Text style={styles.textformtext}>Username</Text>
              <Image
                source={require('../assets/icons/user.png')}
                style={styles.iconstyle}
              />
            </View>
            <TextInput style={styles.input} keyboardType="text" />
            <View style={styles.flexrow}>
              <Text style={styles.textformtext}>Email</Text>
              <Image
                source={require('../assets/icons/email.png')}
                style={styles.iconstyle}
              />
            </View>
            <TextInput style={styles.input} keyboardType="email-address" />
            <View style={styles.flexrow}>
              <Text style={styles.textformtext}>Password</Text>
              <Image
                source={require('../assets/icons/lock.png')}
                style={styles.iconstyle}
              />
            </View>
            <TextInput style={styles.input} keyboardType="visible-password" />
            <View style={styles.flexrow}>
              <Text style={styles.textformtext}>Confrim Password</Text>
              <Image
                source={require('../assets/icons/lock.png')}
                style={styles.iconstyle}
              />
            </View>
            <TextInput style={styles.input} keyboardType="visible-password" />
            <TouchableOpacity
              style={styles.btnsignup}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signtext}>Signup</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={styles.cricle2} />
        <View style={styles.littleleft}>
          <Image
            style={styles.topmargin}
            source={require('../assets/images/image2.png')}
          />
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cricle: {
    // position: 'absolute',
    top: 0,
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
    width: wp(48),
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    margin: hp(1),
    borderRadius: wp(2),
    marginBottom: hp(2),
    marginTop: hp(1),
  },
  subcontiner: {
    backgroundColor: colors.white,
    height: hp(64),
    padding: hp(4),
    borderRadius: 8,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: hp(-12),
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
    fontWeight: '600',
  },
  textformtext: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontSize: hp(2),
    fontWeight: '600',
    marginLeft: wp(2),
  },
  cricle2: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: wp(100),
    height: hp(25),
    backgroundColor: colors.black,
    borderTopLeftRadius: wp(53),
    marginBottom: hp(-17),
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
    fontWeight: '400',
  },
  left: {
    position: 'absolute',
    left: 0,
    marginTop: hp(2),
  },
  whitetext: {
    color: 'rgba(255, 255, 255, 0.78)',
    fontWeight: '500',
  },
  blacktext: {
    color: colors.black,
    fontWeight: '500',
  },
  littleleft: {
    position: 'absolute',
    marginTop: hp(15),
    marginLeft: wp(5),
  },
  topmargin: {
    marginTop: hp(3),
  },

  talkBubbleTriangle: {
    position: 'absolute',
    left: wp(25),
    top: 10,
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