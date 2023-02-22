import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../config/constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default function CustomSizeRow({item, onChange}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            numberOfLines={1}
            keyboardType="numeric"
            onChangeText={onChange}
          />
          <Text style={styles.text}>Inch</Text>
        </View>
      </View>
      <Image source={item.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: hp(2),
    color: colors.black,
  },
  inputRow: {
    marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: wp(35),
    backgroundColor: colors.white,
    borderRadius: wp(2),
    marginRight: wp(2),
    color: colors.black,
  },
});
