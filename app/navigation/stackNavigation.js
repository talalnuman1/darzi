import {createStackNavigator} from '@react-navigation/stack';
import CheckOutScreen from '../screens/CheckoutScreen';
import Login from '../screens/Login';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SignUp from '../screens/SignUp';

import MyTabs from './bottomNavigation';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
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
      <Stack.Screen
        // options={{headerTitleStyle:  center}}
        name="CheckOut"
        component={CheckOutScreen}
      />
    </Stack.Navigator>
  );
}
export default AppStack;
