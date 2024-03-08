import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import colors from '../assets/styles/colors';
import {screenNames, headerTitles} from './Screens';

/* ------------- SCREENS ------------- */

import MarketData from '../screens/MarketData';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';

/* ------------- SCREENS ------------- */

/* ------------- ICONS ------------- */

import MarketDataIcon from 'assets/icons/MarketDataIcon';
import MainTabIcon from 'assets/icons/MainTabIcon';
import ProfileTabIcon from 'assets/icons/ProfileTabIcon';

/* ------------- ICONS ------------- */

const TabNavigation = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigation.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.brandColor,
          tabBarLabelStyle: {
            fontSize: 10,
          },
        }}>
        <TabNavigation.Screen
          name={screenNames.DASHBOARD}
          component={Dashboard}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <MainTabIcon color={focused ? colors.brandColor : '#97A2B0'} />
              );
            },
            headerTitle: headerTitles.DASHBOARD,
            tabBarLabel: headerTitles.DASHBOARD,
          }}
        />
        <TabNavigation.Screen
          name={screenNames.MARKET_DATA}
          component={MarketData}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <MarketDataIcon
                  color={focused ? colors.brandColor : '#97A2B0'}
                />
              );
            },
            headerTitle: headerTitles.MARKET_DATA,
            tabBarLabel: headerTitles.MARKET_DATA,
          }}
        />
        <TabNavigation.Screen
          name={screenNames.PROFILE}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <ProfileTabIcon
                  color={focused ? colors.brandColor : '#97A2B0'}
                />
              );
            },
            headerTitle: headerTitles.PROFILE,
            tabBarLabel: headerTitles.PROFILE,
          }}
        />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
