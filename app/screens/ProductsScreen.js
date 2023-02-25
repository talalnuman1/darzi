import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import api from '../api';
import {cancelPendingRequests} from '../api/axiosInstance';
import {colors} from '../config/constants';
import SearchBar from '../components/SearchBar';
import AppHeader from '../components/AppHeader';
import BigProductCard from '../components/BigProductCard';
import Loader from '../components/Loader';

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
  const [results, setResults] = useState();
  const [loading, setLoading] = useState();

  const handleSearch = query => {
    setResults([]);
    const filteredResults = products.filter(item =>
      item?.design?.name.toLowerCase().includes(query.toLowerCase()),
    );
    setResults(filteredResults);
  };

  const fetchProducts = async id => {
    try {
      setLoading(true);
      const response = await api.product.getProductsBySubCategoryId(id);
      console.log(response, 'Products by SubCategoryID');
      setProducts(response);
      setResults(response);

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
        <SearchBar onSearch={handleSearch} />

        {loading ? (
          <View style={{marginTop: hp(10)}}>
            <Loader />
          </View>
        ) : results?.length <= 0 ? (
          <Text style={styles.text}>No Products Found</Text>
        ) : (
          <FlatList
            style={{marginTop: hp(4), marginBottom: hp(25)}}
            showsVerticalScrollIndicator={false}
            data={results}
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
  text: {
    textAlign: 'center',
    fontSize: hp(3),
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    marginTop: hp(7),
  },
});
