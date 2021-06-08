// memo 함수의 areEqual 파라미터에 default로 사용될 비교 함수
const shallowCompare = (prevProps, nextProps) => {
  for (const key in nextProps) {
    // 비교 메커니즘을 더 엄격하게 할 수록 더 섬세하게 memoize 할 수 있다.
    if (nextProps[key] !== prevProps[key]) {
      return false
    }
    return true
  }
}

const memo = (Component, areEqual = shallowCompare) => {
  // Validation
  if (typeof Component !== 'function') {
    throw new Error('Only function component can be memoized.')
  }

  if (areEqual !== undefined && typeof areEqual !== 'function') {
    throw new Error('areEqual should be a function.')
  }

  let prevProps = {}
  let memoizedResult = null

  // Clousre를 활용해 memoize 된 결과가 있을 경우 그 결과를 반환하는 함수를 반환한다.
  return (nextProps) => {
    if (memoizedResult !== null && areEqual(prevProps, nextProps)) {
      return memoizedResult
    }

    prevProps = nextProps
    memoizedResult = Component(nextProps)

    return memoizedResult
  }
}

export default memo
