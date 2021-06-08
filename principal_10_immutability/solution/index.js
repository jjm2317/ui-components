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
