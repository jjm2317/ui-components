## Case2 : DOM Elements 렌더링

<br>

### 케이스 주제

Case1 에서는 `React.createElement()`를 구현해보며 **React** 에서의 **Element** 가 어떻게 구성되고 만들어지는지 이해해보려고 했습니다.

또한 앞서 생성된 **React Element** 는 React 에서 가장 작은 단위라고 설명드렸었는데요.  
일반적인 객체 (**Plain Object**)라고도 할 수 있습니다.

페이스북의 React 개발팀에서 React를 소개할 때 3가지를 중점으로 설명합니다.<br>
(_선언형, 컴포넌트 기반, 한 번 배워서 어디서나 사용하기_)

그중에서도 **Learn Once, Write Anywhere (한 번 배워서 어디서나 사용하기)** 가 이번 케이스에 일부분 연관되어 있습니다.

React를 기본적으로 사용할때 누구나 습관처럼 당연하게 사용하는 구문이 있을겁니다.

```js
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(element, container)
```

보통 최상위 컴포넌트에서 위의 코드처럼 **ReactDOM** 을 가져온 후 `ReactDOM.render()`을 사용하게 됩니다.

여기서 `ReactDOM.render()`는 최상위에서 사용할 수 있는 몇 안 되는 **메서드** 로 **DOM** 에 특화되어 있으며  
첫 번째 인자로 제공된 **React Element** 를 두 번째 인자인 **Container Element** 의 내부에 렌더링시킬 수 있습니다.

<br>

### 기능요구사항

1. ReactDOM.render() 구현하기
2. render() 메서드를 구현하고 DOM 에 렌더링하기

이전 케이스에서 `React.createElement()`를 통해 **React Element** 를 만들었다면,  
이번에는 **React Element Tree** 를 생성하는 `render()` 메서드를 구현하고 **DOM** 에 렌더링까지 하는 것이 목표입니다.

```js
const element = (
  <div>
    <h1>Hello World</h1>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(element, rootElement)
```

<br>

### 기능 작동 이미지

![example](./example.png)

<br>

### 문제

아래의 `render()` 함수 구문의 내부를 작성하여 위의 **React Element** 를 `rootElement` 내부에 렌더링해보도록 하겠습니다.

```js
function render({ props, type }, container) {
  // TODO: Write code
}
```

**React** 는 자식 노드들을 **재귀적으로** 렌더링한다는 것을 유념하면 구현시 큰 힌트가 될 수 있습니다.

단순히 `render()`를 구현한다고해서 **ReactDOM** 의 모든 매커니즘과 동작 방식을 이해할 수는 없습니다.  
때문에 React의 내부 동작을 풀어낸다는 생각으로 문제에 접근한다면
React 개발팀이나 해박한 지식을 가진 개발자가 아니라면 풀어내기 어려울 수 있습니다.

`ReactDOM.render()`를 흉내내며 모방한다는 생각으로 해당 케이스의 문제 풀이에 접근하고 시도해봅시다!

<br>

### 주요 학습 키워드

- ReactDOM.render()

<br>

### 작성해주셔야 하는 question 파일경로

`./question/index.js`

<br>

### 실행 방법 및 의존성 모듈 설치

경로 : `./question/index.html`
`index.html`에 복잡한 Babel 설정을 하지 않기 위해 CDN이 포함되어 있으니
`live-server` 등을 이용해 확인하시면서 구현할 수 있습니다.

<br>

#### Reference

- Understanding Rendering Behavior in React : https://geekflare.com/react-rendering
- React Components, Elements, and Instances : https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca
- React (Virtual) DOM Terminology : https://gist.github.com/sebmarkbage/fcb1b6ab493b0c77d589
