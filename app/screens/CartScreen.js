import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import CartCompotent from '../components/Cartcompoent';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../components/AppHeader';

const products = [
  {
    id: 1,
    title: "Men's shirt",
    image: require('../assets/images/side-woman.png'),
    price: 1000,
  },
  {
    id: 2,
    title: "Women's shirt",
    image: require('../assets/images/side-woman3.png'),
    price: 2500,
  },
  {
    id: 3,
    title: "Women's shirt",
    image: require('../assets/images/side-woman3.png'),
    price: 2500,
  },
  {
    id: 4,
    title: "Women's shirt",
    image: require('../assets/images/side-woman3.png'),
    price: 2500,
  },
  {
    id: 5,
    title: "Women's shirt",
    image: require('../assets/images/side-woman3.png'),
    price: 2500,
  },
  {
    id: 6,
    title: "Women's shirt",
    image: require('../assets/images/side-woman3.png'),
    price: 2500,
  },
];
export default function CartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppHeader title={'My Cart'} onPressBack={() => navigation.goBack()} />
      <FlatList
        style={{marginTop: hp(2), paddingHorizontal: wp(4)}}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <CartCompotent item={item} />}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          paddingHorizontal: wp(4),
          paddingVertical: hp(2),
        }}>
        <View style={styles.flexrowtotal}>
          <Text style={styles.totaltext}>Total Qty:</Text>
          <Text style={styles.totaltext}>03</Text>
        </View>
        <View style={styles.flexrowtotal}>
          <Text style={styles.totaltext}>Subtotal:</Text>
          <Text style={styles.totaltext}>9000</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.flexrowtotal}>
          <Text style={styles.totaltext}>Total:</Text>
          <Text style={styles.totaltext}>9000</Text>
        </View>
      </View>
      <View style={styles.addToCart}>
        <Text style={styles.price}>PKR:3000</Text>
        <TouchableOpacity
          style={styles.addToCartBtn}
          onPress={() => navigation.navigate('CheckOut')}>
          <Text style={styles.addToCartText}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: hp(2),
  },
  flexrowtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  line: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    marginTop: hp(1),
  },
  btncartbottom: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    borderRadius: 5,
    marginTop: hp(10),
  },
  btnwhite: {
    backgroundColor: colors.white,
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    borderRadius: 5,
  },
  text: {
    color: colors.black,
  },
  totaltext: {
    color: 'rgba(0, 0, 0, 0.65)',
    fontSize: hp(2.5),
    marginTop: hp(1),
  },
  addToCart: {
    // position: 'absolute',
    flexDirection: 'row',
    // bottom: -hp(12),
    width: '100%',
    height: hp(10),
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  addToCartBtn: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    // width: wp(10),
    borderRadius: wp(2),
    elevation: 2,
  },
  addToCartText: {
    color: colors.black,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    fontFamily: 'Poppins-SemiBold',
  },
  price: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});
