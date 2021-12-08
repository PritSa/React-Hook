//Tutorial 2  : useStateHook
//Hooks is a special function that lets you hook into react feature so useState hook is a
//function that let you add react state to functional component

import React, {useState} from 'react'

const HookCounter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>CLick  {count }</button>
        </div>
    )
}

export default HookCounter


//Create a functional component
//import useState from react

//How to use hooks in our component?
//hooks are just function which accepts an argument which is the initial value of state property
//and returns the current value of state property and  a method that is capable of
//updating that state property and thats sound complicated that it is so lets see the code
//i.e  const [count, setcount] = useState(0).....(this is also called array destructuring feature of es6)
//with this we basically have step and step three implemented a state variable count
//initialize to zero and method setCount capableof changing count variable.
//we can now use these variable in the JSX the innertext {count} what we want to render
//and onCLick we call setCount passing in the new count value and 
//new count value is current count + 1
//since this becomes a function call lets convert it into an arrow function
//i.e <button onClick={()=>setCount(count + 1)}> {count }</button>
//we have implimented all three steps

//lets include HookCounter in App component and save the file now look at browser 
//this exactly work the same
//this is the basic exaple of useState hook

//Rules Of HOOKS

//1.only call the hook at the top level
//2.only call hooks from react function


//Now lets check how to set state based on previous state value
//once again we are going to implement the counter but this counter will have buttons
//to increment decrement and reset the count value
//Lets create new file HookCounter2.js

