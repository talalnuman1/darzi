import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';

export default function SearchBar() {
  return (
    <View>
      <View style={styles.input}>
        <Image
          style={styles.search}
          source={require('../assets/icons/search.png')}
        />
        <View
          style={{
            width: 2,
            height: '50%',
            backgroundColor: colors.black,
            opacity: 0.4,
          }}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={colors.darkGrey}
          style={styles.textInput}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  search: {
    marginHorizontal: wp(5),
    padding: 10,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(18),
    marginTop: -hp(3.2),
    borderRadius: wp(2.5),
    backgroundColor: 'white',
  },
  textInput: {
    paddingHorizontal: wp(4),
    fontSize: hp(2.3),
    borderRadius: wp(2.5),
    width: '100%',
    color: colors.darkGrey,
  },
});
