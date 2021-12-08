//Tutorial 21: Multiple useReducerHook

//Lets copy pate the code from CounterOne.js

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

function CounterThree() {

   const[count, dispath] = useReducer(reducer, initialState)
   const [countTwo, dispathTwo] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick = { () => dispath('increment')}>Increment</button>
            <button onClick = { () => dispath('decrement')}>Decrement</button>
            <button onClick = { () => dispath('reset')}>Reset</button>
<div>
<div>Count - {countTwo}</div>
            <button onClick = { () => dispathTwo('increment')}>Increment</button>
            <button onClick = { () => dispathTwo('decrement')}>Decrement</button>
            <button onClick = { () => dispathTwo('reset')}>Reset</button>
</div>

        </div>
        
    )
}

export default  CounterThree

//in App.js lets include the CounterThree
//The requirement for us is to add another counter
//secondCounter also has a same scenario increment, decrement, reset if this is the scenario then we
//can easily create additional counters by simply specifying multiple Reducer so
//after first useReducer we can call another useReducer 
//i.e const [countTwo, dispathTwo] = useReducer(reducer, initialState)
//now in the JSX duplicate the code this time though the state variable is  countTwo and
// the dispath method is dispathedTwo 

//if we now save the file and take a look at browser we should have two counters
//both working independently even though they're using the same piece of code 
//so when dealing with multiple state variables that have the same state transition
//it is good idea to have multiple useReducers making use of the same reducer function this
//will avoid the complexity of merging  the state if it were to be an object and also 
//prevents us from duplicating code in the reducerFunction like we have already seen in CounterTwo
