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
import Loader from '../components/Loader';
import {APP_API_URL} from '@env';

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
  const [selectedTab, setSelectedTab] = useState('All'); // set the initial selected tab to the first one
  const [category, setCategory] = useState(); // set the initial selected tab to the first one
  const [subCategory, setSubCategory] = useState(); // set the initial selected tab to the first one
  const [products, setProducts] = useState(); // set the initial selected tab to the first one
  const [subCategoryImage, setSubCategoryImage] = useState();
  const [categoryImage, setCategoryImage] = useState();
  const [subCategoryItem, setSubCategoryItem] = useState();
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [productLoading, setProductLoading] = useState(true);
  const tabButtonStyle = id =>
    id === selectedTab ? styles.activeTabButton : styles.tabButton;
  const tabTextStyle = id =>
    id === selectedTab ? styles.activeTabText : styles.tabText;

  // Fetch All the categories like Men, Kids and Women☕
  const fetchCategories = async () => {
    try {
      const response = await api.category.getCategories();
      setCategory(response);

      setCategoryImage(APP_API_URL + response[0].images[0]?.filename);
      console.log(response, 'Category');
      setCategoryLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch All subcategories
  const fetchSubCategories = async () => {
    try {
      setLoading(true);
      const response = await api.subCategory.getSubCategories();
      console.log(response, 'SubCategories');
      setSubCategory(response);
      setSubCategoryItem(response[0]);
      setSubCategoryImage(APP_API_URL + response[0].images[0]?.filename);
      fetchProducts(response[0].subcategory.id);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  // Fetches the sub categories by category id
  const fetchSubCategory = async id => {
    try {
      setLoading(true);

      // Fetch subcategories by category id if provided, otherwise get all subcategories
      const response = id
        ? await api.subCategory.getSubCategoryById(id)
        : await api.subCategory.getSubCategories();

      console.log(response, ' SubCategory By ID');

      setSubCategory(response);

      // Set the first item in the array as the default selected item
      setSubCategoryItem(response[0]);

      // Set the image of the selected item as the default image
      setSubCategoryImage(APP_API_URL + response[0]?.images[0]?.filename);

      // Fetch products based on selected subcategory id
      fetchProducts(response[0].subcategory.id);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchProducts = async id => {
    try {
      setProductLoading(true);
      const response = id
        ? await api.product.getProductsBySubCategoryId(id)
        : await api.product.getAllProducts();
      console.log(response, 'Products by SubCategoryID');
      setProducts(response);
      setProductLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onTabClick = id => {
    cancelPendingRequests();
    setSelectedTab(id);
    fetchSubCategory(id);
    const selectedCategory = category.find(
      category => category.category.id === id,
    );
    setCategoryImage(APP_API_URL + selectedCategory?.images[0]?.filename);
  };
  // Tab Button to get All Sub Categories
  const onAllClick = () => {
    cancelPendingRequests();
    setSelectedTab('All');
    fetchSubCategories();
  };
  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
    return () => {
      cancelPendingRequests();
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: hp(22), width: '100%'}}>
        {loading || categoryLoading ? (
          <Loader size={16} />
        ) : (
          <Image
            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
            source={{
              uri: `${categoryImage}`,
            }}
          />
        )}
      </View>
      <View style={{paddingHorizontal: wp(17)}}>
        <SearchBar />
      </View>
      {/* Tab Buttons */}
      {!categoryLoading && (
        <View style={styles.tabs}>
          <TouchableOpacity style={tabButtonStyle('All')} onPress={onAllClick}>
            <Text style={tabTextStyle('All')}>All</Text>
          </TouchableOpacity>
          {category.map(item => (
            <TouchableOpacity
              style={tabButtonStyle(item.category.id)}
              key={item.category.id}
              onPress={() => onTabClick(item.category.id)}>
              <Text style={tabTextStyle(item.id)}>{item.category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {loading ? (
        <Loader size={30} />
      ) : (
        <ScrollView>
          <View style={styles.sideImageContainer}>
            <View style={styles.sideImage}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Products', {
                    subCategoryId: subCategoryItem?.subcategory?.id,
                  })
                }
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  bottom: 0,
                  right: 10,
                }}>
                <Text style={[styles.tabText]}>
                  Click here to see more products
                </Text>
              </TouchableOpacity>
              <Image
                style={styles.sideImage}
                source={{uri: subCategoryImage}}
              />
            </View>
          </View>
          <ScrollView
            horizontal={true}
            style={{width: wp(95), paddingHorizontal: hp(1)}}>
            {subCategory.map((item, i) => (
              <CategoryBox
                item={item}
                fetchProducts={fetchProducts}
                setSubCategoryItem={setSubCategoryItem}
                setSubCategoryImage={setSubCategoryImage}
                key={i}
              />
            ))}
          </ScrollView>
          <View
            style={{
              alignItems: 'flex-end',
              marginTop: hp(1),
              paddingHorizontal: wp(5),
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Products', {
                  subCategoryId: subCategoryItem?.subcategory?.id,
                })
              }>
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>
          {productLoading ? (
            <></>
          ) : (
            <View style={styles.products}>
              {products.slice(0, 3).map(item => (
                <ProductCard item={item} />
              ))}
            </View>
          )}
        </ScrollView>
      )}
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
