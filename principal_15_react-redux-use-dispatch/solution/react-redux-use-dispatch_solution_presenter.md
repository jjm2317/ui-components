## Case15 : React Redux hooks : useDispatch - 출제자 해설

### HTML

#### index.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Case15. React Redux Hooks - useDispatch / Solution</title>

    <link href="./index.css" rel="stylesheet" />

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.1.0/redux.min.js"
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.2.4/react-redux.min.js"
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel" data-type="module" src="./index.js"></script>
  </body>
</html>
```

### JS

#### index.js

```javascript
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initState = {
  count: 0,
}

const reducer = (state = initState, { type }) => {
  if (type === DECREMENT) {
    return {
      count: state.count - 1,
    }
  }
  if (type === INCREMENT) {
    return {
      count: state.count + 1,
    }
  }

  return state
}

const useStore = () => {
  return React.useContext(ReactRedux.ReactReduxContext).store
}

const useSelector = (selector) => {
  const store = useStore()

  const latestSelectedState = React.useRef(selector(store.getState()))

  const [, forceRender] = React.useReducer((s) => s + 1, 0)

  React.useEffect(() => {
    store.subscribe(() => {
      const newSelectedState = selector(store.getState())

      if (latestSelectedState.current === undefined || newSelectedState !== latestSelectedState.current) {
        latestSelectedState.current = newSelectedState

        forceRender()
      }
    })
  }, [store, forceRender, selector])

  return selector(store.getState())
}

const useDispatch = () => useStore().dispatch

const App = () => {
  const counter = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const onDecrement = () => {
    dispatch({
      type: DECREMENT,
    })
  }

  const onIncrement = () => {
    dispatch({
      type: INCREMENT,
    })
  }

  return (
    <div className="app-container">
      <span className="count">{counter}</span>
      <div className="btn-group">
        <button onClick={onDecrement}>
          <strong>-</strong>
        </button>
        <button onClick={onIncrement}>
          <strong>+</strong>
        </button>
      </div>
    </div>
  )
}

const store = Redux.createStore(reducer)

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root')
)
```
