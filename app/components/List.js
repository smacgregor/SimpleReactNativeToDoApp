import React, { Component, PropTypes } from 'react'
import { View, Text, ListView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    padding: 5
  },

  todoText: {
    fontSize: 15,
    flex: 1,
    paddingLeft: 20,
  },

  closeButton: {
    marginTop: -8,
    fontSize: 30,
    color: 'red',
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 40,
  }
})

const rowHasChanged = (r1, r2) => r1 !== r2

// Datasource template
const ds = new ListView.DataSource({rowHasChanged})

export default class List extends Component {

  state = {
    dataSource: ds.cloneWithRows(this.props.items)
  }

  componentWillReceiveProps(props) {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(props.items)})
  }

  renderRow = (rowData) => {
    const {onToggleItem, onRemoveItem} = this.props
    return (
        <View style={styles.row}>
          <Text style={styles.todoText}>
            {rowData.label}
          </Text>
          <Checkbox checked={rowData.completed} onToggle={() => onToggleItem(rowData)}></Checkbox>
          <TouchableOpacity onPress={() => onRemoveItem(rowData)}>
            <Text style={styles.closeButton}>&times;</Text>
          </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}/>
    )
  }
}
