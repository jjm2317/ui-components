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

// 여기서 Span 컴포넌트를 memoize 하는 코드를 작성해보세요.
