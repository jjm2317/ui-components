## Case3: React State

### 케이스 주제

React Component의 상태는 State 라는 개념으로 다룹니다. 이 State는 변경 가능하며 변경될때마다 Component는 리렌더링 됩니다.<br> Class Component와 Function Component에 따라 State 관련 코드를 작성하는 방식과 내부적으로 동작하는 방식이 조금 다릅니다.<br> 다만 State를 직접 변경하지 않는다는 점과 State가 변경되면 리렌더링이 트리거되는 점은 여전히 같습니다.<br> Function Component에서의 State는 useState에서 다룰 예정이니 이번 케이스에서는 Class Component에서의 State에 대해서 다룹니다.<br> State와 리렌더링이 어떻게 동작하는지 알아보기 위해서 간단하게 아래와 같은 형태로 Component 클래스를 작성해봅니다.

```javascript
class Component {
  setState(newState) {}
  render() {}
}
```

<br>

### 요구 및 참고사항

- setState와 render 메서드를 갖는 Component 클래스를 만듭니다.
- setState 메서드는 아래와 같이 작동해야 합니다.
  - newState 파라미터에 대한 유효성 검사를 합니다.
    - newState는 객체 또는 함수 타입을 받습니다. 그 외의 타입이 오면 에러를 내도록 합니다.
  - newState가 객체일 경우에는 기존의 state와 newState를 병합합니다.
  - newState가 함수일 경우에는 newState 함수에 현재 state와 props를 전달해 실행하고 반환된 새 state를 기존의 state와 병합합니다.
  - 마지막으로 리렌더링을 합니다.
- 이 Component를 html에 초기 렌더링할 수 있는 render 함수를 만듭니다.
  - render 함수는 컴포넌트와 컴포넌트가 렌더링될 공간인 컨테이너 두 파라미터를 받습니다.
  - 받은 컴포넌트를 인스턴스화 하고 컴포넌트의 렌더링 결과물을 컨테이너의 child로 붙입니다.
- 이렇게 만든 Component와 render를 import 해서 활용하는 코드를 만듭니다.
  - Component 클래스를 상속해서 만든 커스텀 컴포넌트에서 setState를 호출해서 리렌더링이 되도록 합니다.
  - 만약 this.state를 직접 업데이트하면 리렌더링이 안되도록 합니다.
  - 마지막으로 이렇게 만든 커스텀 컴포넌트를 import 한 redner 함수를 이용해 렌더링 합니다.

<br>

### 기능 작동 이미지

![example_image](./example.PNG)

<br>

### 문제

Q. State에 따라 렌더링을 하는 React Class Component를 단순한 방식으로 모방해서 만들어보세요.

<br>

### 주요 학습 키워드

- JavaScript
  - Class
  - Arrow Function
- Function Parameter Validation

<br>

### 작성해주셔야 하는 question 파일 경로

`./question/index.js`
`./question/React.js`

<br>

### 실행 방법

경로
`./question`
index.html 파일을 브라우저로 열거나 로컬 웹 서버로 실행하기

```bash
npx serve -l 3000
```
