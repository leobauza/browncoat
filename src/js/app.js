"use strict";

import Microcosm from 'microcosm';

const increase = () => {
  return;
}

// Domain. (aka Reducer?)
const Count = {
  getInitialState() {
    console.log("hello");
    return 0;
  },
  increase (state) {
    // console.log(state, data);
    // return state + data;
    return state + 1;
  },
  // Like the switch statements in a reducer.
  register() {
    // Why does this get called twice?
    console.log("Function to string:", [increase].toString());
    return {
      [increase]: this.increase
    };
  }
}

// Repo (microcosm) [store?]
class Repo extends Microcosm {
  setup() {
    // Like createStore (?)
    this.addDomain('count', Count);
  }
}

const repo = new Repo({
  maxHistory: Infinity // needed for checkout to work.
});

// Store.Dispatch-ish
repo.on('change', function () {
  document.getElementsByTagName('h1')[0].innerHTML = repo.state.count;
});

// repo.push(increase);
let actionList = [];
let interval = setInterval(function () {
  actionList.push(repo.push(increase));
  console.log(repo.state.count);
  console.log(actionList);
}, 1000);

setTimeout(function () {
  clearInterval(interval);
  repo.checkout(actionList[3])
  console.log(repo.state.count);
}, 4000);
