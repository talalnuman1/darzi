import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import {APP_API_URL} from '@env';
import {useNavigation} from '@react-navigation/native';

export default function ProductCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('ProductDetails');
      }}>
      <Image
        style={{
          resizeMode: 'cover',
          height: '65%',
          borderTopLeftRadius: wp(2),
          borderTopRightRadius: wp(2),
        }}
        source={{uri: `${APP_API_URL}${item.images[0].filename}`}}
      />
      <View style={{padding: wp(1.5)}}>
        <Text style={styles.title}>{item.design.name}</Text>
        <View style={styles.bottom}>
          <Text style={styles.pirce}>Rs: {item.design.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
