import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Screens from './Screens';

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'People...',
  };

  _navigateTo = screenName => {
    this.props.navigation.navigate(screenName);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this._navigateTo(Screens.StarWars)}
          style>
          <Text style={styles.text}>People</Text>
        </TouchableOpacity>
      </View>
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
  },
});
