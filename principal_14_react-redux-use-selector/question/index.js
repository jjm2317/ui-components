const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initState = {
  count: 0,
};

const reducer = (state = initState, { type }) => {
  if (type === DECREMENT) {
    return {
      count: state.count - 1,
    };
  }

  if (type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }

  return state;
};

/**
 *
 * Redux Store에 접근하기 위한 Hooks
 *
 * ReactRedux.ReactReduxContext을 활용합니다.
 *
 * @see https://react-redux.js.org/api/hooks#usestore
 *
 * @returns {any} Redux Store
 */
const useStore = () => {
  // TODO: Write code
  const { store } = React.useContext(ReactRedux.ReactReduxContext);

  return store;
};

/**
 *
 * Redux State에 접근하기 위한 Hooks
 *
 * selector 함수는 순수 함수만 받을 수 있습니다.
 *
 * @param {Function} selector the selector function
 *
 * @see https://react-redux.js.org/api/hooks#useselector
 *
 * @returns 선택된 Redux Store 상태
 */
const useSelector = (selector) => {
  // TODO: Write code
  const store = useStore();
  const [, forceRender] = React.useReducer((s) => s + 1, 0);
  React.useEffect(() => {
    forceRender();
  }, [store, forceRender]);
  return selector(store.getState());
};

const App = () => {
  const count = useSelector((state) => state.count);

  return (
    <div className="app-container">
      <span className="count">{count}</span>
    </div>
  );
};

const store = Redux.createStore(reducer);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById("root")
);
