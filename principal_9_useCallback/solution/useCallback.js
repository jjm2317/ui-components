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
