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

export default function CategoryBox({title, image}) {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
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
    height: hp(5),
    backgroundColor: colors.white,
    opacity: 0.7,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  title: {
    color: colors.black,
  },
});
