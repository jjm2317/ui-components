export const createStore = (reducer, preloadedState) => {
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = [];

  const getState = () => {
    return currentState;
  };

  const subscribe = (listener) => {
    currentListeners.push(listener);
  };

  const dispatch = (action) => {
    currentState = currentReducer(currentState, action);

    const listeners = currentListeners;
    listeners.forEach((listener) => {
      listener();
    });
  };

  return {
    dispatch,
    subscribe,
    getState,
  };
};
