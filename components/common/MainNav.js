import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// pages
import ProfilePage from '../pages/ProfilePage';

const Tab = createMaterialBottomTabNavigator();

const MainNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      barStyle={{ backgroundColor: '#eee' }}
      style={{marginLeft: '20px'}}
    >
      <Tab.Screen name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNav;