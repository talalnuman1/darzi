import {createStackNavigator} from '@react-navigation/stack';
import CustomSizeScreen from '../screens/CustomSizeScreen';
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
        name="Tabs"
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
        options={{headerShown: false}}
        name="CustomSize"
        component={CustomSizeScreen}
        // options={{headerTitleStyle:  center}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CheckOut"
        component={CheckOutScreen}
        // options={{headerTitleStyle:  center}}
      />
    </Stack.Navigator>
  );
}
export default AppStack;
