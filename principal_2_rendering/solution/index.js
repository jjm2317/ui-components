// 가상 요소
function createElement(type, props = {}, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child === 'string' ? createTextElement(child) : child)),
    },
  }
}

// 가상 텍스트 요소
function createTextElement(value) {
  return createElement('TEXT_ELEMENT', { nodeValue: value })
}

function render({ props, type }, container) {
  const v = Object.entries(props).reduce(
    (totalNode, [key, value]) => {
      if (key !== 'children') {
        totalNode[key] = value
      }

      return totalNode
    },
    type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(type)
  )

  props.children.forEach((child) => render(child, v))
  container.appendChild(v)
}

const React = {
  createElement,
}

const ReactDOM = {
  render,
}

// 런타임시 각 Node를 트랜스파일러인 Babel에 알려주기 위해 참조합니다.
/** @jsx React.createElement */
const element = (
  <div>
    <h1>Hello World</h1>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(element, rootElement)
