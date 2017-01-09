"use strict";

import { hello } from "app/modules/es6";
import { h, render, Component } from 'preact';

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

// Development only...
require('preact/devtools');

class App extends Component {
  constructor() {
    super();
    // set initial state:
    // this.state.time = Date.now();
    this.state.main = {};
  }

  componentWillMount() {
    fetch('/data/_main.json', {
      method: 'get'
    }).then((res) => {
      return res.json();
    }).then((data) => {
      this.setState({main: data});
    }).catch((err) => {
      console.error(err);
    });
  }

  componentDidMount() {
    // update time every second
    // this.timer = setInterval(() => {
    //   this.setState({ time: Date.now() });
    // }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable.
    // clearInterval(this.timer);
  }

  render(props, state) {
    let {projectTitle, version} = state.main;
    return (
      <div id="app">
        <Header title={projectTitle } version={ version } />
        <MainContent />
      </div>
    )
  }
}

const Header = ({ title, version }) => (
  <header class="doc__header">
    <div class="container">
      <h1>{ title } <span class="small">v{ version }</span></h1>
      <nav class="btn-group">
        <a href="#" class="btn"></a>
      </nav>
      <p class="intro">intro</p>
    </div>
  </header>
);

const MainContent = () => (
  <main>
    <p>Main</p>
  </main>
);

render(<App />, document.body);
