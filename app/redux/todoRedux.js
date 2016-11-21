const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
  REMOVE_COMPLETED_ITEMS: 'REMOVE_COMPLETED_ITEMS'
}

export const actionCreators = {
  add: (toDoItem) => {
    return {type: types.ADD_ITEM, payload: toDoItem}
  },

  remove: (toDoItem) => {
    return {type: types.REMOVE_ITEM, payload:toDoItem}
  },

  toggle: (toDoItem) => {
    return {type: types.TOGGLE_ITEM_COMPLETED, payload:toDoItem}
  },

  removeCompletedItems: () => {
    return {type: types.REMOVE_COMPLETED_ITEMS}
  }
}

const initialState = {
  items: [{label:"Foo", completed:false},
          {label:"Bar", completed:true},
          {label:"Cheese", completed:false}],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action
  const {items} = state

  switch(type) {
    case types.ADD_ITEM:
      return {
        ...state,
        items:[{label: payload, completed: false}, ...items]
      }
      break
    case types.REMOVE_ITEM:
      return {
        ...state,
        items:items.filter((toDoItem) => toDoItem.label !== payload.label)
      }
      break
    case types.REMOVE_COMPLETED_ITEMS:
      return {
        ...state,
        items:items.filter((toDoItem) => !toDoItem.completed)
      }
      break;
    case types.TOGGLE_ITEM_COMPLETED:
      return {
        ...state,
        items:items.map((item, index) => {
          if (payload.label == item.label) {
            return {label: item.label, completed:!item.completed}
          } else {
            return item
          }
        })
      }
      break
    default: {
      return state
    }
  }
}
