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
