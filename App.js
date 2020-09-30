import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import FetchLocation from './components/FetchLocation'

export default class App extends React.Component {
  getUserLocation = () => {
    console.log('IT WORKED THATS SO FIRE')
    Geolocation.getCurrentPosition(position => {
      console.log(position), err => console.log(err)
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
