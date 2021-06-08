## Case10 : React State Update & Immutability - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React State Update & Immutability</title>
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
import { Component } from './React.js'

const root = document.getElementById('root')

class Cat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Blue',
      age: 2,
      breed: 'Russian Blue',
    }
  }

  render() {
    console.log('Component rendered.')

    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const info = document.createElement('p')
    const button = document.createElement('button')

    h1.textContent = `Name: ${this.state.name}`
    info.textContent = `
      Age: ${this.state.age}
      Breed: ${this.state.breed}
    `
    button.textContent = 'Update cat state'
    button.addEventListener('click', () => {
      // 불변성을 이용해 상태를 업데이트 했을때
      this.setState((prevCat) => ({
        ...prevCat,
        age: 3,
      }))

      // 불변성을 이용하지 않고 상태를 업데이트 했을때
      // this.setState((prevCat) => {
      //   prevCat.age = 3
      //   return prevCat
      // })
    })

    div.appendChild(h1)
    div.appendChild(info)
    div.appendChild(button)

    while (root.firstChild) {
      root.removeChild(root.lastChild)
    }
    root.appendChild(div)
  }

  shouldComponentUpdate(nextState) {
    // shallow compare
    if (this.state !== nextState) {
      return true
    }

    return false
  }
}

const cat = new Cat()
cat.render()
```

#### React.js

```javascript
const ALLOWED_STATE_TYPES = ['object', 'function']

export class Component {
  constructor(props) {
    this.props = props
  }

  setState(newState) {
    // Validation
    if (!ALLOWED_STATE_TYPES.includes(typeof newState)) {
      throw new Error('Type of passed state is not object or function.')
    }

    if (typeof newState === 'object') {
      this.nextState = newState
    }

    if (typeof newState === 'function') {
      this.nextState = newState(this.state)
    }

    if (this.shouldComponentUpdate !== undefined && this.shouldComponentUpdate(this.nextState)) {
      this.state = this.nextState
      this.render()
    }
  }

  render() {}
}
```
