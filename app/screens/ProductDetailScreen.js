import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../components/AppHeader';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import {useNavigation} from '@react-navigation/native';

const sizes = [
  {id: 1, title: 'S'},
  {id: 2, title: 'M'},
  {id: 3, title: 'L'},
  {id: 4, title: 'XL'},
];
export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState();
  const sizeButtonStyle = id =>
    id === selectedSize ? styles.sizeContainer : styles.acitveSizeContainer;
  const sizeTextStyle = id =>
    id === selectedSize ? styles.activeSize : styles.size;
  return (
    <SafeAreaView>
      <AppHeader
        title={'Black Shalwar'}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Image
          style={{height: hp(55), width: '100%'}}
          source={require('../assets/images/woman.png')}
        />
        <View style={styles.titleRow}>
          <Text style={styles.title}>Lorem Ipsum</Text>
          <View style={styles.ratingContainer}>
            <Image source={require('../assets/icons/star.png')} />
            <Text style={styles.rating}>(4.5)</Text>
          </View>
        </View>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>
        <View style={styles.sizeRow}>
          <Text style={styles.size}>Size:</Text>
          {sizes.map((size, i) => (
            <TouchableOpacity
              style={sizeButtonStyle(size.id)}
              onPress={() => setSelectedSize(size.id)}>
              <Text style={sizeTextStyle(size.id)}>{size.title}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.mySize}>My Size</Text>
          <TouchableOpacity
            style={styles.addSize}
            onPress={() => navigation.navigate('CustomSize')}>
            <Text style={styles.size}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addToCart}>
        <Text style={styles.price}>PKR:3000</Text>
        <TouchableOpacity
          style={styles.addToCartBtn}
          onPress={() => console.log('Add to Cart')}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: hp(2.8),
    fontFamily: 'Poppins-Bold',
    color: colors.black,
    width: '80%',
  },
  rating: {
    fontSize: 12,
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
  description: {
    width: '95%',
    fontSize: 12,
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
  sizeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  size: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
  activeSize: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Poppins-Regular',
  },
  sizeContainer: {
    backgroundColor: colors.black,
    borderRadius: wp(10),
    height: hp(3),
    width: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  acitveSizeContainer: {
    borderRadius: wp(10),
    height: hp(3),
    width: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mySize: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
  },
  addSize: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(10),
    borderRadius: wp(2),
    elevation: 2,
  },
  addToCart: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: -hp(12),
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
