// Component 내부를 작성해보세요.

// Please write
const ALLOWED_STATE_TYPES = ["object", "function"];

class Component {
  constructor(props) {
    // Please write
    this.props = props;
  }

  setState(newState) {
    // Please write
    if (!ALLOWED_STATE_TYPES.includes(typeof newState)) {
      throw new Error("Type of passed state is not object or function");
    }

    if (typeof newState === "object")
      this.state = { ...this.state, ...newState };
    else if (typeof newState === "function")
      this.state = { ...this.state, ...newState(this.state, this.props) };

    this.render();
  }

  render() {}
}

function render(ComponentToRender, container) {
  // Please write
  const component = new ComponentToRender();
  console.log(component.render(), container);
  container.appendChild(component.render());
}

export { Component, render };
