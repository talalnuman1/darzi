import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import CustomSizeRow from '../components/CustomSizeRow';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import sizes from '../helpers/sizes.js';
import {colors} from '../config/constants';

export default function CustomSizeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <AppHeader
        title={'Custom Size'}
        onPressBack={() => navigation.goBack()}
      />
      {/* <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        data={sizes}
        renderItem={({item}) => <CustomSizeRow item={item} />}
        keyExtractor={item => item.title}
      /> */}
      <ScrollView style={styles.container}>
        {sizes.map(item => (
          <CustomSizeRow item={item} />
        ))}

        <TouchableOpacity
          style={[styles.saveButton]}
          onPress={() => {
            //   setModalVisible(!modalVisible);
            navigation.goBack();
          }}>
          <Text style={[styles.modalText, styles.textStyle]}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: wp(4),
    paddingRight: wp(10),
    marginBottom: hp(10),
    height: hp(90),
  },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 6,
    paddingVertical: hp(1),
    marginVertical: hp(1),
    marginBottom: hp(5),
    width: '60%',
    elevation: 5,
    backgroundColor: colors.white,
  },
  textStyle: {fontSize: 16},
  modalText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
});
