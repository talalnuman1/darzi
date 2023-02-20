import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';

export default function CategoryBox({item, setCategory}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setCategory(item?.id);
      }}>
      <ImageBackground source={item.image} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    width: wp(27),
    height: hp(15),
    marginVertical: hp(0.7),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // height: hp(4),
    backgroundColor: colors.white,
    opacity: 0.7,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: hp(0.3),
  },
  title: {
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
});
