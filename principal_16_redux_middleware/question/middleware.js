// middleware
export const logger = (store) => (next) => (action) => {
  if (typeof action === 'function') return next(action)

  // q1
}

export const thunk = (store) => (next) => (action) => {
  // q2
}
