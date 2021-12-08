//Tutorial 19: useReducer (simple state and action)

import React, {useReducer} from 'react'


const initialState = 0
const reducer=(state, action) => {
switch(action) {
    case 'increment':
        return state + 1
        case 'decrement':
            return state-1
            case 'reset':
                return initialState
                default:
                    return state
}
}

function CounterOne() {

   const[count, dispath] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick = { () => dispath('increment')}>Increment</button>
            <button onClick = { () => dispath('decrement')}>Decrement</button>
            <button onClick = { () => dispath('reset')}>Reset</button>
        </div>
    )
}

export default  CounterOne

//Create functional component for JSX create 3 button, increment, decrement, reset
//we need count variable that can be displayed in the JSX and this is where we need useReducer
//there are couple of things to understand so lets break it down

//first step: we need to import useReducer from react
//Just like other hooks usereducer is also a function we simply have to call it in our functional
//component i.e useReducer()
//now lets try to recollect the syntax we learned that useReducer accepts two argument
//first one is a reducer function and second one is the initial state but these are not defined yet
//so first step is to define the initial state and reducer function
//i.e useReducer(reducer, initialState)

//Second step: lets define reducer function and initial state i am going to define them
//outside the compponent
//initialState: our counter will start with initialvalue 0 
//so const initialState = 0
//next define reducer function so const reducer = () =>{}
//reducer function also accepts two values and returns one value the two value
//accepted are currentState and  the action these are parameter to reducer function 
//i.e const reducer = (state, action) => {}
//now i also mentioned that the reducer function returns one value which is the new state
//just for teh sake of understanding i am going to add a statement return newState
//const reducer = (state, action) => {return newState}
//so the reducer function accepts the currentstate and returns the new state but for this
//transition to happen we need something and that something is  this action parameter
//you can thing of action as an instruction to the reducer function based on what the action 
//specifies the reducer function performs the necessary state transition for our example
//we have 3 action i.e increment, decreement and reset the convention to execute this code based on
//the action is to use switch statement so within the reducer function body we are going to add specific statement
//the switch expression is the action teh action itself can be increment in which
//case the nwe state will be current state plus one
//action can also be decrement in which case  will be currentState -1 
//finally the action can be reset in which case the new state will just be the initial state of zero
//we can also have a default case for which i will simply returns a current state without any changes

//this is the reducer function which is passed to the useReducerHook 
//based on teh action value the function will either increment decrement or reset the counter value
//so that is our step two defining the initialState and the reducer function

//Third step: we need to get hold of a value to display in the JSX and we also need a way to call
//the reducer function with the appropriate action now that happens to be really simple as that
//is exactly what useReducer function returns similarly to useState , useReducer also
//returns pair of value which we can get hold off using array destructuring 
//so count [count, dispatch] = useReducer(reducer, initialState)
//so useReducer returns currentState which we have called as count paired with a dispath method
//dispath method allows you to execute code corresponding to a particular action
//in the JSX we can now add the div tag that dispalys the count valye count - count{}
//and to each of teh button we add a clickHandler so onClick = arrow function where we dispath an action
//increemnt action
//onClick = {() => dispath('increment')}
//similarly for remaining buttons

//so we can clearly see that the sregument to the dispath method is the action  that is specified in the 
//reducer function when you dispath increement it add 1 to teh currentcount value
//if we dispatch decreemnt it subtracts one from the curent counter
//if we dispath teh reset value then it will reset teh action and returs the initial value to 0
//lets save teh file and include in app.js
//and test it out

//counter is working as expected

