/**
 * Microcosm example w/o React.
 *
 * This includes:
 * x Microcosm (repo) - like redux stores
 * x Domains - like redux reducers (but different)
 * x Actions - which are not just static object but functions.
 */

import Microcosm from 'microcosm';

// Action
const increase = () => {
  return function (action) {
    action.open();
    action.send(1); // triggers action.loading and .onUpdate()
    setTimeout(function () {
      action.resolve();
    }, 1000);
  };
}

// Domain is like a Reducer.
const Count = {
  getInitialState() {
    return 0;
  },
  open (state) {
    console.log("open", state);
    return "CHANGING...";
  },
  loading (state, payload) {
    console.log("loading", state, payload);
  },
  increase (state) {
    // console.log(state, data);
    // return state + data;
    return state + 1;
  },
  // Like the switch statements in a reducer.
  register() {
    // Why does this get called twice?
    console.log("Function to string:", [increase.done].toString());
    return {
      [increase.open]: this.open,
      [increase.loading]: this.loading,
      [increase]: this.increase, // defaults to calling increase.done
      ['INCREASE_COUNTER']: this.increase
    };
  }
}

// Repo (microcosm) is like a Store
class Repo extends Microcosm {
  setup() {
    // Like createStore (?)
    this.addDomain('count', Count);
  }
}

// Like createStore.
const repo = new Repo({
  maxHistory: Infinity // needed for checkout to work.
});

// Naive Renderer.
const render = () => {
  document.getElementById('app').getElementsByTagName('h1')[0].innerHTML = repo.state.count;
}

/**
 * repon.on('change', fn) is like store.subscribe(fn)
 */
repo.on('change', function () {
  render();
});
render();

document.addEventListener('click', function () {
  repo.push(increase);
});

// let actionList = [];
// let interval = setInterval(function () {
//   // repo.push is like store.dispatch
//   // BUT you push a function not a string.
//   // BUT you can just push a string as well.
//   actionList.push(repo.push(increase));
//   // actionList.push(repo.push('INCREASE_COUNTER'));
//   // console.log(repo.state.count);
//   console.log(actionList);
// }, 1000);
//
// setTimeout(function () {
//   clearInterval(interval);
//   repo.checkout(actionList[0])
//   console.log(repo.state.count);
// }, 10000);
