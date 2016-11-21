import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingLeft: 20,
    backgroundColor: 'whitesmoke',
    color: 'grey',
    fontSize: 16,
    textAlign:'left',
  },
})

export default class Input extends Component {

  state = {
    text: '',
  }

  onSubmitEditing = () => {
    const {onSubmitNewToDo} = this.props
    const {text} = this.state

    if (!text) return

    onSubmitNewToDo(text)
    this.setState({text: ''})
  }

  onChangeText = (text) => this.setState({text})

  render() {
    const {text} = this.state;
    return (
        <TextInput style={styles.input}
          placeholder="Enter an Item!"
          value={text}
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={this.onChangeText}/>
    )
  }
}
