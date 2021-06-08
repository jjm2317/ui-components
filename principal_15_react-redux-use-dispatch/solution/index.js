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
