//Tutorial 9:  Run effects only once

import React,{useState, useEffect} from 'react'

const HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove' , logMousePosition)
        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove' , logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse

//Create functional componet import useState and useEffect
//create two state variable for X and Y initialize to 0
//in the JSX lets render teh x and y coordinante
//now we need to add event listerer  for the mouse event

//this is where we use useEffect hook
//useEffect accept a function as an argument within teh function lets first 
//add a log statement 'useEffect called ' and then add a event listener
//so window.addeventlisterner now we listen to the mousemove event and teh event handler
//is logMousePosition
//i.e  window.addEventListener('mousemove' , logMousePosition)

//lets define logMousePosition it going to accept event as its argument and within the body
//lets log mouse event then we are going to set x and y cordinate

//Add this component in APP component and save the file and look at the browser
//in the console we have useEffect called from teh initial render
//now when we move the mouse we can see that the effect is called every time the
//component re render this is not surprising though as it is exactly what we learned in previuos video
//The effect is called after every render unless you specify the dependency array

//For our example we dont really want the effect to depend on anything we want
//to be called it once on initial render only and the way we achieve that is simply 
//specifying an empty array as a second parameter to useEffect 
//we are basically telling react hey this particular effect does not depend
//on any props or state so there is just no reason for you to call
//this effect on re render and react replies so 
//you want me to call this effect on initial render and forget about it 
//and i can do that and sure enough we have mimicked componentDidMount if
//we save teh file and head back to the browser 
//we can see we have called useEffect on initial render and 
//When we move teh mouse arrroundwe only have the mouse event logs
//useEffect is not  called on sunsequent renders so the point to keep in mind
//from this example is that we can mimic componentDidMount with useEffect hook
//by simply passing in an empty array as the second parameter to useEffect 

//Now how do we will mimic this lifecycle functionality in useEffect
//It is pretty simple the function which is passed to useEffect can return a function
//which will be executes when the component will unmount so 
//whatever you return is basically your clean up function 
//(in HookMouse component) from  an arrow function passed to useEffect and
//we return another clean up function

//and we remove the eventlistener

//i.e return () => {console.log('Component unmounting code');
// window.removeEventListener('mousemove' , logMousePosition)}

//lets save the files and  test this out
//if we move teh mouse arount we see the log statement a toggle dispaly and 
//you can see the statement component unmonting code in the console
//this means our event listener is now removed if we move the mouse arount again
// we can see that we dont have any warning or the log statement from before
//so this is fourth example

//The point here is that when you want to execute some component clean up code
//you include it in a function and return that function
//from the function passed to useEffect 
//the cleanup code can be cancelling subscription, timers or
//removing event handlers as we just seen so that is about using the useEffect eith clean up code
//