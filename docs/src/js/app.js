"use strict";

import { hello } from "app/modules/es6";
import { h, render, Component } from 'preact';

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

class Clock extends Component {
  constructor() {
    super();
    // set initial state:
    this.state.time = Date.now();
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable.
    clearInterval(this.timer);
  }

  render(props, state) {
    let time = new Date(state.time).toLocaleTimeString();
    return <span>{ hello }{ time }</span>;
  }
}

// class Link extends Component {

  // props & state passed to the render fn.
  // render(props, state) {
  //   console.log(props, state);
  //   return <a href={props.href}>{ props.children }</a>;
  // }

  // Destructuring chosen props.
  // render({ href, children }) {
  //   console.log(href, children);
  //   return <a {...{ href, children}} />;
  // }

  // Destructing all props.
  // render(props) {
  //   console.log(props);
  //   return <a {...props} />;
  // }

// }

// Stateless functional component. (has no state!)
const Link = (props) => (
  <a {...props} />
);
// The below should work but doesn't
// is it Preact-compat? or is it decorators? ["transform-decorators-legacy"]
// const Link = ({ children, ...props }) => (
//     <a {...props}>{ children }</a>
// );

// render an instance of Clock into <body>:
render(<Clock />, document.getElementById('app'));
render(<Link href="http://example.com" prop2="something">link</Link>, document.getElementById('app'));
