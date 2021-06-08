import { createStore } from './redux.js';
import { countReducer } from './reducer.js';
import { increment, decrement, getCount } from './action.js';
import { logger, thunk } from './middleware.js';

const initialState = { count: 0, loading: false };
const middlewares = [logger, thunk];

const store = createStore(countReducer, initialState, middlewares);

store.subscribe(() => {
  render();
});

// render
const render = () => {
  const countSpan = document.getElementsByClassName('count')[0];
  const state = store.getState();
  countSpan.innerText = state.loading ? 'loading...' : state.count;
};

// view
const init = () => {
  const incrementBtn = document.getElementsByClassName('increment')[0];
  const decrementBtn = document.getElementsByClassName('decrement')[0];
  const getCountBtn = document.getElementsByClassName('get_count')[0];

  // button event
  incrementBtn.onclick = () => store.dispatch(increment());
  decrementBtn.onclick = () => store.dispatch(decrement());
  getCountBtn.onclick = () => store.dispatch(getCount);

  render();
};

// init
init();
