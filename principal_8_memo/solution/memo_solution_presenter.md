## Case8 : React.memo - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React.memo</title>
  </head>
  <body>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

### JS

#### index.js

```javascript
import memo from './memo.js'

/**
 * 컴포넌트를 props를 받아서 렌더링 정보를 담은 객체를 반환하는 함수로 가정한다.
 */
const Span = (props) => {
  console.log('rendering started')

  return {
    type: 'span',
    props,
  }
}

// 렌더링이 세번 일어난다.
Span({
  title: 'This is a title.',
})
Span({
  title: 'This is a title.',
})
Span({
  title: 'This is a title.',
})

const memoizedSpan = memo(Span)

// 같은 props로 컴포넌트를 여러번 호출했을때
memoizedSpan({
  title: 'This is a title.',
})
memoizedSpan({
  title: 'This is a title.',
})
memoizedSpan({
  title: 'This is a title.',
})

// 다른 props로 컴포넌트를 여러번 호출했을때
memoizedSpan({
  title: 'This is a title. 1',
})
memoizedSpan({
  title: 'This is a title. 2',
})
memoizedSpan({
  title: 'This is a title. 3',
})
```

#### memo.js

```javascript
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
```
