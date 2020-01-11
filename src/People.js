import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Screens from './Screens';
import SkinStyle from './StyleContainer';

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    headerTitle: (
      <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
        People
      </Text>
    ),
    headerStyle: {
      backgroundColor: 'black',
      height: 110,
    },
  };

  _navigateTo = screenName => {
    this.props.navigation.navigate(screenName);
  };

  render() {
    return (
      <SkinStyle>
        <TouchableOpacity
          onPress={() => this._navigateTo(Screens.StarWars)}
          style>
          <Text style={styles.text}>People</Text>
        </TouchableOpacity>
      </SkinStyle>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
