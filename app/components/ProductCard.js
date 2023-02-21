import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';

export default function ProductCard({item}) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          resizeMode: 'cover',
          borderTopLeftRadius: wp(2),
          borderTopRightRadius: wp(2),
        }}
        source={require('../assets/images/side-woman2.png')}
      />
      <View style={{padding: wp(1.5)}}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.bottom}>
          <Text style={styles.pirce}>Rs: {item.price}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: hp(20),
    width: wp(29),
    backgroundColor: colors.white,
    borderRadius: wp(2),
  },
  title: {
    color: colors.black,
    fontSize: hp(1.5),
    fontFamily: 'Poppins-Regular',
  },
  bottom: {
    marginTop: hp(0.6),
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
  pirce: {
    color: colors.darkGrey,
    fontFamily: 'Poppins-Regular',
  },
});
