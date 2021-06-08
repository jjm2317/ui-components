import useCallback from './useCallback.js'

// (option) mocking react event system
document.addEventListener('rerender', () => {})

const Div = () => {
  console.log('rendering')

  // useCallback dependency array에 사용될 local state
  let dependencyA = 1

  // 여기서 useCallback을 여러번 사용하는 코드를 만들어보세요.

  // (option) mocking react event system
  setTimeout(() => {
    document.dispatchEvent(new CustomEvent('rerender'))
  }, 1000 * 2)
}

Div()
