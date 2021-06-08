## Case7 : useRef - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React.useRef</title>
  </head>
  <body>
    <ul class="info"></ul>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

### JS

#### index.js

```javascript
import useRef from './useRef.js'

let isRerendered = false
let previousRef = null
let previousObject = null
const infoList = document.querySelector('.info')
infoList.style = `
  margin: 20px auto;
  font-size: 20px;
  padding: 0;
  width: 500px;
`

export function addInfo(message) {
  const li = document.createElement('li')
  li.textContent = message
  infoList.appendChild(li)
}

// mocking react event system
document.addEventListener('rerender', () => {
  if (isRerendered) {
    return
  }

  isRerendered = true
  document.dispatchEvent(new CustomEvent('initialize'))
  App() // rerender component
})

function App() {
  addInfo('App rendering')

  // 리렌더링 됐을때 useRef로 만든 객체와 일반 객체의 레퍼런스를 비교해보자.
  const myRef = useRef(100)
  const normalObject = {
    current: 100,
  }

  // useRef로 만든 객체는 리렌더링 되어도 레퍼런스가 유지된다.
  if (previousRef === null) {
    previousRef = myRef
  } else {
    addInfo(previousRef === myRef ? 'myRef reference is the same.' : 'myRef reference is not the same.')
  }

  // 일반 객체는 컴포넌트가 리렌더링 되면 새 레퍼런스로 교체된다.
  if (previousObject === null) {
    previousObject = normalObject
  } else {
    addInfo(
      previousObject === normalObject
        ? 'normalObject reference is the same.'
        : 'normalObject reference is not the same.'
    )
  }

  setTimeout(() => {
    document.dispatchEvent(new CustomEvent('rerender'))
  }, 1000 * 2)
}

App()
```

#### useRef.js

```javascript
import { addInfo } from './index.js'

const memoryCells = {}
let cursor = 0

document.addEventListener('initialize', () => {
  cursor = 0
})

function useRef(initialValue) {
  if (memoryCells[cursor] !== undefined) {
    addInfo('Cached object is returned.')
    const cachedObject = memoryCells[cursor]
    cursor++

    return cachedObject
  }

  const newObject = {
    current: initialValue,
  }
  memoryCells[cursor] = newObject
  cursor++

  return newObject
}

export default useRef

// debugging 용
window.memoryCells = memoryCells
```
