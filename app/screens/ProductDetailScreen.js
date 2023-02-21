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
import React, {useState} from 'react';
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
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from '../components/CarouselCardItem';

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
export default function ProductDetailScreen() {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?tree',
  ];
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const sizeButtonStyle = id =>
    id === selectedSize ? styles.sizeContainer : styles.acitveSizeContainer;
  const sizeTextStyle = id =>
    id === selectedSize ? styles.activeSize : styles.size;
  return (
    <SafeAreaView>
      <AppHeader
        title={'Black Shalwar'}
        onPressBack={() => navigation.goBack()}
        onHeartPress={() => console.log('Add to Wishlist')}
      />
      <View style={styles.container}>
        <View style={styles.centercar}>
          <Carousel
            layout="stack"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
          />
          <Pagination
            dotsLength={data.length}
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
          {/* <Image
            style={{height: hp(55), width: '100%'}}
            source={require('../assets/images/woman2.png')}
          /> */}
          {/* <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={images}
            scrollAnimationDuration={1000}
            onSnapToItem={index => console.log('current index:', index)}
            renderItem={({index}) => (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: 'center',
                }}>
                <ActivityIndicator size="small" />
                <Image
                  source={{
                    uri: `https://picsum.photos/800/600?t=${new Date().getTime()}`,
                  }}
                />
              </View>
            )}
          /> */}
        </View>
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
          <TouchableOpacity>
            <Text style={styles.mySize}>My Sizes</Text>
          </TouchableOpacity>
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
          onPress={() => setModalVisible(true)}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <SizeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
