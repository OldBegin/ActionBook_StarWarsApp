import React, {Component} from 'react';
import {StyleSheet, Text, FlatList, TouchableHighlight} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import People from './src/People';
import StarWars from './src/StarWars';
//import Container from './Container';

// const links = [
//   {title: People},
//   {title: Films},
//   {title: StarShips},
//   {title: vehicles},
//   {title: Species},
//   {title: Planets},
// ];

const AppNavi = createStackNavigator({
  Home: {screen: StarWars},
  People: {screen: People},
});

const App = createAppContainer(AppNavi);
export default App;
