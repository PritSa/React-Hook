//Tutorial 3: useState with prevState

//Now lets check how to set state based on previous state value
//once again we are going to implement the counter but this counter will have buttons
//to increment decrement and reset the count value
//Lets create new file HookCounter2.js

import React, {useState} from 'react'

const HookCounter2 = () => {
    const initialcount = 0
    const [count, setCount] = useState(initialcount)

    const incrementFive = () => {
        for (let i = 0; i< 5; i++ )
        {setCount(prevCount => prevCount + 1)}
    }

    return (
        <div>
            Count: {count}
            <button onClick = {() => setCount(initialcount)}>Reset</button>
            <button onClick ={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick = {() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick = {incrementFive}>Increment Five</button>
        </div>
    )
}

export default HookCounter2

//create functional component
//lets take const intialcount = 0
//then useState hook const [count, setCount] = useState(initialState)
//now add JSX count: {count}
//next we will add 3 buttons for increment , decrement, reset the count value
//for reset button onClick={() => setCount(initialcount)}
//for increment button  onClick={() => setCount(count + 1)}
//for decrement button onClick={() => setCount(count - 1)}

//now lets add acomponent in App component
//save the files and take look at browser

//Clicking on increment count increses
//clicking decrement count decreses
//clicking on reset it grt reset

//Althoght its working fine but it is not a safe and right way to change the count value
//Let me show why with very unlikely piece of code you would implemet

//Let me add another button that increments the count by a value of 5 
//<button onClick = {incrementFive}>Increment 5</button>
//now lets define incrementFive () => { for (let i = 0; i< 5; i++ ){setCount(count + 1)}}
//so rather than incrementing it by value of 5 and simply looping it five times 
//and increementing by one every time

//If we go back to the browser and click on increment 5 you can see that the count is sill
//incremented by only one the setCount method is reading teh
//value of state variable 

//To overcome this we need to use the second form of teh count function instead of passing a
//value of the new state variable we pass in a  function that has access to old state value
//so setCount is going to accept a function that has access to the old count so
//previousCount will be teh argument and the in function body previousCount + 1
//so we are passing teh function that has access to the old value and 
//increment that by 1

// now save teh file and take look at brower we are able to increment the value by 5

//So any time you need to update state value based on previous state value
//always go with the safer option of passing in a function that will set the new state
//value let me make the changes for increment and decrement buttons as  well to copy 
// {setCount(prevCount => prevCount + 1)} and paste it in increment and decrement 
//buttons 
