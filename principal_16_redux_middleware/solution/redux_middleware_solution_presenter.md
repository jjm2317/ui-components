## Case16 : 리덕스 미들웨어의 동작 메커니즘 - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Case16 : redux middleware</title>
    <script src="./index.js" type="module"></script>
  </head>
  <body>
    <div id="app">
      <h3>COUNT : <span class="count">0</span></h3>
      <button class="increment">INCREMENT</button>
      <button class="decrement">DECREMENT</button>
      <button class="get_count">GET COUNT</button>
    </div>
  </body>
</html>
```

### js

#### redux.js

```javascript
export const createStore = (reducer, preloadedState, middlewares = []) => {
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []

  const getState = () => {
    return currentState
  }

  const subscribe = (listener) => {
    currentListeners.push(listener)
  }

  const dispatch = (action) => {
    currentState = currentReducer(currentState, action)

    const listeners = currentListeners
    listeners.forEach((listener) => {
      listener()
    })
  }

  const store = {
    getState,
    dispatch,
    subscribe,
  }

  // applyMiddleware
  const middlewareAPI = {
    getState: store.getState,
    dispatch: (action, ...args) => dispatch(action, ...args),
  }
  const chain = middlewares.map((middleware) => middleware(middlewareAPI))
  let wrapDispatch = compose(...chain)(store.dispatch)

  return {
    ...store,
    dispatch: wrapDispatch,
  }
}

const compose = (...middlewares) => {
  return middlewares.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}
```

#### middleware.js

```javascript
// middleware
export const logger = (store) => (next) => (action) => {
  if (typeof action === 'function') return next(action)

  console.group('LOGGER')
  console.log('prev state', store.getState())

  const result = next(action)

  console.log('action', action)
  console.log('next state', store.getState())
  console.groupEnd()

  return result
}

export const thunk = (store) => (next) => (action) => {
  typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)
}
```
