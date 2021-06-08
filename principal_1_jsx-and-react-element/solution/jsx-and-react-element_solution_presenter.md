## Case1 : JSX를 사용해 생성하는 React Element - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Case1. JSX를 사용해 생성하는 React Element / Solution</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pretty-print-json@1.0/dist/pretty-print-json.css" />

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/pretty-print-json@1.0/dist/pretty-print-json.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
  </body>

  <script type="text/babel" data-type="module" src="./index.js"></script>
</html>
```

### JS

#### index.js

```javascript
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

const React = {
  createElement,
}

// 런타임시 각 Node를 트랜스파일러인 Babel에 알려주기 위해 참조합니다.
/** @jsx React.createElement */
const element = (
  <div>
    <h1>Hello World</h1>
  </div>
)

const container = document.getElementById('root')

container.innerHTML = prettyPrintJson.toHtml(React.createElement(element))
```
