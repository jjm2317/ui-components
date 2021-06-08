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
