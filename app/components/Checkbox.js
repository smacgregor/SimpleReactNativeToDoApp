import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 2,
    height: 15,
    width: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checked: {
    height: 10,
    width: 10,
    backgroundColor: 'lightgreen',
  }
})

export default class Checkbox extends Component {

  render() {
    const {onToggle, checked} = this.props
    return (
      <TouchableOpacity style={styles.checkbox} onPress={onToggle}>
        <View style={checked && styles.checked}/>
      </TouchableOpacity>
    )
  }
}
