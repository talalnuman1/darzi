import {createStackNavigator} from '@react-navigation/stack';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';

import MyTabs from './bottomNavigation';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={Main}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={MyTabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Products"
        component={ProductsScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProductDetails"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
}
export default AppStack;
