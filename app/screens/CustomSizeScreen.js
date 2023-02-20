import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import CustomSizeRow from '../components/CustomSizeRow';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import sizes from '../helpers/sizes.json';

export default function CustomSizeScreen() {
  const navigation = useNavigation();
  console.log(sizes);
  return (
    <SafeAreaView>
      <AppHeader
        title={'Custom Size'}
        onPressBack={() => navigation.goBack()}
      />
      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        data={sizes}
        renderItem={({item}) => <CustomSizeRow item={item} />}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: wp(4),
    paddingRight: wp(10),
    // paddingBottom: hp(10),
    marginBottom: hp(10),
  },
});
