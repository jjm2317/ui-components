## Case3 : react state - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React State</title>
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
import { Component, render } from './React.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const timer = new Timer()
    const div = document.createElement('div')
    div.appendChild(timer.render())
    return div
  }
}

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
    }

    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }))
    }, 1000)
  }

  render() {
    const textContent = `Current time is ${this.state.time}.`

    // 리렌더링을 간단하게 처리합니다.
    if (this.selfElement) {
      this.selfElement.firstChild.textContent = textContent
      return
    }

    const div = document.createElement('div')
    this.selfElement = div
    const span = document.createElement('span')
    const button = document.createElement('button')

    span.textContent = textContent
    button.textContent = 'Click!'
    button.addEventListener('click', () => {
      // setState를 통해 업데이트 했을 경우
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }))

      // state를 직접 업데이트 했을 경우
      // this.state = {
      //   time: this.state.time + 1,
      // }
    })

    div.appendChild(span)
    div.appendChild(button)

    return div
  }
}

render(App, document.getElementById('root'))
```

#### React.js

```javascript
const ALLOWED_STATE_TYPES = ['object', 'function']

class Component {
  constructor(props) {
    this.props = props
  }

  setState(newState) {
    // Validation
    if (!ALLOWED_STATE_TYPES.includes(typeof newState)) {
      throw new Error('Type of passed state is not object or function.')
    }

    if (typeof newState === 'object') {
      this.state = {
        ...this.state,
        ...newState,
      }
    }

    if (typeof newState === 'function') {
      this.state = {
        ...this.state,
        ...newState(this.state, this.props),
      }
    }

    this.render()
  }

  render() {}
}

function render(ComponentToRender, container) {
  const component = new ComponentToRender()
  container.appendChild(component.render())
}

export { Component, render }
```
