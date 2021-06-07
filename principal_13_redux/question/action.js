import { INCREMENT, DECREMENT, RESET } from './types.js';

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
