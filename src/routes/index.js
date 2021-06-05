import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';

import LoginScreen from '../screens/LoginScreen';
import SendMoneyScreen from '../screens/SendMoneyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import ContactScreen from '../screens/ContactScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{ title: 'Welcome To Africa XYZ Payment App' }}
        />
        <Stack.Screen name='ProfileScreen' component={TabNavigator} />
        <Stack.Screen name='SendMoney' component={StackNavigatorMoney} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const StackNavigatorMoney = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='SendMoneyScreen'
        component={SendMoneyScreen}
        options={{
          title: 'Send Money',
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='ProfileScreen'
      tabBarOptions={{
        activeTintColor: colors.primary,
        labelPosition: 'beside-icon',
      }}
    >
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='ContactScreen'
        component={ContactScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Feather name='users' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='SendScreen'
        component={SendMoneyScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Feather name='tablet' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='SetingScreen'
        component={SettingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Feather name='settings' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StackNavigator;
