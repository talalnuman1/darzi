import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';

export default function ProductCard(title, image, price) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          borderTopLeftRadius: wp(5),
          borderTopRightRadius: wp(5),
        }}
        source={require('../assets/images/side-woman2.png')}
      />
      <View>
        <Text style={styles.title}>title</Text>
        <View style={styles.bottom}>
          <View
            style={{
              backgroundColor: colors.black,
              height: hp(2),
              width: wp(4),
            }}>
            <Image source={require('../assets/icons/shopping-cart.png')} />
          </View>
          <Text style={styles.pirce}>Rs: 2000</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: hp(20),
    width: wp(30),
    backgroundColor: colors.white,
    borderRadius: wp(5),
  },
  title: {
    color: colors.black,
    fontSize: hp(2),
  },
  bottom: {
    // marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  pirce: {
    color: colors.darkGrey,
  },
});
