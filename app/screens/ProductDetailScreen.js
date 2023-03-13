import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppHeader from '../components/AppHeader';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';
import {useNavigation} from '@react-navigation/native';
import SizeModal from '../components/SizeModal';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useDispatch} from 'react-redux';
import {addItem} from '../redux/cart';
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from '../components/CarouselCardItem';
import MySizeModal from '../components/mysizemodel';
import {cancelPendingRequests} from '../api/axiosInstance';
import api from '../api';
import Loader from '../components/Loader';
import Star from '../assets/Star';

const sizes = [
  {id: 1, title: 'S'},
  {id: 2, title: 'M'},
  {id: 3, title: 'L'},
  {id: 4, title: 'XL'},
];
const data = [
  {
    imgUrl:
      'https://www.pngkey.com/png/detail/367-3671144_men-kurta-kameez-kurta-pajama-new-design.png',
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0347/0904/5292/files/31_720x_4f606baf-210e-45c8-931e-0319a6d8aa53_480x480.png?v=1618309861',
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/1092/8998/products/WC-262.png?v=1526521237',
  },
];
export default function ProductDetailScreen({route}) {
  const dispatch = useDispatch();
  const {productId} = route.params;
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  const width = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState();
  const [product, setProduct] = useState();

  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  const [formValues, setFormValues] = useState({
    collarType: '',
    frontPocket: '',
    sidePocket: '',
    stichType: '',
    tailType: '',
    shalwarPocket: false,
    note: '',
  });
  const handleSubmit = () => {
    // Check if all fields are valid
    // if (errors.name === '' && inputValues.name.length > 0) {
    // Submit form
    console.log({
      size: 'xl',
      id: product?.design?.id,
      title: product?.design?.name,
      price: product?.design?.price,
      totalPrice: product?.design?.price,
      ...formValues,
    });
    dispatch(
      addItem({
        size: 'xl',
        id: product?.design?.id,
        title: product?.design?.name,
        price: product?.design?.price,
        totalPrice: product?.design?.price,
        ...formValues,
      }),
    );
    console.log('Form submitted');
    console.log(formValues);
    setModalVisible(!modalVisible);
    navigation.navigate('Cart');
    // } else {
    // console.log(errors);
    // console.log('Form has errors');
    // }
  };
  const getDetailById = async id => {
    try {
      const response = await api.product.getProductById(id);
      console.log(response);
      setProduct(response[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const sizeButtonStyle = id =>
    id === selectedSize ? styles.sizeContainer : styles.acitveSizeContainer;
  const sizeTextStyle = id =>
    id === selectedSize ? styles.activeSize : styles.size;

  useEffect(() => {
    productId && getDetailById(productId);
    return () => {
      cancelPendingRequests();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <View style={styles.loading}>
          <Loader />
        </View>
      ) : (
        <>
          <AppHeader
            title={product?.design?.name}
            onPressBack={() => navigation.goBack()}
            onHeartPress={() => console.log('Add to Wishlist')}
          />

          <View style={styles.container}>
            <View style={styles.centercar}>
              <Carousel
                layout="stack"
                layoutCardOffset={9}
                ref={isCarousel}
                data={product.images.map(item => item.filename)}
                onSnapToItem={index => setIndex(index)}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
              />
              <Pagination
                dotsLength={1}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.92)',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
              />
            </View>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{product?.design?.name}</Text>
              <View style={styles.ratingContainer}>
                <Star />
                <Text style={styles.rating}>(4.5)</Text>
              </View>
            </View>
            <Text style={styles.description}>
              {product?.design?.description}
            </Text>
          </View>
          <View style={styles.sizeRow}>
            <Text style={styles.size}>Size:</Text>
            {sizes.map((size, i) => (
              <TouchableOpacity
                style={sizeButtonStyle(size.id)}
                onPress={() => setSelectedSize(size.id)}>
                <Text style={sizeTextStyle(size.id)}>{size.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setModalVisibleTwo(true)}>
              <Text style={styles.mySize}>My Sizes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addSize}
              onPress={() => navigation.navigate('CustomSize')}>
              <Text style={styles.size}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addToCart}>
            <Text style={styles.price}>PKR:{product.design.price}</Text>
            <TouchableOpacity
              style={styles.addToCartBtn}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <SizeModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            formValues={formValues}
            setFormValues={setFormValues}
            handleSubmit={handleSubmit}
          />
          <MySizeModal
            modalVisible={modalVisibleTwo}
            setModalVisible={setModalVisibleTwo}
          />
        </>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
  },
  centercar: {
    justifyContent: 'center',
    alignItems: 'center',
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
    position: 'absolute',
    bottom: hp(12),
    paddingHorizontal: wp(5),
    width: '100%',
    marginTop: hp(2),
  },
  size: {
    fontSize: 15,
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
    fontSize: 15,
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
    bottom: 0,
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
  loading: {marginTop: hp(20)},
});
