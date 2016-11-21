import React, { Component, PropTypes } from 'react'
import { TouchableHighlight, TouchableOpacity, Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: 'red',
    fontSize: 16,
    padding: 10,
    flex: 1,
    textAlign: 'center',
  },
})

export default class Footer extends Component {
  _onPressButton() {
    console.log('Button tapped!')
  }

  render() {
    const {onFooterPressed} = this.props
    const {label} = this.props
    return (
      <TouchableOpacity onPress={onFooterPressed} style={styles.container}>
        <Text style={styles.text}>
          {label}
        </Text>
      </TouchableOpacity>
    )
  }
}
