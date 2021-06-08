import { Component } from './React.js'

const root = document.getElementById('root')

// 컴포넌트 내부를 작성해보세요.
class Cat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Please write
    }
  }

  render() {
    console.log('Component rendered.')

    // Please write

    while (root.firstChild) {
      root.removeChild(root.lastChild)
    }
    root.appendChild(div)
  }

  shouldComponentUpdate(nextState) {
    // Please write
  }
}

const cat = new Cat()
cat.render()
