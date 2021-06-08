## Case9: React.useCallback

<br>

### 케이스 주제

React에는 어떤 값이나 함수 또는 컴포넌트를 memoize 할 수 있는 방안으로 memo, useMemo, useCallback 등을 제공합니다.<br> 이 중에 이번에 알아볼 useCallback은 hooks로서 Function Component의 body에서 작동합니다. <br>아래의 function signature와 같이 memoize를 할 대상 함수와 memoize 여부 판단에 사용될 dependency array를 받아 memoized 된 함수를 반환합니다.

```typescript
function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T
```

이때 React hooks는 내부적으로 memory cells라 불리는 객체를 만들어 각 hook들이 몇번, 어떤 순서로 호출되었는지 저장 및 추적합니다.<br> 그 뒤 컴포넌트의 state 및 props가 변경되어 rerendering이 되면 hook들이 동일한 순서대로 호출되기 때문에 hook을 여러번 사용하더라도 memory cells를 보고 올바른 값을 반환할 수 있습니다. <br>hooks를 조건문이나 반복문에서 사용할 수 없는 것이 바로 이런 이유에서 입니다.

<br>

### 요구 및 참고사항

- useCallback은 (targetCallback, dependencyArray) 두 파라미터를 받습니다.
- (option) useCallback이 여러번 호출되어도 각 호출에 대해 어떤 값을 반환해야 할지 저장할 memoryCells 객체를 만들어 사용합니다.
  - hook이 몇번 호출되었는지 추적할 수 있도록 cursor라는 변수를 만들어 사용합니다.
- (option) useCallback 호출부에서 rerendering이 되었을때 cursor를 0으로 초기화할 수 있도록 CustomEvent를 사용합니다.
- 처음 받은 dependencyArray와 새로 받은 dependencyArray의 element를 각각 비교해 값이 하나라도 변경되었는지 비교하는 로직을 만듭니다.
- (targetCallback, dependencyArray) 두 파라미터에 대한 유효성 검사를 합니다.
  - 유효성 검사에 실패할 경우, 각 경우에 알맞는 메세지와 함께 에러를 발생합니다.
- 마지막으로 memoized 된 함수를 반환합니다.

<br>

### 기능 작동 이미지

**이번 예제의 결과는 console 창에서만 확인 가능합니다**

<br>

브라우저 콘솔창 여는 법 ( chrome 기준 )

- 윈도우 : Ctrl + Shift + J / F12
- 맥 : Command + Option + J

<br>

![example](./example.png)

### 문제

Q. React.useCallback 함수를 단순한 방식으로 모방해서 만들어보세요.

<br>

### 주요 학습 키워드

- JavaScript
  - Closure
  - Arrow Function
  - CustomEvent
- Function Parameter Validation

<br>

### 작성해주셔야 하는 question 파일 경로

`./question/index.js`
`./question/useCallback.js`

<br>

### 실행 방법

경로
`./question`
index.html 파일을 브라우저로 열거나 로컬 웹 서버로 실행하기

```bash
npx serve -l 3000
```
