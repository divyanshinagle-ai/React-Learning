import React from 'react'

function Greet(props) {
    console.log(props)
  return (
    <div>
      <h1>Good Morning, Happy Birthday {props.name} </h1>
      <h1>Welcome to React, {props.name}!</h1>
    </div>
  )
}


export default Greet

/**
 * COMPONENT- They are the bulding blocks of React application.
 *  They are reusable pieces of code that return a react element to be rendede to the page.
 * Components can be defined as classes or functions 
 * In this case , Greet is a functional component that takes props as an agruement and returns jsx to be rendered 
 * 
 * JSX - JSX stands for java script XML
 *      It is a syntax extension for js that allows you to write HTML like code in your js file.
 *      jSX is used in react to describe what the UI should look like 
 *      its"t required to use JSx in react but it is recommended to use in react  as it makes the code more readable and easier ti understant
 * 
 * PROPS - props are used to pass data from parent component to child component,
 *       They are read only and are immutable,
 *       They can be used as attributes in tags 
 *       More than 1 props can be passed at a time 
 *      To write numbers and boolean values use(except string everything goes in the curly braces){} 
 * 
 * How does a component receive props?
 * React bundles all the attributes into one object called props. You usually destructure the fields you need right in the parameter list: function Card({ name }).
 *
 * 
 */