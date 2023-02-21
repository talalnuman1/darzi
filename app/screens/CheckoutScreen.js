import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import CheckBox from '@react-native-community/checkbox';
export default function CheckOutScreen() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.blackview}>
        <View style={styles.textflexrow}>
          <Text style={styles.textcheckout}>Total Qty:</Text>
          <Text style={styles.textcheckout}>04</Text>
        </View>
        <View style={styles.textflexrow}>
          <Text style={styles.textcheckout}>Subtotal:</Text>
          <Text style={styles.textcheckout}>$400.10</Text>
        </View>
        <View style={styles.textflexrow}>
          <Text style={styles.textcheckout}>Total:</Text>
          <Text style={styles.textcheckout}>$400.10</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.flexcardrow}>
          <TouchableOpacity style={styles.greybox}>
            <Image source={require('../assets/images/image38.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.greybox}>
            <Image source={require('../assets/images/image39.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.greybox}>
            <Image source={require('../assets/images/image40.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.greybox}>
            <Image source={require('../assets/images/image41.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <Text style={styles.nametext}>Name on Card</Text>
          <View style={styles.textinputview}>
            <Image source={require('../assets/icons/user.png')} />
            <TextInput
              style={styles.input}
              keyboardType="text"
              placeholder="Ghias ALi"
              placeholderTextColor={colors.darkGrey}
            />
          </View>
          <Text style={styles.nametext}>Card Number</Text>
          <View style={styles.textinputview}>
            <Image source={require('../assets/icons/user.png')} />
            <TextInput
              style={styles.input}
              keyboardType="text"
              placeholder="Ghias ALi"
              placeholderTextColor={colors.darkGrey}
            />
          </View>
          <View style={styles.cvcflexrow}>
            <View>
              <Text style={styles.nametext}>Valid THRU</Text>
              <View style={styles.textinputview}>
                <Image source={require('../assets/icons/user.png')} />
                <TextInput
                  style={styles.input}
                  keyboardType="text"
                  placeholder="Ghias ALi"
                  placeholderTextColor={colors.darkGrey}
                />
              </View>
            </View>
            <View>
              <Text style={styles.nametext}>CVC/CVV2</Text>
              <View style={styles.textinputview}>
                <Image source={require('../assets/icons/user.png')} />
                <TextInput
                  style={styles.input}
                  keyboardType="text"
                  placeholder="Ghias ALi"
                  placeholderTextColor={colors.darkGrey}
                />
              </View>
            </View>
          </View>
          <View style={styles.checkboxflexrow}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              tintColors={{
                true: 'rgba(0, 0, 0, 0.7)',
                false: 'rgba(0, 0, 0, 0.7)',
              }}
            />
            <Text style={styles.savetext}>
              Save my details for future purchase
            </Text>
          </View>
          <TouchableOpacity style={styles.btnpaynow}>
            <Text style={styles.savetext}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackview: {
    backgroundColor: colors.black,
    paddingHorizontal: wp(4),
    paddingVertical: wp(5),
  },
  textflexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textcheckout: {
    fontSize: hp(2.5),
    color: colors.white,
    fontFamily: 'Poppins-Medium',
    margin: hp(2),
  },
  flexcardrow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  greybox: {
    backgroundColor: '#b5b5b5',
    width: wp(15),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: hp(5),
  },
  input: {
    borderColor: 'rgba(0, 0, 0, 0.25)',
    color: colors.black,
  },
  nametext: {
    color: colors.black,
    marginTop: hp(2),
  },
  textinputview: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    paddingHorizontal: hp(4),
    marginTop: hp(2),
  },
  cvcflexrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxflexrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
  },
  savetext: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'Poppins-Regular',
  },
  btnpaynow: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: hp(1),
    marginTop: hp(2),
    alignSelf: 'center',
    width: '50%',
    borderRadius: 6,
  },
});
