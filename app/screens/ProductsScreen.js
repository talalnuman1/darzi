import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import BigProductCard from '../components/BigProductCard';
import AppHeader from '../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';

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
export default function ProductsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <AppHeader title={'Products'} onPressBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <SearchBar />

        <FlatList
          style={{marginTop: hp(4)}}
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({item}) => <BigProductCard item={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {paddingHorizontal: wp(5), marginTop: hp(7)},
});
