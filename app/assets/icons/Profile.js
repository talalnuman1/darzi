import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, ClipPath, Defs, Rect} from 'react-native-svg';

export default function Profile() {
  return (
    <View>
      <Svg width={30} height={30} fill="white">
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
    </View>
  );
}
