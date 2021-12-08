//Tutorial 20: useReducer(Complex state and actions)

//Lets copy the code from CounterOne and make necessary changes
//convert initialState to an object and going to have a property called firstCounter set to 0
//in the JSX now we need to render() this firstCounter property

import React, {useReducer} from 'react'


const initialState = {
    firstCounter: 0 ,
    secondCounter: 10
}
const reducer=(state, action) => {
switch(action.type) {
    case 'increment':
        return {...state,firstCounter: state.firstCounter + action.value }
    case 'decrement':
        return {...state,firstCounter: state.firstCounter - action.value }
    case 'incrementTwo':
        return {...state,secondCounter: state.secondCounter + action.value }
    case 'decrementTwo':
        return {...state,secondCounter: state.secondCounter - action.value }
    case 'reset':
        return initialState
    default:
         return state
}
}

function CounterTwo() {

   const[count, dispath] = useReducer(reducer, initialState)
    return (
        <div>
            <div>FirstCounter - {count.firstCounter} </div>
            <div>SecondCounter - {count.secondCounter} </div>
            <button onClick = { () => dispath({type: 'increment', value:1 })}>Increment</button>
            <button onClick = { () => dispath({type: 'decrement', value:1})}>Decrement</button>
            <button onClick = { () => dispath({type: 'increment', value:5 })}>Increment Five</button>
            <button onClick = { () => dispath({type: 'decrement', value:5})}>Decrement Five</button>
            <div>
            <button onClick = { () => dispath({type: 'incrementTwo', value:1 })}>IncrementCounterTwo</button>
            <button onClick = { () => dispath({type: 'decrementTwo', value:1})}>DecrementCounterTwo</button>
            </div>
            <button onClick = { () => dispath({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default  CounterTwo

//in the JSX now we need to render() this firstCounter property the count is going to be 
//count.firstCounter i.e count - {count.firstCounter} 
//so count itself refers to the entire state object and we only need the first counter value 
//so count.firstcounter
//finally wee convert our simple string action into an object as well the object
//is going to contain a property called type which is a string so curly braces type increment 
//i.e dispath({type: 'increment'})} same for type: 'Decrement' and type: 'reset'
//and in the reducer function the switch expression is now going to be action.type
//so action refers the entire object and we access the type property 
//finally for now increment and decrement actions we now need to return the newstate object
//i.e  {firstCounter: state.firstCounter + 1 }
//and that is it 
//the component state and action are now objects in App.js i am going to commentout 
//CounterOne and add CounterTwo 
//lets now test the code, when we click the increemnt button value increses when we click decrement 
//value decreases and when click reset it will set back to 0 so useReducer with state and action as object

//Now the question is what is advantage of using this particular pattern well
//I can think of two scenarios where it could be helpful 
//the first scenario is concerning the value by which we need to increment and decrement the counter
//right now you can see that the value is one 
//what if we wanted to add two more buttons that could be increment and decrement the value  by 5

//that is easy when action is an object 
//right now our action object has just the one property which is action type we can add second property
//called value which should be the number to increment or decrement the counter so for the 
//existing buttons we add the value property set to one
//now ia m going to duplicate two buttons but this time set the value property to five
//the text is also going to be increment five and decrement five
//back in the reducaer function instead  of the hard coded value of 1 we specify action.value

//now save the file and head back to browser
//if we click on increment counter value increses by 1 on decreement it decreses by 1
//when click on incremenrt by five value increses by 5 and so on 
//so by making use of an anction as an object we can use additional data in reducer function that is  the 
//first scenario

//in second scenario we are talking about state as an object suppose you wanted to maintain two diff
//counters that turns out to be really simple if your state is an object you simply add another 
//property to your state
//lets add second counter and the initial value for this counter is 10 to change the second counter value
//i am going to create two more switch  cases  incrementTwo and decreementTwo
//these are for second counter
//now these are two properties in the state object we're changing only one at  a time
//to get the expected output we have modified teh return statement to merge the state
//properties and we have alredy seen how to do that using spread operator
//so within the object we spread the state object ...spread and then override the appropriate property
//In the render function we can now add the JSX pertaining  to the second couter
//now add two more buttons to increment this second counter 
//lets save the file and look at browser
//our secondCounter is also work as expected

//So by using state as an object we are able to keep track of two different counters so
//what i want to take away from this second examplw is that we can maintain both the state and action as 
//objects by using action as an object we are able to pass additional data to reducer function
//by using state as an object we are able to keep track of multiple state variables 
//we have this approach of maintaining multiple variables in a single state object is suited 
//dealing with global state but right now we are dealing with localState
//and when dealing with local state we have another way to keep track of multiple variable 
//lets take a look at that in next video


//Tutorial 21: Multiple useReducerHook

