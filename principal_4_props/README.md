## Case4: React Props

### 케이스 주제

React Component는 Props 라는 불변(immutable) 객체를 받습니다.<br>이 Props는 Properties를 의미하며 컴포넌트 트리에서 항상 위에서 아래로만 흐르는 단방향 특성을 갖습니다.<br> 그리고 컴포넌트는 전달받은 Props를 변경할 수 없습니다.<br> 이는 React가 컴포넌트를 Props 라는 arguments를 받아 UI 정보를 반환하는 하나의 단순한 함수로 바라보는 철학에서 비롯된 것입니다.<br> 다시 말해, 어떤 컴포넌트에 동일한 Props를 전달하면 항상 동일한 UI 결과가 나올 것이라고 확신할 수 있고<br> 이 높은 확신에서 UI를 더 선언적으로 바라보게 되는 점, 코드 가독성 향상, 테스트하기 쉬운 점 등의 이점을 얻게 됩니다.

<br>

### 문제

Q. Props를 받아 렌더링을 하는 React Function Component를 만들어서 렌더링 해보세요.

<br>

### 요구 및 참고사항

- DogCard 라는 함수 컴포넌트를 독립된 파일로 만듭니다.
  - 이 컴포넌트는 name, imageUrl, age, breed, owner라는 Props를 받습니다.
  - 한번 렌더링이 되면 props와 만들어진 element를 캐쉬합니다.
  - 여러번 렌더링 되었을때 Props가 바뀌지 않았으면(캐쉬한 props와 비교) 리렌더링을 하지 않습니다.
  - 전달받은 Props가 immutable 한지 검사하고, immutable 하지 않다면 에러를 방출합니다.
- 이 DogCard 컴포넌트를 렌더링하는 App 컴포넌트를 만듭니다.
- 컴포넌트와 컨테이너 두 파라미터를 받아서 id가 root인 div tag에 컴포넌트를 렌더링하는 render 함수를 만들어 활용합니다.
- App 컴포넌트 또는 DogCard 컴포넌트를 최소한 두번 리렌더링 합니다.
  - DogCard 컴포넌트에 같은 Props를 전달했을때와 다른 Props를 전달했을때를 비교합니다.
  - 같은 Props를 전달해서 두번 이상 리렌더링하면 DogCard 컴포넌트는 한번만 렌더링 되어야 합니다.

<br>

### 기능 작동 이미지

![example_image](./example.PNG)

<br>

### 주요 학습 키워드

- JavaScript
  - Function
    - Function Parameter Validation
  - Object.seal() & Object.isSealed()
  - Object.freeze() & Object.isFrozen()
  - Object.getOwnPropertyDescriptor()

<br>

### 참고 문서

- Why are React props immutable?:
  <br>https://stackoverflow.com/questions/47471131/why-are-react-props-immutable
- Props vs. State
  - https://lucybain.com/blog/2016/react-state-vs-pros/
  - https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
- Difference between freeze and seal:
  <br>https://stackoverflow.com/questions/21402108/difference-between-freeze-and-seal
- Object.getOwnPropertyDescriptor():
  <br>https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

<br>

### 작성해주셔야 하는 question 파일 경로

`./question/index.js`
`./question/React.js`
`./question/DogCard.js`

<br>

### 실행 방법

경로
`./question`
index.html 파일을 브라우저로 열거나 로컬 웹 서버로 실행하기

```bash
npx serve -l 3000
```
