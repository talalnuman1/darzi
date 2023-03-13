import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import {useNavigation} from '@react-navigation/native';
import {APP_API_URL} from '@env';

export default function BigProductCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetails', {productId: item.design.id})
      }>
      <View style={styles.container}>
        <Image
          style={{
            width: '100%',
            height: hp(20),
            resizeMode: 'cover',
            borderTopLeftRadius: wp(3),
            borderTopRightRadius: wp(3),
          }}
          source={{uri: APP_API_URL + item?.images[0]?.filename}}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: hp(1),
            right: wp(4),
          }}
          onPress={() => console.log('Add to Wishlist')}>
          <Image source={require('../assets/icons/heart.png')} />
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>{item?.design?.name}</Text>
          <View style={styles.bottom}>
            <Text style={styles.pirce}>Rs: {item?.design?.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: wp(43),
    // height: hp(35),
    backgroundColor: colors.white,
    borderRadius: wp(3),
    marginVertical: wp(2),
    marginHorizontal: wp(1),
  },
  title: {
    color: colors.black,
    fontSize: hp(2),
    fontFamily: 'Poppins-Regular',
  },
  bottomContainer: {
    padding: wp(2),
  },
  bottom: {
    marginTop: hp(1.2),
    // position: 'absolute',
    // bottom: -70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pirce: {
    color: colors.darkGrey,
    fontFamily: 'Poppins-Regular',
  },
  logo: {
    width: 20,
    height: 20,
  },
});
