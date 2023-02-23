import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import BigProductCard from '../components/BigProductCard';
import AppHeader from '../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {cancelPendingRequests} from '../api/axiosInstance';
import Loader from '../components/Loader';
import api from '../api';

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
    title: "Kid's shirt",
    image: require('../assets/images/side-woman2.png'),
    price: 2000,
  },
];
export default function ProductsScreen({route}) {
  const {subCategoryId} = route.params;
  const navigation = useNavigation();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState();

  const fetchProducts = async id => {
    try {
      setLoading(true);
      const response = await api.product.getProductsBySubCategoryId(id);
      console.log(response, 'Products by SubCategoryID');
      setProducts(response);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProducts(subCategoryId);
    return () => {
      cancelPendingRequests();
    };
  }, []);

  return (
    <SafeAreaView>
      <AppHeader title={'Products'} onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <SearchBar />

        {loading ? (
          <View style={{marginTop: hp(10)}}>
            <Loader />
          </View>
        ) : (
          <FlatList
            style={{marginTop: hp(4), marginBottom: hp(25)}}
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem={({item}) => <BigProductCard item={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {paddingHorizontal: wp(5), marginTop: hp(7)},
});
