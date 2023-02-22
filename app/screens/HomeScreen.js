import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';
import {colors} from '../config/constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CategoryBox from '../components/CategoryBox';
import ProductCard from '../components/ProductCard';
import {getAllCategories} from '../api/functions';
import {useNavigation} from '@react-navigation/native';
import api from '../api';
import {cancelPendingRequests} from '../api/axiosInstance';
const tabButtons = [
  {
    id: 1,
    title: 'All',
  },
  {id: 2, title: 'Men'},
  {id: 3, title: 'Women'},
  {id: 4, title: 'Kids'},
];

const categoires = [
  {id: 1, title: 'Shalwar', image: require('../assets/images/side-woman.png')},
  {
    id: 2,
    title: 'Pent Coat',
    image: require('../assets/images/side-woman2.png'),
  },
  {id: 3, title: 'Kameez', image: require('../assets/images/side-woman3.png')},
  {id: 4, title: 'Coat', image: require('../assets/images/side-woman3.png')},
];
const products = [
  {
    id: 1,
    title: "Men's shirt",
    price: 1000,
  },
  {
    id: 2,
    title: "Women's shirt",
    price: 2500,
  },
  {
    id: 3,
    title: "Kid's shirt",
    price: 2000,
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(1); // set the initial selected tab to the first one
  const [category, setCategory] = useState(); // set the initial selected tab to the first one
  const tabButtonStyle = id =>
    id === selectedTab ? styles.activeTabButton : styles.tabButton;
  const tabTextStyle = id =>
    id === selectedTab ? styles.activeTabText : styles.tabText;
  // const getCategories = async () => {
  //   try {
  //     // const categoires = await getAllCategories();
  //     const categoires = await axios.get(
  //       'https://darzi.testweb.com.pk/api/categorylist',
  //     );
  //     console.log(categoires, 'CATEGORIES');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getCategories = async () => {
  //   categories('categorylist', {
  //     method: 'Get',
  //   })
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err));
  // };
  // useEffect(() => {
  //   getCategories();
  // }, []);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.category.getCategories();
        console.log(response, 'THIS IS DATA');
        // setCategory(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategories();
    return () => {
      cancelPendingRequests();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/woman.png')} />
      <View style={{paddingHorizontal: wp(17)}}>
        <SearchBar />
      </View>
      {/* Tab Buttons */}
      <View style={styles.tabs}>
        {tabButtons.map(item => (
          <TouchableOpacity
            style={tabButtonStyle(item.id)}
            key={item.id}
            onPress={() => setSelectedTab(item.id)}>
            <Text style={tabTextStyle(item.id)}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>
        <View style={styles.sideImageContainer}>
          <View style={styles.sideImage}>
            <Image
              style={styles.sideImage}
              source={
                category
                  ? categoires[category - 1]?.image
                  : require('../assets/images/woman2.png')
              }
            />
          </View>
        </View>
        <ScrollView
          horizontal={true}
          style={{width: wp(95), paddingHorizontal: hp(1)}}>
          {categoires.map((item, i) => (
            <CategoryBox item={item} setCategory={setCategory} key={i} />
          ))}
        </ScrollView>
        <View
          style={{
            alignItems: 'flex-end',
            marginTop: hp(1),
            paddingHorizontal: wp(5),
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Products')}>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.products}>
          {products.map(item => (
            <ProductCard item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: hp(90),
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    // justifyContent: 'space-around',
    alignItems: 'center',
    width: '92%',
    height: hp(4),
    borderRadius: wp(5),
    marginTop: hp(2.5),
  },
  activeTabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    height: '100%',
    width: '25%',
    borderRadius: wp(5),
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '25%',
    borderRadius: wp(5),
  },
  tabText: {
    color: colors.darkGrey,
    fontFamily: 'Poppins-Regular',
  },
  activeTabText: {
    color: colors.white,
    fontFamily: 'Poppins-Regular',
  },
  sideImageContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
    paddingHorizontal: wp(5),
    height: hp(35),
    // width: '100%',
  },
  sideImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: wp(3),
    width: '100%',
    height: hp(35),
    backgroundColor: colors.white,
  },
  products: {
    width: '100%',
    marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  seeMore: {
    color: colors.darkGrey,
    fontFamily: 'Poppins-Bold',
  },
});
