import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import {useNavigation} from '@react-navigation/native';

export default function BigProductCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
      <View style={styles.container}>
        <Image
          style={{
            width: '100%',
            height: '60%',
            resizeMode: 'cover',
            borderTopLeftRadius: wp(3),
            borderTopRightRadius: wp(3),
          }}
          source={item.image}
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>Lorem Ipsum is simply dummy text</Text>
          <View style={styles.bottom}>
            <TouchableOpacity onPress={() => console.log('Added to Cart')}>
              <Image
                style={styles.logo}
                source={require('../assets/icons/shopping-cart.png')}
              />
            </TouchableOpacity>
            <Text style={styles.pirce}>Rs: {item?.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: wp(43),
    height: hp(35),
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
    justifyContent: 'space-between',
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
