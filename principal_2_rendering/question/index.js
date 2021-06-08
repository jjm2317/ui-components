function createElement(type, props = {}, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child === 'string' ? createTextElement(child) : child)),
    },
  }
}

function createTextElement(value) {
  return createElement('TEXT_ELEMENT', { nodeValue: value })
}

function render({ props, type }, container) {
  // TODO: Write code
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
