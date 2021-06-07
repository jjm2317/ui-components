export const createStore = (reducer, preloadedState) => {
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = [];

  const getState = () => {
    // q1
    return currentState;
  };

  const subscribe = (listener) => {
    // q3
    currentListeners.push(listener);
  };

  const dispatch = (action) => {
    // q2
    currentState = currentReducer(currentState, action);
    const listeners = currentListeners;
    // q3
    listeners.forEach((listener) => listener());
  };

  return {
    dispatch,
    subscribe,
    getState,
  };
};
