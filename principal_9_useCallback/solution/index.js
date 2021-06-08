import useCallback from './useCallback.js'

let isRerendered = false

// mocking react event system
document.addEventListener('rerender', () => {
  if (isRerendered) {
    return
  }

  isRerendered = true
  document.dispatchEvent(new CustomEvent('initializeHooks'))
  Div() // rerender component
})

const Div = (props) => {
  console.log('rendering')
  /**
   * useCallback dependency array에 사용될 local state
   */
  let dependencyA = 1
  let dependencyB = 'abc'
  let dependencyC = false

  // 새로운 레퍼런스 생성
  const normalFunction = () => {
    console.log('normalFunction')
  }

  const memoizedCallback1 = useCallback(() => {
    console.log('memoizedCallback1')
  }, [])

  const memoizedCallback2 = useCallback(() => {
    console.log('memoizedCallback2')
  }, [dependencyA])

  const memoizedCallback3 = useCallback(() => {
    console.log('memoizedCallback3')
  }, [dependencyA, dependencyB, dependencyC])

  setTimeout(() => {
    document.dispatchEvent(new CustomEvent('rerender'))
  }, 1000 * 2)
}

Div()
