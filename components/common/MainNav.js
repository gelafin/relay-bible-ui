import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// custom
import { ProfilePage } from '../pages/ProfilePage';

const Tab = createMaterialBottomTabNavigator();

const screens = [
  {name: 'Profile', component: ProfilePage, tabBarLabel: 'Profile', icon: 'account'}
];

const MainNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      barStyle={{ backgroundColor: '#eee' }}
    >
      {screens.map(screen => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: screen.tabBarLabel,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name={screen.icon} color={color} size={26} />
            ),
          }}
          key={screen.name}
        />
      ))}
    </Tab.Navigator>
  );
}

export { MainNav };