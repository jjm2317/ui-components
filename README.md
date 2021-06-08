# UI-Components

## Context_menu

**./1_context_menu**
버튼을 클릭하면 컨텍스트 메뉴가 나타나고, 메뉴를 선택하거나 그 외의 부분을 클릭하면 사라지는 팝오버 컴포넌트를 구현

[요구사항](./1_context-menu/README.md)

- [js로 구현](./1_context-menu/question/q1_js/index.js)

- [html로 구현](./1_context-menu/question/q3_html-js/index.js)

- [React로 구현](./1_context-menu/question/q4_react.js/src/App.js)

- [React-createprotal로 구현](./1_context-menu/question/q5_react.js-createportal/src/App.js)

**풀이**

세가지 케이스가 있다.

1. 초기상태에서 메뉴 클릭
2. 컨텍스트가 open된 메뉴 클릭
3. 컨텍스트가 open된 메뉴 이외의 메뉴 클릭
   1의 경우 item 에 open 클래스 add하면된다.
   2의 경우를 처리하기 위해 add대신 toggle사용
   3을 처리하기 위해서는 기존에 open된 다른 메뉴를 닫아 줘야한다.
   3-1. e.target이 open 클래스를 가지고 있으면 toggle처리로 넘어가면 된다.
   3-2. e.target이 open 클래스가 없다면 item nodeList의 open클래스를 제거한다.

**memo**

details 태그의 open 어트리뷰트가 유무가 context 를 보여줄 지 말지를 결정
details를 쓰면 html 제공 동작을 그대로 활용하기 때문에 개발자가 직접 구현하는 것보다 효율적이고 신뢰성이 있다.
자바스크립트가 동작하지 않는 상황에서도 context menu가 동작하게 할 수 있다.

리액트로 구현하는 경우 dom을 직접 제어하지 않고 toggle 되는 context의 id를 상태로 관리한다. 리렌더링 시 id와 일치하는 context component의 toggle 관련 props를 true로 설정해준다.

## Redux

**./principal_13_redux**

Redux의 getState, dispatch 등의 핵심코드 직접 작성

[js로 구현](./principal_13_redux/question/redux.js)

**memo**
redux라이브러리의 주기능은 store를 생성해주는 createStore함수를 제공하는 것이다.
getState: createStore 함수내의 상태값을 참조하는 클로져이다.

**./principal_14_react-redux-use-selector/question/index.js**

Redux Store, Redux state에 접근할 수 있는 훅 작성

[js로 구현](principal_14_react-redux-use-selector\question\index.js)

**./principal_15_react-redux-use-dispatch/question/index.js**

[js로 구현](principal_15_react-redux-use-dispatch/question/index.js)
