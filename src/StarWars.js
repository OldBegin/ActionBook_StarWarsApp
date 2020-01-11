import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import SkinStyle from './StyleContainer';
import Screens from './Screens';

export default class StarWars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    headerTitle: (
      <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
        Starwars
      </Text>
    ),
    headerStyle: {backgroundColor: 'black', height: 110},
  };
  // 스크린이름을 문자로 받아서 각 해당 스크린으로 네비게이션 하는 범용 메소드
  _navigateTo = screenName => {
    this.props.navigation.navigate(screenName);
  };

  render() {
    console.log('in Starwars', Screens.People);
    return (
      <SkinStyle>
        <TouchableOpacity onPress={() => this._navigateTo(Screens.People)}>
          <Text style={styles.text}>StarWars</Text>
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
