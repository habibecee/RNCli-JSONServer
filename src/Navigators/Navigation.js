import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from '../Pages/Products';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart';
import ProductCreate from '../Pages/ProductCreate';
import ProductUpdate from '../Pages/ProductUpdate';
import Home from '../Pages/Home';
import Account from '../Pages/Account';
import Category from '../Pages/Category';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../Utils/GeneralStyles';
import {useContext} from 'react';
import {MainContext} from '../Context/Context';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category List" component={Home} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ProductCreate" component={ProductCreate} />
      <Stack.Screen name="ProductUpdate" component={ProductUpdate} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const {isFocused, handleTabPress, tabBarOptions, getTabIconName} =
    useContext(MainContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabBarOptions}
        listeners={{
          tabPress: handleTabPress,
        }}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name={getTabIconName(route.name)} color={color} size={size} />
          ),
        })}
        initialRouteName="StackNavigator">
        <Tab.Screen
          name="Home"
          component={StackNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
