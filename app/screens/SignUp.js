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

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.cricle} />
      <View>
        <SafeAreaView style={styles.subcontiner}>
          <View>
            <Text style={styles.textsignup}>Signup</Text>
            <Text style={styles.textformtext}>Username</Text>
            <TextInput style={styles.input} keyboardType="text" />
            <Text style={styles.textformtext}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
            <Text style={styles.textformtext}>Password</Text>
            <TextInput style={styles.input} keyboardType="visible-password" />
            <Text style={styles.textformtext}>Password</Text>
            <TextInput style={styles.input} keyboardType="visible-password" />
            <TouchableOpacity style={styles.btnsignup}>
              <Text>Signup</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={styles.cricle2} />
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
    borderLeftWidth: wp(55),
    borderTopWidth: hp(32),
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    backgroundColor: 'black',
    borderRadius: wp(53),
    transform: [{scaleX: 3}, {skewX: '-5deg'}, {translateX: -25}],
  },
  input: {
    height: hp(6),
    width: wp(55),
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    margin: hp(1),
    borderRadius: wp(3),
  },
  subcontiner: {
    backgroundColor: colors.white,
    padding: hp(4),
    borderRadius: 8,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: hp(-14),
    elevation: 5,
  },
  btnsignup: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    elevation: 5,
    marginTop: hp(5),
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
  },
  cricle2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: wp(100),
    height: hp(12),
    backgroundColor: colors.black,
    borderTopLeftRadius: wp(50),
    marginBottom: hp(-11),
    zIndex: -1,
    // borderStyle: 'solid',
    // borderLeftWidth: wp(55),
    // borderTopWidth: hp(32),
    // borderRightColor: 'transparent',
    // borderTopColor: 'black',
    // backgroundColor: 'black',
    // borderRadius: wp(53),
    // transform: [
    //   {scaleX: 1},
    //   {skewX: '5deg'},
    //   {translateX: -5},
    //   {translateY: 5},
    // ],
  },
});
