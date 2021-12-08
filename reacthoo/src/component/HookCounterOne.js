//Tutorial 7: useEffect after render
/*
import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
<button onClick={() => setCount(count + 1)}> Click  {count}</button>
        </div>
    )
}

export default HookCounterOne
*/

//First step lets create a counter
//we have laready seen how to make clickcounter with the help of useState jook

//import useState to implement the counter
//in a function body lets create a state variable and a corresponsding setter function
//i.e  const [count, setCount] = useState(0)

//next in teh JSX add a button with clickhandler to increment the count
//i.e <button onClick={() => setCount(count + 1)}> Click  {count}</button>
//so the innerHTML displays the count variable and onCLickHandkler SetCount passing in count+1

//lets add this in App componet and save the file now look at the browser
//we have working counter implemented usning Hooks
//but this is nothing new

//what we really want to achive is to change the document title on button click of functional component
//hence we will be using useEffect hook

//so in HookCounterOne.js we are going to import useEffect from React
//Just like useState is also a function we simply have to call it 
//i.e import React, {useState, useEffect} from 'react'   and useEffect()
//For useEffect we simply have to pass in a parameter 
//this parameter are a function which gets executed after every render of the componet
//so lets pass in an arrow function which updates the document title
//i.e useEffect(() => {document.title = `You clicked ${count} times`})
//and that is pretty much it
//lets add this component in APP component save the file and look at browser
//You can see that initially the document title reads you clicked zero times and
//when i clicked on the button the count value increment and document title updated
//so the behaviour is as expected here causing side effect from a functional componet
//using useEffect hook

//Lets see how it all works

//When we specify useEffect we are basically requesting react to execute the function that is 
//passed as an argument every time the component renders and useEffect runs after 
//every render of the component that might seems a bit weired but  conceptually it is what we are
//trying to do with class components as well on initial render we want to execute some code
//and on every render after that we want to execute teh same code 

//with Hooks we have useeffect for that exact same purpose it 
//runs after the first render and after every update

//useEffect runs after every render
//useEffect is placed inside the component by doing this we can easily access the component state
//and theprops without having to write any additional code so that is how 
//to use useEffect to cause a side effect in a functional component 


//In some cases applying useEffect after every render might create a performance problem
//so we need a way to conditionally run an effect from a functionl component 
//Lets take an example to understand how to do that 
//I will quickly wallk throgh the class component implemetation and then we can proceed
//with useEffecr hook infunctional component
//For this example we will continue with the code from previous video
//so go back to the ClassCounterOne and check code and notes

//Tutorial 8: Condtionally run effect

//Lets create a new satte variable for the anme input element 
//so const [name, setName] =useState('')
//netx we add input element <input type="text"  value={name} onChange = {e => setName(e.target.value)}/>
//finally in useEffect i am going to add a log statement useEffect = updating document title
//save teh file and take look at browser i click on button document title change
//when i enter my name we still are updating document title and this is not what we required
//Now queeston is how do we tell react to conditionally ren use effect only when the counnt
//value changes in class component we added condition to compare a prev state with current sate
//and only updated teh state when there is difference if this pattern is so common
//that the react team decided to build this into useEffect

//For conditionally execcuting effect we pass in a second parameter 
//this parameter is an array, within this array we need to specify either props or state
//that we need to watch for only if those props and state specified in this array were change the
//effect would be executed for our example
//we need effect to be executed only when the count value chnages
//so within the array we need to include a count i.e [count]
//now back to the browser and click on button the effect is run 
//now start typing the name we can see that effect is not running anymore after each render

//so this is the point to take away from this example

//In order to conditionally run an effect specify the second parameter to useEffect the
//second parameter is the array of values that the effect depends on
//if the values dont change between the render the effectis simply not run
//so it is good optimization technique to keep in mind


import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] =useState('')

    useEffect(() => {
        console.log('useEffect=Updating document title');
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
        <input type="text"  
        value={name} 
        onChange = {e => setName(e.target.value)}

        />
<button onClick={() => setCount(count + 1)}> Click  {count}</button>
        </div>
    )
}

export default HookCounterOne


