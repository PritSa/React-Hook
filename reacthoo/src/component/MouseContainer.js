//Tutorial 10: useEffect with cleanup

import React,{useState} from 'react'
import HookMouse from './HookMouse'

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick = {() => setDisplay(!display)}>Toggle dispaly</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer

//create a functionl component import usestate and create dispaly state variable
//teh variable name is dislay the setter is setDispaly and the initial value is true
//now in the JSX lets add button totoggle display variable between true and false
//onClick we call setDisplay passing in not dispaly(!dispaly)
//so we are toggling display value now if this dispalya variable is set to true we
//render the HookMouse Component  
//ie in JSX {display && <HookMouse/>}
//finally in APP component only include teh MouseContainer component 

//if we save all teh files and take look at browser we should have a button and mouse coordinates 
//when i move the mouse arount we can see that coordinates updating and
// teh log statement is printed every time the nouse move
//now lets click on toggle display button this will
//effectively unmount the component from the DOM
//now when i try to move teh mouse around we can see a warning in the console
//below warning we can see the statement mouse event is still being logged
//so event though teh component has been removed the eventlisterner which belongs to that 
//component is still listening and executing and this is what the warning
//indicates as well cant perform a react state update on an ummounted component it
//indicates the memory leak in your application or in
//simpler words react telling us hey you have unmounted teh component but when  you move
//mouse around you are asing me to update the variables for X and Y coordinates the
//only problem is that component has been unmounted when you unmount a component
//make sure you cnacel all your subscription and listeners in other words
//clean up after your component 
//by this way mouse event is logged from HookMouse.js from logMousePosition
//log statement right there i.e logMousePostion code

//Now how do we handle the clean up code
//in class component we have commonentWillUnmount lifecycle hook where you simply add
//window.removeEventListener('mousemove' , this.logMousePosition)

//Now how do we will mimic this lifecycle functionality in useEffect
//It is pretty simple the function which is passed to useEffect can return a function
//which will be executes when the component will unmount so 
//whatever you return is basically your clean up function 
//(in HookMouse component) from  an arrow function passed to useEffect and
//we return another clean up function

//and we remove the eventlistener

