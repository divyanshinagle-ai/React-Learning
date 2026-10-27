import { useState } from 'react';


function Event() {
  const [text, setText] = useState("");

  function handleClick() {
    alert("Hello It's DIVI here!");
  }

  function handleChange(e) {
    setText(e.target.value);
  }


  function handleClear() {
    setText("");
  }


  return (
    <div>
      <h3>---------Event Handeler----------</h3>
      {/* Click */}
      <button onClick={handleClick}>Display</button>


      {/* onChange */}
      <input type="text" value={text} onChange={handleChange} />
      <h1>{text}</h1>


      <button onClick={handleClear}>ClearAll</button>
    </div>
  );
}


export default Event;


/**
 * EVENT HANDELLING in react is a process of responding to user ineractions such as clicks , input changes and form submission 
 * React provides a way to handel events using event handelers which are functions that are called when a specific event occurs
 */
/*
   * Normal - js - click
   * React - js - onClick, onInput, onChange, onSubmit, onKeypress, onMouseover
   */

