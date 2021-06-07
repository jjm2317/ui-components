import { createStore } from './redux.js';
import { countReducer } from './reducer.js';
import { increment, decrement, reset } from './action.js';

const initialState = { count: 0 };

const store = createStore(countReducer, initialState);

store.subscribe(() => {
  render();
});

// render
const render = () => {
  const countSpan = document.getElementsByClassName('count')[0];
  const state = store.getState();
  countSpan.innerText = state.count;
};

// view
const init = () => {
  const incrementBtn = document.getElementsByClassName('increment')[0];
  const decrementBtn = document.getElementsByClassName('decrement')[0];
  const resetBtn = document.getElementsByClassName('reset')[0];

  // button event
  incrementBtn.onclick = () => store.dispatch(increment());
  decrementBtn.onclick = () => store.dispatch(decrement());
  resetBtn.onclick = () => store.dispatch(reset(0));

  render();
};

// init
init();
