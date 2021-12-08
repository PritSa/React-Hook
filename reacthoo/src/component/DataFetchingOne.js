//Tutorial 23: Fetching data with useReducer part 1

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })

    }, [])

    return (
        <div>
           {loading ? 'Loading' : post.title} 
           {error ? error : null}
        </div>
    )
}

export default DataFetchingOne

//Create functional component
//Now lets begin with our import we need useState for managing the componentState and useEffect for the
//side effect.for making the HTTP call we need Axios 
//so import axios from axios
//next step is to define state variable required for this data fetching component for our simple scenario
//we need three state variable 
//A loading flag to indicate the data fetching happening in the background 
//so const [loading, setLoading] = useState(true)
//here initialvalue of state variable will be true. 
//The next state variable will be error message to display an error if something went wrong ever set error
//and the initial value will be an empty string
//so, const [error, setError] = useState('')
//and finally a variable to hold the post which we will be fetching from an API endpoint
//so const [post, setPost] = useState({}) and initial value will be an empty object
//alright we have teh state variables teh next step is  to make the API call and set the appropriate state 
//for side effect we use useEffect it accepts an arrow function as its first parameter and for the second
//parameter we pass in an empty dependency array to ensure our API is only called once
//that is we want the componentDidMount behaviour now within arrow function we make  our get reuest
//for the end point we will again be using a JSON placeholder
//when the get request is made the promise is returned so lets add a then block and catch block
//if the request is successful we make  three state transion 
//first we setLoading  to false  then we setPost variable to response.data 
//which contains the post object
//finally we setError message empty to clear any previous message if at all they were being 
//displayed 
//now our request might not succeed all the time so lets add code in the catch block as well again we 
//first setLoading flag to false after that we set the post object to an empty object to hide 
//any existing post that might be displayed in the browser
//finally we set the error message to something went wrong
//now for the last bit of code lets take care of theJSX if at all the component is
//busy loading the data we are going to display the string loading else we are 
//going to display the post title however if there is an error we also need to dispaly that
//so {loading ? 'Loading' : post.title} 
//and {error ? error : null}

//now lets save teh file and include it in APP.js and head back to the browser
//you can see that when i refreshed the string loading is appear for the fraction of second and 
//then thepost title is displayed and if i wrote an incorrect url the error message get displayed
//the code is working as expected
//if we go back to the code what i want you to note is the way we are using useState 
//we have declare 3 state variable and depending on the API returning a successful response
//or an error we applied the appropriate state transitions in the next video lets see how to achieve 
//same with useReducer Hook

