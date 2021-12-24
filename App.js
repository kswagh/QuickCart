import React from 'react'
import SplashScreen from './src/components/SplashScreen'
import LoginScreen from './src/components/Authentication/Login'
import RegistrationScreen from './src/components/Authentication/Registration'

import HomeTab from './src/components/HomeTab'
import CheckoutScreen from './src/components/HomeTab/CheckoutScreen'
import ScanCodeScreen from './src/components//HomeTab/ScanCodeScreen'

import OrdersTab from './src/components/OrdersTab'
import OrderDetailsScreen from './src/components/OrdersTab/OrderDetails'

import ProfileTab from './src/components/ProfileTab'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Tabs = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator()

const HomeStackTab = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <HomeStack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerShown: false
          // title: 'Home',
          // headerStyle: {
          //   backgroundColor: '#D54501'
          // },
          // headerTintColor: '#ffffff'
        }}
      />
      <HomeStack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="ScanCodeScreen" component={ScanCodeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}

const OrdersStackTab = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <HomeStack.Screen
        name="OrdersTab"
        component={OrdersTab}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}

const ProfileStackTab = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <HomeStack.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
  )
}


const TabNavigators = () => {

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStackTab') {
            iconName = focused
              ? 'home'
              : 'home'
          } else if (route.name === 'OrdersStackTab') {
            iconName = focused
              ? 'file'
              : 'file'
          } else if (route.name === 'ProfileStackTab') {
            iconName = focused
              ? 'user-circle'
              : 'user-circle'
          }
          else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list'
          }
          return <Icon name={iconName} size={30} color={color} />
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#D54501',
        tabBarInactiveTintColor: '#808080',
      })}
    >
      <Tabs.Screen name="HomeStackTab" component={HomeStackTab} options={{ title: 'Home' }} />
      <Tabs.Screen name="OrdersStackTab" component={OrdersStackTab} options={{ title: 'Orders' }} />
      <Tabs.Screen name="ProfileStackTab" component={ProfileStackTab} options={{ title: 'Profile' }} />
    </Tabs.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <AuthStack.Screen name="TabNavigators" component={TabNavigators} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}

export default App