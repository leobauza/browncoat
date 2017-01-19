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
    action.open('open payload');
    setTimeout(() => action.send('loading payload'), 500); // triggers action.loading and .onUpdate()
    setTimeout(() => action.resolve('done payload'), 1000);
  };
}
const decrease = () => {
  return;
}

// Domain is like a Reducer.
const Count = {
  getInitialState() {
    return {
      type: 'Hello World',
      count: 0
    };
  },
  open (state, payload) {
    console.log("=============");
    console.log("open");
    console.log("state:", state);
    console.log("payload:", payload);
    return Object.assign({}, state, {
      type: "OPEN..."
    });
  },
  loading (state, payload) {
    console.log("=============");
    console.log("loading");
    console.log("state:", state);
    console.log("payload:", payload);
    return Object.assign({}, state, {
      type: "LOADING..."
    });
  },
  increase (state, payload) {
    console.log("=============");
    console.log("done/default/resolve");
    console.log("state:", state);
    console.log("payload:", payload);
    return Object.assign({}, state, {
      type: "DONE",
      count: state.count + 1
    });
  },
  decrease (state, payload) {
    return Object.assign({}, state, {
      type: "DONE",
      count: state.count - 1
    });
  },
  // Like the switch statements in a reducer.
  register() {
    // Why does this get called so many times?
    console.log("=============");
    console.log("Function to string:", [increase].toString());
    console.log("Function to string:", [increase.open].toString());
    console.log("Function to string:", [increase.loading].toString());
    console.log("Function to string:", [increase.done].toString());
    return {
      [increase.open]: this.open,
      [increase.loading]: this.loading,
      [increase]: this.increase, // defaults to calling increase.done
      [decrease]: this.decrease
      // ['INCREASE_COUNTER']: this.increase
    };
  }
}

// Repo (microcosm) is like a Store
class Repo extends Microcosm {
  setup() {
    // Like createStore (?)
    this.addDomain('counter', Count);
  }
}

// Initialize empty list of actions for undo/redo.
let actionList = [];
let currentCount = 0;
let renderCount = 0;
// Like createStore.
const repo = new Repo({
  maxHistory: Infinity // needed for checkout to work.
});
// Naive Renderer.
const render = () => {
  console.log(repo.state.counter)
  document.getElementById('app').getElementsByTagName('h1')[0].innerHTML = repo.state.counter.type;

  if (repo.state.counter.count !== currentCount) {
    document.getElementById('count').innerHTML = repo.state.counter.count;
    let el = document.createElement("a");
    el.setAttribute('href', `#${renderCount}`);
    el.innerHTML = currentCount;
    el.classList.add('btn');
    document.getElementById('action-nav').appendChild(el);
    currentCount = repo.state.counter.count;
    renderCount += 1;
  }
}

document.getElementById('increase').addEventListener('click', function () {
  actionList.push(repo.push(increase));
});
document.getElementById('decrease').addEventListener('click', function () {
  actionList.push(repo.push(decrease));
});

/**
 * repon.on('change', fn) is like store.subscribe(fn)
 */
repo.on('change', function () {
  render();
});
render();

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
