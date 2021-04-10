import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

const store = createStore(counterReducer)

const App = () => {
  return(
<div>
  <div>
    {store.getState()}
  </div>
    <button
      onClick={e =>  store.dispatch({type: "INCREMENT"})}
    >
      inc
    </button>
</div>
    )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
