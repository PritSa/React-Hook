//Tutorial 11: useEffect with incorrect dependency

import React, {useState, useEffect} from 'react'

const IntervalHookCounter = () => {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    
    useEffect(() => {
        function doSomething() {
            console.log();
        }
        doSomething()

        const interval =setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [] )   
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter

//import useState, create variable count initialize to zero
//we also render state variable in browser i.e {count}
//now set up timerr you can that we need to replicate componetDidMount and the tick method
//which we have seen in IntervalCOunter
//lets start with tick method
//i.e const tick = () => { setCount(count + 1)}
//next use useEffect to replicate componentDidMount we have already learned  how to do that
//import useEffect which is basically function call passing in arrow function and within this function
//we set up an arrow function i.e useEffect(() => {
// const interval =setInterval(tick, 1000)})
//Now this effect is going to fire after every render if we want to set up interval once on
//initial render that is componentDidMount equvalent then we simply pass an empty array as the 
//dependency list  and that is second parameter an empty array []
//final step is to replicate componentWillUnmount for the clean up
//so from the useEffect we return a function within that function we clear the interval
//i.e return () => { clearInterval(interval)}

//lets save the file and include it in app.js if we take look at browser
//WE can see our IntervalCounter is working as expected but IntervalHookCounter is displying the value 
//of 1 and not incrementing every second 
//lets figure out the problem in our mind the problem statement is simple create an interval once
//destroy it once so cretaed in componetDidMount and destriy in componetWillUmnount
//if we take a look at the our hookcounter we have definately translated that empty 
//depency list so the timer is set only once and return function to destroy the timer 
//that we have created 
//why then our counter doesnt work as expected
//the problem here is our mental model and i am going to quote from Dan'artical
//if you thing dependency array is a way to specify when you want to return the effect 
//then we are going to run into problems instead dependency array should be thought of as a way
//to let React know about everything that the effect must watch for changes so our mindset was
//to simply replicate componentDidMount however by specifying an empty array we
//have basically told react to ignore watching for changes in the count variable 
//so react goes like hey on initial render the count value is 0 which
//implies setCOunt will set it to 0 + 1 = 1 and  I will render that in browser
//now we are telling react i dont have to watch for changes in the count value
//the count value is 1 right now and i will just render that count value through the different rerender
//cycles if we want to watch a variable just add it to the dependency array
//what i am trying to say here is that it is common beginners mistake to leave out the 
//dependency list if we now add count as a dependency [count] and take a look at the browser 
//we can see that we got an expected result so whenever you try to specify an empty dependency list
//please make sure that you really dont have any.
//By the way for this example there is another way to get working without the dependency list so 
//in the tick function we use second form of set count we get access to previous count and we set previus
//count plus 1
//i.e const tick = () => {setCount(prevCount => prevCount + 1)}
//since the setCount keeps track of the previous value we dont have to specify count as a dependency
//for this particular effect so no need to pass [count] dependency
//now save the file and take look at browser
//we can see that counter works perfectly 
//so always thik before apecifying an empty dependency array 

//let me also give you some handy tip in this regard sometimes you might want to call
//a function within  useEffect so 
//function doSomething() {console.log(someProp)}
//now lets call it in useEffect doSomething()
//when you do this you look at useEffect and its very easy to forget that
//someProp is dependency 
//someProp is used and do something which is called in useEffect but it doesnt necessary to seem obvous when
//we take a look at useEffect so what is recommentded is whenever we need to call a function with useEffcet
//just go ahead and define the function with the useEffect so i am going to  move
//the function inside useeffect this way when you read through the useEffect
//you much more like to see that you have a prop which has to be specified as a dependency
//all right that is pretty much it for this example
//i wanted to show you guys how easy it is to make mistakes when specifying the dependency list
//for useEffect

//now onle last thing to discuss is about specifying multiple effects if 
//you recollect we have seen that in class component related code is split into different lifeCycle method
//wheras unrelated code is put together in same lifeCycle methods 
//hooks solve that it is possible to include multiple useEffect calls within the same componet
//lets quickly see the screenshot from Recat.org document



