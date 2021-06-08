## Case4 : react props - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Props</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

### JS

#### index.js

```javascript
import React from './React.js'
import DogCard from './DogCard.js'

/**
 * React Component를 Props를 받아 UI를 반환하는 함수로 가정한다.
 */
function App({ propsForDogCard }) {
  const app = document.createElement('div')
  app.style = `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 15px;
  `

  const renderedDogCard = DogCard(propsForDogCard)
  app.appendChild(renderedDogCard)

  return app
}

// Object.seal()
// - 객체에 속성을 추가하거나 제거하는 것을 막는다.
// - 객체를 non-configurable로 만든다. descriptor 변경이 불가능해진다.
// - sealed 된 객체의 값을 변경하면 TypeError를 방출한다.
// Object.freeze()
// - seal()이 하는 일을 똑같이 하며
// - 추가로, 기존의 property들을 변경하는 것을 막는다.
const propsForDogCard = Object.freeze({
  name: 'Briton',
  imageUrl:
    'https://mblogthumb-phinf.pstatic.net/MjAxODA3MTNfMjQz/MDAxNTMxNDQ3ODcyMTEy.0J44OrI_srCV1Cc2YOUsJ4SUIYcEfbSY-ogTzscKOAYg.BFVU24-KEWT1i16UDzeHxP2zMb76ScvSPa4PGN0Ryqwg.JPEG.senom91/image_9534650361531447585590.jpg?type=w800',
  age: 3,
  breed: 'Golden Retriever',
  owner: 'Charles Brown',
})
// freeze를 하지 않으면 configurable과 writable이 모두 true여서 객체의 속성 변경 및 추가가 가능하다. -> props 로서는 적절하지 않다.
// const propsForDogCard = {
//   name: 'Briton',
//   imageUrl: 'https://ww.namu.la/s/db6df9d8f32a265abab22f79f0e954cc056451a76751d1211516f5c02c9af0a7ff0602e3f327ab1f916c2ad4c8cfc00465003ae8251628bec3749ad7b270491d56d7bea705aeb623ef7d89a123f39fe43df9a55299884be20d50f4bb5b6885e9',
//   age: 3,
//   breed: 'Golden Retriever',
//   owner: 'Charles Brown',
// }

// 똑같은 props로 세번 렌더링을 해도 DogCard 컴포넌트의 렌더링은 한번만 된다.
React.render(
  () =>
    App({
      propsForDogCard,
    }),
  document.getElementById('root')
)

React.render(
  () =>
    App({
      propsForDogCard,
    }),
  document.getElementById('root')
)

React.render(
  () =>
    App({
      propsForDogCard,
    }),
  document.getElementById('root')
)

// 새로운 props를 전달하면 DogCard 컴포넌트가 두번 렌더링 된다.
React.render(
  () =>
    App({
      propsForDogCard: Object.freeze({
        name: 'Charlie',
        imageUrl:
          'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/3XvY/image/pF-v9rZiGBquMBQh633BmSm7CUY.jpg',
        age: 5,
        breed: 'Basenji',
        owner: 'Jeffrey',
      }),
    }),
  document.getElementById('root')
)
```

#### React.js

```javascript
function render(ComponentToRender, container) {
  // Validation
  if (!container) {
    throw new Error('Container should be provided to render a component.')
  }

  while (container.firstChild) {
    container.removeChild(container.lastChild)
  }
  container.appendChild(ComponentToRender())
}

export default {
  render,
}
```

#### DogCard.js

```javascript
let prevProps = null
let prevElement = null

function DogCard(props) {
  // Props immutability validation
  if (typeof props !== 'object') {
    throw new Error('Props should be an object.')
  }

  const isPropsMutable = Object.keys(props)
    .map((key) => Object.getOwnPropertyDescriptor(props, key))
    .some((descriptor) => descriptor.configurable || descriptor.writable)
  if (isPropsMutable || !Object.isFrozen(props) || !Object.isSealed(props)) {
    throw new Error('Props should be immutable.')
  }

  if (prevProps !== null) {
    const shouldComponentUpdate = Object.keys(prevProps).some((Key) => prevProps[Key] !== props[Key])

    if (!shouldComponentUpdate) {
      return prevElement
    }
  }

  const dogCard = document.createElement('div')
  dogCard.style = `
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    height: 600px;
    background-color: ivory;
    border: 5px solid blue;
    border-radius: 30px;
  `
  dogCard.innerHTML = `
    <h1>Name: ${props.name}</h1>
    </br>
    <img src=${props.imageUrl} alt="dog" >
    </br>
    <h2>Age: ${props.age}</h2>
    </br>
    <h3>Breed: ${props.breed}</h3>
    </br>
    <h4>Owner: ${props.owner}</h4>
    </br>
  `

  prevProps = props
  prevElement = dogCard

  console.log('DogCard rendered.')

  return dogCard
}

export default DogCard
```
