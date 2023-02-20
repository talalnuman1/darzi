/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';

<<<<<<< HEAD
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './app/screens/HomeScreen';
import SignUp from './app/screens/SignUp';
=======
import { NavigationContainer } from '@react-navigation/native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './app/screens/HomeScreen'
import AppStack from './app/navigation/stackNavigation'
>>>>>>> 973e4e8cde9409923c6b8342ece77df87bc1b3d5
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
<<<<<<< HEAD
    <>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <SignUp />
    </>
=======
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppStack />
    </NavigationContainer>
>>>>>>> 973e4e8cde9409923c6b8342ece77df87bc1b3d5
  );
}

export default App;
