
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import FetchLocation from './components/FetchLocation'
import UsersMap from './components/UsersMap'

export default class App extends React.Component {
  state = {
    googleLocation: null
  }

  getGoogleLocation = () => {
    Geolocation.getCurrentPosition(position => {
      console.log(position)
      this.setState({
        googleLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0221
        }
      }), err => console.log(err)
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getGoogleLocation}/>
        <UsersMap googleLocation={this.state.googleLocation}/>
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
