import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CartScreen from '../screens/CartScreen';
import {colors} from '../config/constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

//custom tabBarButton
const TabBarAdvancedButton = ({bgColor, ...props}) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={require('../assets/icons/search.png')} />
      </TouchableOpacity>
    </View>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'black'},
      }}
      tabBarHideOnKeyboard
      tabBarOptions={{
        activeTintColor: colors.lightOrange,
        inactiveTintColor: colors.white,
      }}>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/home.png')}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={HomeScreen}
        options={{
          tabBarButton: props => (
            <TabBarAdvancedButton
              bgColor={colors.black} // background space color.
              {...props}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/icons/icon_shopping_cart.png')}
              style={{tintColor: color, width: size, height: size}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    width: wp(30),
    alignItems: 'center',
  },
  background: {
    // position: 'absolute',
    // top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    borderRadius: 37,
    backgroundColor: colors.black,
    borderWidth: 2.5,
    borderColor: colors.white,
  },
  buttonIcon: {
    fontSize: 16,
    color: colors.black,
  },

  navigator: {
    borderTopWidth: 0,
    backgroundColor: colors.black,
    elevation: 30,
  },
});
