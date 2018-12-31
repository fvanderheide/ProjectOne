/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Nav from './src/Nav/nav';
import Generate from './src/generator/generate';
import ListItem from './src/generator/listItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    nameOfApp: "My awesome App",
    random: []
  }

  onAddRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;

    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      }
    })
  }

  onItemDelete = (i) => {
    const newArray = this.state.random.filter((item, index) => {
      return i !== index;
    })

    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav nameOfApp={this.state.nameOfApp}/>
        <Generate add={this.onAddRandom}></Generate>

        <ListItem items={this.state.random} delete={this.onItemDelete}></ListItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
  },
});
