import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../config/constants';

export default function CartCompotent({item}) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.boxclr}>
        <View style={styles.flexrowcartbox}>
          <View style={styles.boxcart}>
            <Image source={require('../assets/images/image48.png')} />
            <View>
              <Text style={styles.textlorem}>Lorem ipsum</Text>
              <View style={styles.flexrowrs}>
                <Text style={styles.textlorem}>Rs. 3000</Text>
                <View style={styles.tickview}>
                  <Image source={require('../assets/icons/tick.png')} />
                  <Text style={styles.textlorem}>Size</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.centercnter}>
            <Image source={require('../assets/icons/bag.png')} />
            <View style={styles.center}>
              <TouchableOpacity
                style={styles.blackbox}
                onPress={() => {
                  setCount(count + 1);
                }}>
                <Text style={styles.white}>+</Text>
              </TouchableOpacity>
              <Text
                style={styles.counttext}
                onPress={() => {
                  setCount(0);
                }}>
                {count}
              </Text>
              <TouchableOpacity
                style={styles.blackbox}
                onPress={() => {
                  setCount(count - 1);
                }}>
                <Text style={styles.white}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: hp(1),
  },
  textlorem: {
    color: colors.black,
    marginLeft: wp(1),
  },
  boxcart: {
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 5,
    backgroundColor: colors.white,
    padding: hp(0.8),
    width: '90%',
  },
  flexrowrs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    marginTop: hp(7),
  },
  tickview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blackbox: {
    backgroundColor: colors.black,
    width: wp(4.5),
    height: hp(3),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  counttext: {
    color: colors.black,
  },
  center: {
    alignItems: 'center',
    marginTop: hp(3),
  },
  flexrowcartbox: {
    flexDirection: 'row',
  },
  boxclr: {
    backgroundColor: colors.white,
    elevation: 5,
    padding: hp(1),
    borderRadius: 5,
  },
  centercnter: {
    marginLeft: hp(1),
  },

  margintop: {
    marginTop: hp(1),
  },
  white: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
  },
});
