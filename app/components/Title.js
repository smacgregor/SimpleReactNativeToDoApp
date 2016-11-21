import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {

  render() {
    const {label} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    backgroundColor: '#4A90E2',
    color: 'whitesmoke',
    fontSize: 16,
    padding: 10,
    flex: 1,
    textAlign: 'center',
  },
})
