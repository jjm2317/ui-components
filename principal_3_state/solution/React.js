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

export {
  Component,
  render,
}
