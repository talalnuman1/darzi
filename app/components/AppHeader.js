import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../config/constants';

const AppHeader = ({title, onPressBack}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressBack}>
        <Image source={require('../assets/icons/back.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{width: 24}} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: colors.black,
    textAlign: 'center',
  },
});

export default AppHeader;
