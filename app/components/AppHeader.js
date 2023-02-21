import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../config/constants';

const AppHeader = ({title, onPressBack, onHeartPress}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressBack}>
        <Image source={require('../assets/icons/back.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {onHeartPress && (
        <TouchableOpacity
          onPress={onHeartPress}
          style={{
            width: 30,
            backgroundColor: colors.white,
            height: 30,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/icons/heart.png')} />
        </TouchableOpacity>
      )}
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
