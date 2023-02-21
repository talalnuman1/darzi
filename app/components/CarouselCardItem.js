import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import size from '../helpers/sizes';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.imgUrl}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    paddingBottom: 25,
    shadowColor: '#000',
    justifyContent: 'center',
    alignContent: 'center',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 310,
    alignSelf: 'center',
  },
});

export default CarouselCardItem;
