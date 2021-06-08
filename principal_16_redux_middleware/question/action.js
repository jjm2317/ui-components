import { INCREMENT, DECREMENT, RESET, LOADING } from './types.js';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = (count) => ({
  type: RESET,
  count,
});

export const loading = (bool) => ({
  type: LOADING,
  loading: bool,
});

export const getCount = (dispatch, getState) => {
  console.group('API');
  console.log('[fake api] getCount request');
  dispatch(loading(true));
  setTimeout(() => {
    console.log('[fake api] getCount response');
    console.groupEnd();
    dispatch(loading(false));
    dispatch(reset(100));
  }, 2000);
};
