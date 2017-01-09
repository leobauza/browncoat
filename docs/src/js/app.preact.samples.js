"use strict";

import { hello } from "app/modules/es6";
import { h, render, Component } from 'preact';

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

// Development only...
require('preact/devtools');


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

class MyForm extends Component {
  // constructor() {
  //   super();
  //   // set initial state:
  //   this.state.checked = false;
  //   console.log(this);
  // }
  toggle(e) {
    let checked = !this.state.checked;
    this.setState({checked});
    console.log(this.state);
  }
  render({ }, { checked }) {

    return (
      <label>
        <input
          type="checkbox"
          checked={checked}
          onClick={this.toggle.bind(this)} />
      </label>
    );
  }
}

// Using linkState.
class TextFoo extends Component {
  render({ }, { text }) {
    return <input value={text} onInput={this.linkState('text')} />;
  }
}

// Using linkState's second parameter ('path')
// It lets you provide a path on the event object to use as the linked value.
// @see: https://developer.mozilla.org/en-US/docs/Web/API/Event
class Foo extends Component {
  render({ }, { answer }) {
    return (
      <div>
        <input type="radio" name="demo"
          value="yes" checked={answer == 'yes'}
          onChange={this.linkState('answer', 'target.value')}
        />
        <input type="radio" name="demo"
          value="no" checked={answer == 'no'}
          onChange={this.linkState('answer', 'target.value')}
        />
      </div>
    );
  }
}

// render an instance of Clock into <body>:
render(<Clock />, document.getElementById('app'));
render(<Link href="http://example.com" prop2="something">link</Link>, document.getElementById('app'));
render(<MyForm />, document.getElementById('app'));
render(<Foo />, document.getElementById('app'));
render(<TextFoo />, document.getElementById('app'));
