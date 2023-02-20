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

export default function CartScreen() {
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
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          style={{marginTop: hp(2)}}
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({item}) => <CartCompotent item={item} />}
          keyExtractor={item => item.id}
        />
        <View>
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
        <View style={styles.btncartbottom}>
          <Text>PKR:3000</Text>
          <TouchableOpacity style={styles.btnwhite}>
            <Text style={styles.text}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
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
});
