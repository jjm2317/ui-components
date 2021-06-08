// middleware
export const logger = (store) => (next) => (action) => {
  if (typeof action === 'function') return next(action);

  console.group('LOGGER');
  console.log('prev state', store.getState());

  const result = next(action);

  console.log('action', action);
  console.log('next state', store.getState());
  console.groupEnd();

  return result;
};

export const thunk = (store) => (next) => (action) => {
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
};
