import { INCREMENT, DECREMENT, RESET, LOADING } from './types.js';

const initialState = { count: 0, loading: false };

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: action.count,
      };
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return {
        ...state,
      };
  }
};
