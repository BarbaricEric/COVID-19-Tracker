'use strict';

const e = React.createElement;

class Hello extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "Hello ", this.props.toWhat), 
      /*#__PURE__*/React.createElement("div", {
      id: "hhello",
      class: "dif3"
    }, "Hello");
  }
}

ReactDOM.render(
  e(Hello, {toWhat: "World"}), 
  document.getElementById('root')
);

/* https://reactjs.org/docs/react-without-jsx.html */
