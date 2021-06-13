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

react createPortal 정보를 다른 계층의 요소로 전달할 때 사용. floating ui를 제공할 때 유용하게 쓰인다. 노출하지 않는 데이터를 필요시에만 개입한다는 특징이 있다. 팝오버 되야되는 정보가 민감한 정보라면 사용을 고려하는 것이 좋다.

html과 css 로 처리할 수 있는경우 최대한 활용하는 것이 좋다. javascript 테스트 과정을 줄일 수 있고, 코드량이 주는 장점이 있기 때문이다.

## Scroll Spy

**./2_scroll_spy**
스크롤을 내릴 때 화면내용과 메뉴의 내용을 일치시키는 ui 구현. 메뉴 클릭 시 해당 화면으로 스크롤위치 이동

[요구사항](./2_scroll-spy/README.md)

[js로 기본기능 구현](./2_scroll-spy/question/q1_js_1/index.js)

[resize에도 동작하게 적용](./2_scroll-spy/question/q2_js_2/index.js)

[resize listener 적용](./2_scroll-spy/question\q3_js_resize_listener\index.js)

[throttle, debounce 적용](./2_scroll-spy/question/q4_js_throttle/index.js)

[Intersection Observer 활용](./2_scroll-spy\question\q5_js_Intersection_Observer\index.js)

[Intersection Observer & react 활용](./2_scroll-spy\question\q6_react_Intersaction_Observer\src\App.js)

**memo**

스크롤을 감지하여 navigation 메뉴에 적용
offsetTop 은 전체 body 중 해당요소의 top의 y좌표값이다.
clientHeight은 요소의 높이 값이다.
dom의 scrollingElement.scrollTop은 전체 body에서 현재 스크롤이 얼마나 되어 있는지를 나타내는 값이다.

clientHight값의 절반을 더하고 빼주는 이유는 scroll spy효과의 자연스러움을 더하기 위함이지만, 기획적인 판단에 의해 바뀌어도 상관없다.

고정형인 경우에 상관없지만 브라우저 크기에 따라 요소 높이가 변하는 반응형 웹의 경우, resize event에 대응하여 offsetTop과 clientheight를 재계산 해주어야한다.

가장 쉽게는 요소값들을 함수형으로 변환하여 scroll event 발생시마다 호출하여 재계산하는 방법이 있지만, 이는 요소를 모두 순회하는 작업이고, resize가 발생하지 않았을 시에도 재계산되므로 비효율적이다.

대신, 클로져를 활용하여 window.innerheight값이 변할 때만 재계산을 해주는 방법이 더 효율적이다.

가장 최적의 방법은 resize event listener를 등록하여 resize event 발생시에만 재계산을 하는 것이다.

scroll spy와 별개로, navigation button 클릭 시 해당 요소위치로 스크롤 되는 기능은 다음과 같이 구현한다.

navigation item list중 클릭된 item 의 index값을 찾아서 content item list의 해당 index의 요소로 이동한다.
이동하는 기능은 scrollIntoView 메서드를 사용한다.

해당 메서드의 인수는 객체형태로 전달하는데 view의 어느 위치로 어떻게 이동할 지 설정할 수 있다.

block 프로퍼티에 start값을 주면 view의 시작지점을 요소의 시작지점과 일치시키며, behavior 프로퍼티에 smooth를 할당하면 부드러운 효과로 스크롤링이 된다.

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

**memo**

react-redux 라이브러리는 리액트와 리덕스를 연동할 때 여러 유틸리티를 제공한다.

**./principal_15_react-redux-use-dispatch/question/index.js**

[js로 구현](principal_15_react-redux-use-dispatch/question/index.js)
