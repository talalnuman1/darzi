import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
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
  const [inputValues, setInputValues] = useState({
    name: '',
    shirtLength: '',
    armLength: '',
    shoulderLength: '',
    markShoulder: '',
    neck: '',
    chest: '',
    waist: '',
    shalwarLength: '',
    paincha: '',
    cuff: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    shirtLength: '',
    armLength: '',
    shoulderLength: '',
    markShoulder: '',
    neck: '',
    chest: '',
    waist: '',
    shalwarLength: '',
    paincha: '',
    cuff: '',
  });
  const handleInputChange = (key, value) => {
    console.log(value);
    setInputValues({...inputValues, [key]: value});
  };
  const handleSubmit = () => {
    // Check if all fields are valid
    if (errors.name === '' && inputValues.name.length > 0) {
      // Submit form
      console.log('Form submitted');
      console.log(inputValues);
      // navigation.navigate('Home');
    } else {
      console.log(errors);
      console.log('Form has errors');
    }
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <AppHeader
        title={'Custom Size'}
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={styles.flexrwoname}>
          <Text style={styles.modalText2}>Name:</Text>
          <TextInput
            style={styles.input}
            numberOfLines={1}
            keyboardType="text"
            onChangeText={value => handleInputChange('name', value)}
          />
        </View>
        {sizes.map(item => (
          <CustomSizeRow
            item={item}
            onChange={value => handleInputChange(item.name, value)}
          />
        ))}

        <TouchableOpacity
          style={[styles.saveButton]}
          // onPress={() => {
          //     setModalVisible(!modalVisible);
          //   navigation.goBack();
          // }}
          onPress={() => handleSubmit()}>
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
  modalText2: {
    fontSize: hp(2),
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
  },
  input: {
    width: wp(50),
    backgroundColor: colors.white,
    borderRadius: wp(2),
    color: colors.black,
    elevation: 5,
  },
  flexrwoname: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
