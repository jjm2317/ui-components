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

[resize listener 적용](./2_scroll-spy/question/q3_js_resize_listener\index.js)

[throttle, debounce 적용](./2_scroll-spy/question/q4_js_throttle/util.js)

[Intersection Observer 활용](./2_scroll-spy/question/q5_js_Intersection_Observer/index.js)

[Intersection Observer & react 활용](./2_scroll-spy/question/q6_react_Intersaction_Observer/src/App.js)

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

throttle을 적용할 때 delay 250ms~300ms 가 적당하다. 해당 시간이 사람이 잘 인지하지 못하면서도 충분히 짧은 시간 간격이다. throttle과 debounce의 섬세한 기능 적용을 위해서는 lodash등의 라이브러리를 사용하는 것이 좋다.

IntersectingObserver 사용시 브라우저 크기를 resize 하였을 때도 scrollspy가 바로 적용된다는 장점이 있다.
offsetTop을 직접 계산 안해도되는 편리함도 있다.

```js
// ref forward
//App.js
return (
   <Content ref={r => /*some*/}/>
)


{
const Content= (ref) => <div ref={ref}></div>
export default forwardRef(Content)
}
```

## Infinite Scroll

**./3_infinite-scroll**

무한 스크롤 목록 뷰 구현

[js로 구현](./3_Infinite-scroll/question/q1_js/index.js)

[debounce, throttle 적용](./3_Infinite-scroll/question/q2_js_debounce_trottle/index.js)

[IntersectionObserver 사용](./3_Infinite-scroll/question/q3_js_Intersection_Observer/index.js)

[React&IntersectionObserver](./3_Infinite-scroll/question/q4_react_Intersaction_Observer/src/App.js)

**memo**

scrollingElement프로퍼티에서 scrollHeight, scrollTop, clientHeight 를 조회할 수 있다. 각각은 전체 높이, 스크롤된 높이, 스크롤바에 해당하는 높이이다.
scrollTop(스크롤된 높이) 과 clientHeight(뷰의 높이) 의 합이 scrollHeight 와 같거나 클 때 새로운 페이지를 불러온다.

성능 최적화를 위해 IntersectionObserver API 를 사용할 수도 있다. isIntersecting 프로퍼티를 이용한다. observer 등록 후 로딩중 isIntersecting 프로퍼티가 true로 바뀌는 버그가 있으모로, time 프로퍼티를 추가로 이용하여 1초 이후에 무한 스크롤이 작동하도록 하였다.

## Dark mode

**./4_dark-mode**

토글 버튼을 클릭하면 테마가 뷰에 반영되도록 구현

[js로 구현(로컬스토리지)](./4_dark-mode/question/1.js-1/index.js)

[js로 구현(사용자 OS 테마)](./4_dark-mode/question/2.js-2/index.js)

[react로 구현](./4_dark-mode/question/3.react/src/App.js)

**memo**

dark mode 에서 차이가 발생하는 부분은 토글 버튼(배경, 버튼 위치), 배경 색, 텍스트 색이다.
이 예제에서는 body 클래스의 dark 여부에 따라 다른 스타일이 적용되도록 하였지만, js로 다른 css 파일을 로딩하도록 제어하는 방식도 가능하다. 또한 css 에서 제공하는 변수를 사용할 수도 있다.

토글버튼

body의 theme가 토글되면 position의 left 값이 바뀐다.
각 theme의 텍스트는 50%씩 영역을 차지하도록 한다.

Window.localStorage 사용

- localStorage.setItem(key, value)
  - localStorage에 key: value 값을 문자열로 저장
- localStorage.getItem(key)
  - localStorage에서 key에 해당하는 value 를 반환
- localStrorage.removeItem(key)
  - localStorage에서 key와 해당하는 value를 제거
- localStorage.clear();
  - localStorage에 저장된 모든 key, value를 제거

flash of incorrect theme, FOIT 은 테마가 변경되면서 화면이 깜빡거리는 현상이다. 이를 해결하기 위해서 테마가 적용되기전 body의 visibility를 hidden으로 적용한다.
transition 까지 고려하여 setTimeout 콜백으로 visibility 를 visible로 설정하면 깜빡거리는 현상이 사라진다.

운영체제 레벨에서 다크모드를 설정할 수 있는데, 이를 감지하기위해 @media(prefers-color-scheme) 나 window.matchMedia('(prefers-color-scheme: dark)')를 사용할 수 있다.

바닐라 js와 리액트의 차이

js

- body 요소에 클래스를 탈부착 하는 방식으로 구현

