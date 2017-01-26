/**
 * Microcosm example w/o React.
 *
 * This includes:
 * x Microcosm (repo) - like redux stores
 * x Domains - like redux reducers (but different)
 * x Actions - which are not just static object but functions.
 */

import Microcosm from 'microcosm'
const start = () => {
  return (action) => {
    action.resolve(action)
  }
}
// Action
const increase = () => {
  return function (action) {
    action.open('open payload')
    setTimeout(() => action.send('loading payload'), 500); // triggers action.loading and .onUpdate()
    setTimeout(() => action.resolve(action), 1000)
  }
}
const decrease = () => {
  return (action) => {
    action.resolve(action)
  }
}

// Domain is like a Reducer.
const Count = {
  getInitialState() {
    return {
      type: 'Hello World',
      count: 0,
      addActionHistory: false,
      renderCount: 0,
      actions: [],
    }
  },
  start (state, action) {
    return Object.assign({}, state, {
      addActionHistory: true,
      renderCount: state.renderCount + 1,
      actions: [].concat(state.actions, [action]),
    })
  },
  open (state, payload) {
    console.log("=============")
    console.log("open")
    console.log("state:", state)
    console.log("payload:", payload)
    return Object.assign({}, state, {
      type: "OPEN...",
      addActionHistory: false,
    })
  },
  loading (state, payload) {
    console.log("=============")
    console.log("loading")
    console.log("state:", state)
    console.log("payload:", payload)
    return Object.assign({}, state, {
      type: "LOADING...",
      addActionHistory: false,
    })
  },
  increase (state, action) {
    console.log("=============")
    console.log("done/default/resolve")
    console.log("state:", state)
    console.log("payload:", action)
    return Object.assign({}, state, {
      type: "DONE",
      count: state.count + 1,
      addActionHistory: true,
      renderCount: state.renderCount + 1,
      actions: [].concat(state.actions, [action]),
    })
  },
  decrease (state, action) {
    return Object.assign({}, state, {
      type: "DONE",
      count: state.count - 1,
      addActionHistory: true,
      renderCount: state.renderCount + 1,
      actions: [].concat(state.actions, [action]),
    })
  },
  // Like the switch statements in a reducer.
  register() {
    // Why does this get called so many times?
    console.log("=============")
    console.log("Function to string:", [increase].toString())
    console.log("Function to string:", [increase.open].toString())
    console.log("Function to string:", [increase.loading].toString())
    console.log("Function to string:", [increase.done].toString())
    return {
      [start]: this.start,
      [increase.open]: this.open,
      [increase.loading]: this.loading,
      [increase]: this.increase, // defaults to calling increase.done
      [decrease]: this.decrease,
      // ['INCREASE_COUNTER']: this.increase
    }
  }
}

// Repo (microcosm) is like a Store
class Repo extends Microcosm {
  setup() {
    // Like createStore (?)
    this.addDomain('counter', Count)
  }
}

// Initialize empty list of actions for undo/redo.
let actionList = []

// Like createStore.
const repo = new Repo({
  maxHistory: Infinity, // needed for checkout to work.
})
// Naive Renderer.
const render = () => {
  const counter = repo.state.counter
  document.getElementById('app').getElementsByTagName('h1')[0].innerHTML = counter.type

  if (counter.addActionHistory) {
    document.getElementById('count').innerHTML = counter.count

    actionList = counter.actions

    document.getElementById('action-nav').innerHTML = ''
    actionList.forEach((v, k) => {
      let el = document.createElement("a")
      el.setAttribute('href', `#${k}`)
      el.innerHTML = k
      el.classList.add('btn')
      document.getElementById('action-nav').appendChild(el)
    })

  }
}

document.getElementById('increase').addEventListener('click', function () {
  repo.push(increase)
})
document.getElementById('decrease').addEventListener('click', function () {
  repo.push(decrease)
})
document.getElementById('action-nav').addEventListener('click', function (e) {
  e.preventDefault()
  repo.checkout(actionList[e.target.getAttribute('href').substr(1)])
})

/**
 * repon.on('change', fn) is like store.subscribe(fn)
 */
repo.on('change', function () {
  render()
})

// render(); // this wouldn't record an action as my first action.
repo.push(start)

// let actionList = []
// let interval = setInterval(function () {
//   // repo.push is like store.dispatch
//   // BUT you push a function not a string.
//   // BUT you can just push a string as well.
//   actionList.push(repo.push(increase))
//   // actionList.push(repo.push('INCREASE_COUNTER'))
//   // console.log(repo.state.count)
//   console.log(actionList)
// }, 1000)
//
// setTimeout(function () {
//   clearInterval(interval)
//   repo.checkout(actionList[0])
//   console.log(repo.state.count)
// }, 10000)
