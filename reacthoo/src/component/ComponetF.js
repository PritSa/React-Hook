//Tutorial 15: useContex Hook part 2

import React from 'react'
import {useContext, UserContext} from '../App'

function ComponetF() {
    return (
        <div>
        <UserContext.consumer>
           {
               user => {
                   return <div> User context value {user}</div>
               }
           }
            </UserContext.consumer>
        </div>
    )
}

export default ComponetF

//in the JSX we need to make use of render props pattern to get hold of value passed by the context
//if we save the file and take look at browser

//we have written the code but it is not necessarily the most readable vode just to consume one value there is 
//too much of code suppose there are two values then our codes nesting will again increase 
//if only there was a better way to consume the context value this where the useContext hook comes in picture
//useContext hook lets you consume context value in a more simpler way
//lets learn that approach

//Tutorial 17: useContext part 3

//How to use useContext hook in react
//Here fiest two staep of creating the context and providing a context value remain the same
//the useContext hook only makes the consumption of the context value simpler
//lets see hoe
//For useContext lets comsume the value in ComponentE