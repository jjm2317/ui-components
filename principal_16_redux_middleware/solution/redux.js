export const createStore = (reducer, preloadedState, middlewares = []) => {
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

  const store = {
    getState,
    dispatch,
    subscribe,
  };

  // applyMiddleware
  const middlewareAPI = {
    getState: store.getState,
    dispatch: (action, ...args) => dispatch(action, ...args),
  };
  const chain = middlewares.map((middleware) => middleware(middlewareAPI));
  let wrapDispatch = compose(...chain)(store.dispatch);

  return {
    ...store,
    dispatch: wrapDispatch,
  };
};

const compose = (...middlewares) => {
  return middlewares.reduce((a, b) => (...args) => a(b(...args)));
};
