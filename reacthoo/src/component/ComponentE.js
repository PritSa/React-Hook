//Tutorial 15: useContex Hook part 2

import React, { useContext } from 'react'
import ComponetF from './ComponetF'
import {UserContext} from '../App'

 function ComponentE() {

    const user = useContext(UserContext)
    return (
        <div>
           {user}
        </div>
    )
}

export default ComponentE

//import useContext from react
//import necessary context we have one here i.e UseContext  from App
//call the useContext function passing in context as its argument
//i.e useContext(UserContext)
//lets assign the function to the variable const user = useContext(UserContext)
//and thats it now we can use this values as required 
//now simply render them in JSX

//useContext is the simplest hook to use