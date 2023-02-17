import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import {colors} from '../config/constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CategoryBox from '../components/CategoryBox';
import ProductCard from '../components/ProductCard';

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
    id: 1,
    title: "Kid's shirt",
    price: 2000,
  },
];

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState(1); // set the initial selected tab to the first one
  const tabButtonStyle = id =>
    id === selectedTab ? styles.activeTabButton : styles.tabButton;
  const tabTextStyle = id =>
    id === selectedTab ? styles.activeTabText : styles.tabText;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/woman.png')} />
      <SearchBar />
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
      <View style={styles.sideImageContainer}>
        <View style={styles.sideImage}>
          <Image source={require('../assets/images/woman2.png')} />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categoires}
          renderItem={({item}) => (
            <CategoryBox title={item.title} image={item.image} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.products}>
        <ProductCard />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  activeTabText: {
    color: colors.white,
  },
  sideImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
    paddingHorizontal: wp(5),
    height: hp(35),
    width: '100%',
  },
  sideImage: {
    borderRadius: wp(5),
    paddingVertical: wp(5),
    width: wp(55),
    paddingHorizontal: wp(5),
    height: hp(35),
    backgroundColor: colors.white,
    marginRight: wp(6),
  },
  products: {
    marginTop: hp(4),
  },
});
