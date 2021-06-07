## Case13 : 리덕스의 기본 동작 메커니즘 - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Case13 : redux</title>
    <script src="./index.js" type="module"></script>
  </head>
  <body>
    <div id="app">
      <h3>COUNT : <span class="count">0</span></h3>
      <button class="increment">INCREMENT</button>
      <button class="decrement">DECREMENT</button>
      <button class="reset">RESET</button>
    </div>
  </body>
</html>
```

### js

#### redux.js

```javascript
export const createStore = (reducer, preloadedState) => {
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

  return {
    dispatch,
    subscribe,
    getState,
  }
}
```
