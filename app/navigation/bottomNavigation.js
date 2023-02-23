import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CartScreen from '../screens/CartScreen';
import {colors} from '../config/constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Profile from '../assets/icons/Profile';
import Home from '../assets/icons/home2.svg';
import {Svg, Path, Circle, ClipPath, Defs, Rect} from 'react-native-svg';

const Tab = createBottomTabNavigator();

//custom tabBarButton
const TabBarAdvancedButton = ({bgColor, ...props}) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Svg width="30" height="30" fill="white">
          {/* <title>Abstract user icon</title> */}
          <Defs>
            <ClipPath id="circular-border">
              <Circle cx="300" cy="300" r="280" />
            </ClipPath>
            <ClipPath id="avoid-antialiasing-bugs">
              <Rect width="100%" height="498" />
            </ClipPath>
          </Defs>
          <Circle
            cx="300"
            cy="300"
            r="280"
            fill="white"
            clipPath="url(#avoid-antialiasing-bugs)"
          />
          <Circle cx="300" cy="230" r="115" />
          <Circle cx="300" cy="550" r="205" clipPath="url(#circular-border)" />
        </Svg>
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
        tabBarStyle: {backgroundColor: colors.black},
      }}
      tabBarHideOnKeyboard
      tabBarOptions={{
        activeTintColor: colors.lightOrange,
        inactiveTintColor: colors.white,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Svg width="30" height="30" viewBox="0 0 21 20" fill="none">
              <Path
                d="M19.5236 8.44306L11.2128 1.03208C11.1126 0.943934 10.9934 0.873967 10.8621 0.82622C10.7307 0.778473 10.5898 0.753891 10.4475 0.753891C10.3052 0.753891 10.1643 0.778473 10.033 0.82622C9.90162 0.873967 9.7824 0.943934 9.68219 1.03208L1.37141 8.45247C1.17031 8.62934 1.01149 8.83931 0.904164 9.07018C0.796839 9.30106 0.743151 9.54823 0.746218 9.79735V17.6786C0.745383 18.16 0.956168 18.6234 1.33517 18.9733C1.71417 19.3233 2.23252 19.5331 2.78349 19.5595H18.1115C18.6625 19.5331 19.1809 19.3233 19.5599 18.9733C19.9389 18.6234 20.1497 18.16 20.1488 17.6786V9.79735C20.1497 9.29226 19.9255 8.80664 19.5236 8.44306ZM8.29167 17.6786V12.0357H12.6034V17.6786H8.29167ZM17.993 17.6786H14.7592V11.0952C14.7592 10.8458 14.6456 10.6066 14.4435 10.4302C14.2413 10.2538 13.9672 10.1547 13.6813 10.1547H7.21375C6.92787 10.1547 6.65369 10.2538 6.45154 10.4302C6.2494 10.6066 6.13583 10.8458 6.13583 11.0952V17.6786H2.90206V9.75974L10.4475 3.03531L17.993 9.79735V17.6786Z"
                fill="white"
              />
            </Svg>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={CartScreen}
        options={{
          tabBarStyle: {
            display: 'none',
          },
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
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({color, size}) => (
            <Svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M21.9116 4.98074C21.7192 4.6356 21.4437 4.34798 21.1119 4.14594C20.7802 3.9439 20.4035 3.83432 20.0187 3.82791H5.76622L5.1204 1.22251C5.05515 0.97101 4.90958 0.749789 4.70739 0.594881C4.5052 0.439973 4.25831 0.360505 4.00693 0.36942H1.77998C1.48467 0.36942 1.20145 0.490878 0.992633 0.707076C0.783816 0.923273 0.666504 1.2165 0.666504 1.52225C0.666504 1.828 0.783816 2.12122 0.992633 2.33742C1.20145 2.55362 1.48467 2.67508 1.77998 2.67508H3.16069L6.23388 14.5031C6.29913 14.7546 6.4447 14.9758 6.64689 15.1307C6.84908 15.2856 7.09597 15.3651 7.34735 15.3562H17.3686C17.5742 15.3556 17.7757 15.296 17.9506 15.1841C18.1255 15.0721 18.2671 14.9123 18.3596 14.7221L22.0118 7.15958C22.1701 6.81606 22.2438 6.4373 22.2263 6.05711C22.2088 5.67693 22.1007 5.30713 21.9116 4.98074Z"
                fill="white"
              />
              <Path
                d="M6.79082 21.1207C7.71325 21.1207 8.46103 20.3465 8.46103 19.3915C8.46103 18.4364 7.71325 17.6622 6.79082 17.6622C5.86838 17.6622 5.12061 18.4364 5.12061 19.3915C5.12061 20.3465 5.86838 21.1207 6.79082 21.1207Z"
                fill="white"
              />
              <Path
                d="M17.9256 21.1207C18.848 21.1207 19.5958 20.3465 19.5958 19.3915C19.5958 18.4364 18.848 17.6622 17.9256 17.6622C17.0032 17.6622 16.2554 18.4364 16.2554 19.3915C16.2554 20.3465 17.0032 21.1207 17.9256 21.1207Z"
                fill="white"
              />
            </Svg>
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
