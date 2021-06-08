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

  const [, forceRender] = React.useReducer((s) => s + 1, 0)

  React.useEffect(() => {
    store.subscribe(() => {
      forceRender()
    })
  }, [store, forceRender])

  return selector(store.getState())
}

const App = () => {
  const count = useSelector((state) => state.count)

  return (
    <div className="app-container">
      <span className="count">{count}</span>
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