react

- styled component 에서 제공하는 ThemeProvider 사용

ThemeProvider은 contextAPI 기반으로 동작한다.
ThemeProvider 에서 제공하는 theme props는 styeld componenet를 사용하는 모든 하위 컴포넌트에서 theme props를 받아올 수 있다.

styled componenet 의 createGlobalStyle 을 통해 전역 스타일을 만들 수 있다.

react-icons 라이브러리를 사용하면 fontawesome을 포함한 여러 아이콘을 사용할 수 있다.

## Stop watch

**./5_stopwatch1**

start, stop, reset기능이 있는 스탑와치 구현

[js로 구현](5_stopwatch1/question/1.js/index.js)

[React로 구현](5_stopwatch1/question/2.react/src/App.js)

## Tabs

탭메뉴 구현

[js로 구현](6_tabs/qustion/q1_js/src/app.js)

[React로 구현](6_tabs/qustion/q2_react/src/App.js)

## Modal Window

**./15_modal_window**

[js로 구현](15_modal-window/question/q1_js/q1_index.js)

[React 로 구현](15_modal-window/question/q3_react/src/App.js)

**memo**

- css 리뷰
  모달 창과 모달배경은 z-index에 양수 값을 바인딩하고 position 속성에 absolute 값을 바인딩함으로서 동작한다.
  모달 배경은 left, top에 0, width, height에 100%를 줌으로서 화면을 차지하도록한다.
  모달창은 opacity와 pointer-events를 비활성화상태로 초기화한다. 스크린리더등의 보조기술로 모달을 읽을 수 있어야 하기 때문이다.

## React

**./principal_1_jsx-and-react-element**

리액트는 선언형으로 작성한 jsx 코드를 javascript로 인식할 수 있도록한다.
React.createElement를 구현하고, JSX Element를 JSON 포맷으로 표시한다.

- jsx란

javascript를 확장한 문법이다.
빌드 시 babel에 의해 javascript로 변환된다.

jsx 어노테이션(@jsx) 를 기술하면 바벨에서 어떤 노드를 jsx로 바라보고 트랜스파일링할 지 결정할 수 있다.

createElement의 세번째 인수인 children에서, 각 child 가 텍스트일지 노드일지 알 수 없다. 그래서 map 고차함수로 createTextElement를 적용할 value를 구분한다.

**./principal_2_rendering/question/index.js**

ReactDOM.render() 메서드를 구현한다.

**memo**

React.createElement 메서드는 일반 객체인 React element를 생성하며, jsx 문법 사용시 babel에 의해 jsx 가 React element로 변환된다. 일반 객체인 React element를 브라우저 dom으로 변환하기 위해 ReactDOM.render 메서드를 사용한다.

React element 의 props 프로퍼티에는 자식 element를 나타내는 children 프로퍼티와 자신의 요소에 대한 dom attribute 등의 key,value 들이 포함되어 있다. key 와 value 형태의 값이므로 렌더링 시 props 프로퍼티에 대한 처리를 위해 Object.entries와 배열 고차함수 reduce를 사용한다.

재귀적으로 render 함수 호출하며, appendChild를 후위로 처리해준다.

**./principal_3_state/React.js**

Component 클래스의 setState 메서드 구현

**memo**

원래 React의 setState 메서드는 비동기적으로 병렬 처리되는 코드가 있다.

## Redux

**./principal_13_redux**

Redux의 getState, dispatch 등의 핵심코드 직접 작성

[js로 구현](./principal_13_redux/question/redux.js)

**memo**
redux라이브러리의 주기능은 store를 생성해주는 createStore함수를 제공하는 것이다.
getState: createStore 함수내의 상태값을 참조하는 클로져이다.

**./principal_14_react-redux-use-selector/question/index.js**

Redux Store, Redux state에 접근할 수 있는 훅 작성

[js로 구현](./principal_14_react-redux-use-selector/question/index.js)

**memo**

react-redux 라이브러리는 리액트와 리덕스를 연동할 때 여러 유틸리티를 제공한다.

**useStore**는 Provider로 제공되는 store 값을 반환한다.

**useSelector** 는 인수로 받은 콜백함수로 어떤상태를 반환할 지 결정한다. 함수 코드 내에 React Hook인 useReducer 와 useEffect를 사용하여 상태 업데이트 시마다 리렌더링을 하도록하는 기능이 구현되어 있다.

**./principal_15_react-redux-use-dispatch/question/index.js**

[js로 구현](./principal_15_react-redux-use-dispatch/question/index.js)
