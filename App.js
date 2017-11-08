import React, { Component } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Header from './header'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Hello world
        </Text>
      </View>
    )
  }
}

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View>
        <Header headerText="Home"/>
        <Button
          onPress={() => this.props.navigation.navigate('Profile')}
          title="Go to App"
        />
      </View>
    )
  }
}

export default StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    screen: App,
  },
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
})
