const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initState = {
  count: 0
};

const reducer = (state = initState, { type }) => {
  if (type === DECREMENT) {
    return {
      count: state.count - 1
    };
  }

  if (type === INCREMENT) {
    return {
      count: state.count + 1
    };
  }

  return state;
};

const useStore = () => {
  return React.useContext(ReactRedux.ReactReduxContext).store;
};

/**
 *
 * 현재 무분별하게 리렌더링되고 있습니다.
 *
 * TODO: 코드를 재작성하여 불필요한 렌더링을 개선합니다.
 *
 * @param {Function} selector the selector function
 *
 * @see https://react-redux.js.org/api/hooks#useselector
 *
 * @returns 선택된 Redux Store 상태
 */
const useSelector = selector => {
  const store = useStore();

  // TODO: Write Refactoring code

  const [, forceRender] = React.useReducer(s => s + 1, 0);

  React.useEffect(() => {
    store.subscribe(() => {
      // TODO: Write Refactoring code

      forceRender();
    });
  }, [store, forceRender]);

  return selector(store.getState());
};

/**
 *
 * Redux Dispatch에 접근하기 위한 Hooks
 *
 * @returns {any|function} Redux store의 dispatch
 *
 * @see https://react-redux.js.org/api/hooks#useselector
 *
 * @returns the selected state
 */
const useDispatch = () => {
  // TODO: Write code
};

const App = () => {
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();

  const onDecrement = () => {
    dispatch({
      type: DECREMENT
    });
  };

  const onIncrement = () => {
    dispatch({
      type: INCREMENT
    });
  };

  return (
    <div className='app-container'>
      <span className='count'>{counter}</span>
      <div className='btn-group'>
        <button onClick={onDecrement}>
          <strong>-</strong>
        </button>
        <button onClick={onIncrement}>
          <strong>+</strong>
        </button>
      </div>
    </div>
  );
};

const store = Redux.createStore(reducer);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root')
);
