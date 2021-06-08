import useRef from './useRef.js'

// (option) mocking react event system
document.addEventListener('rerender', () => {
  // Please write
})

const App = () => {
  // 여기서 useRef를 여러번 사용하는 코드를 만들어보세요.

  // (option) mocking react event system
  setTimeout(() => {
    document.dispatchEvent(new CustomEvent('rerender'))
  }, 1000 * 2)
}

App()
