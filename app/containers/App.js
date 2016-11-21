import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'

import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from '../components/Input'
import List from '../components/List'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onSubmitNewToDo = (toDoItem) => {
    const {dispatch} = this.props
    dispatch(actionCreators.add(toDoItem))
  }

  onRemoveToDo = (toDoItem) => {
    const {dispatch} = this.props
    dispatch(actionCreators.remove(toDoItem))
  }

  onCompleteToDo = (toDoItem) => {
    const {dispatch} = this.props
    dispatch(actionCreators.toggle(toDoItem))
  }

  onRemoveCompletedItems = () => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeCompletedItems())
  }

  componentWillReceiveProps(props) {

  }

  render() {
    return (
      <View style={styles.container}>
        <Title label="Todo List"/>
        <Input onSubmitNewToDo={this.onSubmitNewToDo}/>
        <List items={this.props.items}
              onToggleItem={this.onCompleteToDo}
              onRemoveItem={this.onRemoveToDo}/>
        <Footer onFooterPressed={this.onRemoveCompletedItems}
                label="Remove Completed To-Dos"/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
