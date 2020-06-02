const initState = {
    item : [{}],
};

const ADD = 'todoList/add';
const UPDATE = 'todoList/update';
const REMOVE = 'todoList/remove';

// Reducer
export default function reducer(state = initState, action = {}) {
    const {type,payload} = action;
    
  switch (type) {
      case ADD:
          state.item.push(payload);
          var addedItem = state.item;
          return {
              ...state,
              action : addedItem,
          };
      case UPDATE:
          const itemToFind = state.item.find(
              (item) => {return item.uniqueId === payload.uniqueId});
          const idx = state.item.indexOf(itemToFind);
          
          if (idx > -1) 
              state.item[idx] = payload;
          var updatedItem = state.item;
          return {
              ...state,
              action : updatedItem,
          };
      case REMOVE:
          const itemToRemove = state.item.find(
              (item) => {return item.uniqueId === payload.uniqueId});
          const idxToRemove = state.item.indexOf(itemToRemove);
          
          if (idxToRemove > -1) 
              state.item.splice(idxToRemove, 1);
          var removedItem = state.item;
          return {
              ...state,
              action : removedItem,
          };
      default: return state;
  }
}

export function addTodo(item) {
  return { 
      type: ADD, 
      payload : item
  };
}

export function updateTodo(item) {
  return { 
      type: UPDATE, 
      payload : item
  };
}

export function removeTodo(item) {
  return { 
      type: REMOVE, 
      payload : item
  };
}