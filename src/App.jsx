import React from 'react'
import State from './State.jsx'
import Event from './Event.jsx'

function App() {
  return (
    <div>
      <h1> Hello,Welcome to My React </h1>

      <State/>

      <Event/>
    </div>
  )
}

export default App

/**
 * Virtual dom:
The Virtual DOM (VDOM) is a lightweight, in-memory representation of the real Document Object Model (DOM) provided by libraries like React.
Instead of directly interacting with the browser's DOM—which is relatively slow—React creates a virtual copy of it in JavaScript memory.

 */
