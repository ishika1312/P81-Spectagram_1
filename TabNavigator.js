import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab =  createBottomTabNavigator();
const BottomTabNavigator = ()=>{
  return (
    <Tab.Navigator
      screenOptions = {({route})=>({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed'){
            iconName = focused
              ? 'planet'
              : 'planet-outline';
          } else if (route.name === 'Create Post'){
            iconName = focused
              ? 'create'
              : 'create-outline';
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey'
      }}
    >
      <Tab.Screen name = 'Feed' component = {Feed}/>
      <Tab.Screen name = 'Create Post' component = {CreatePost}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;