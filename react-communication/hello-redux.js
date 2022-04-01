// Flux Architecture

const { createStore } = require('redux');

const initialState = {
  name: 'Titi',
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = createStore(reducer, initialState)

console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'UPDATE_NAME', name: 'Toto' });
store.dispatch({ type: 'INCREMENT_COUNT' });