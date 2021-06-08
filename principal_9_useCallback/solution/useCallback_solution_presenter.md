## Case9 : React.useCallback - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React.useCallback</title>
  </head>
  <body>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

### JS

#### index.js

```javascript
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
```

#### useCallback.js

```javascript
const memoryCells = {}
let cursor = 0

document.addEventListener('initializeHooks', () => {
  cursor = 0
})

// 직접 만들거나 useMemo를 사용하는 방법이 있다.
// useCallback은 useMemo에 function을 넣어 사용하는 것과 동일하다.
const useCallback = (targetFunction, dependencyArray) => {
  // Validation (유효성 검사)
  if (typeof targetFunction !== 'function') {
    throw new Error('Only function can be memoized.')
  }

  if (!Array.isArray(dependencyArray)) {
    throw new Error('dependencyArray should be an array.')
  }

  if (memoryCells[cursor] !== undefined) {
    const [prevFunction, prevDependencyArray] = memoryCells[cursor]
    const isDependencyChanged = prevDependencyArray.some((element, index) => element !== dependencyArray[index])

    if (isDependencyChanged) {
      memoryCells[cursor] = [targetFunction, dependencyArray]
      cursor++

      return targetFunction
    }

    cursor++

    // memoization
    return prevFunction
  }

  memoryCells[cursor] = [targetFunction, dependencyArray]
  cursor++

  return targetFunction
}

export default useCallback

// debugging 용
window.memoryCells = memoryCells
```
