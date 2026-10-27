import {useState} from 'react';


function State() {
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count+1)
    }

    function decrease(){
        setCount(count - 1)
    }
  return (
    <div>
      <h1> -------------STATE------------</h1>
      <h2> Count : {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default State

/**
 * HOOKS - A "hook" is just a special function React provides, and they all start with use
 * 
 * STATE- Data a component remembers and can change over time, like a count, a toggle, or text a user typed. 
 * Unlike props, a component owns and updates its own state.
 * It enables you to store and update values that can change over time, such as user input, counters, or any other dynamic data. 
 * The useState hook returns an array with two elements: the current state value and a function to update that value. 
 * When the state is updated, React re-renders the component to reflect the new state.
 * 
 * diffrence between props and state?
 * props are immutable and state are mutable
 * 
 * re-render happens when React executes a component function again to compute an updated view of the user interface based on changes to state or props.
 * 
 * Why never assign to state directly?
count = count + 1 does not tell React anything, so it never re-renders (and count is const anyway). Always call the setter, 
e.g. setCount(count + 1).
 */