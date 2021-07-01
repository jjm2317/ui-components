import { Component, render } from "./React.js";

// App 컴포넌트 내부를 작성해보세요.
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const timer = new Timer();
    const div = document.createElement("div");
    div.appendChild(timer.render());
    return div;
  }
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  render() {
    const textContent = `time is ${this.state.time}`;
    if (this.selfElement) {
      this.selfElement.firstElementChild.textContent = textContent;
      return;
    }
    const div = document.createElement("div");
    this.selfElement = div;
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.textContent = textContent;
    button.textContent = "Click";
    button.onclick = () => {
      this.setState((prev) => ({ ...prev, time: prev.time + 1 }));
    };
    div.appendChild(span);
    div.appendChild(button);
    return div;
  }
}
// Please write

render(App, document.getElementById("root"));
