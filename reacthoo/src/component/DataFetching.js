//Tutorial 12: Fetching Data with useEffect
/*
import React,{useState, useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(Response);
            setPost(response.data)
        }).catch(error => {
            console.log(Error);
        })
    }, [])
    return (
        <div>
            <ul>
            {post.map(post => (
                <li key={post.id}>{post.title}</li>
                ))}
                
            </ul>
        </div>
    )
}

export default DataFetching
*/
//Create a functional component
//import useEffect and useState
//also import axios as they are required for datafetching
//now from google search JSONPlaceholder we will take a JSONdata from it 

//now lets create a new variable const [post, setPost] = useState([])
//now lets create an effect to fetch the data from url
//useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/posts')})
//we make a get request using axios now this get request returns a promise
//so .then(response => {console.log(response)}) and in
//.catch(error => { console.log(error)})
//netx step is to render the list of post in the browser
//so in JSX make unorder list and we are going to map over post
//so for each post we are going to return list items where key={post.id} and 
//inner HTML will be post.title
//now lets save the file and add component in APP.js and look at the browser
//if we check console we have response that is object which contains array of post
//nothing is render in screen since we have not settting the state
//now lets do that
//after conslole statement call setPost(response.data) passing in response.data
//this will update teh post state variable which will be render in ul
//now save  this and look at the browser we can see the post titles are now render in UI
//if we take look at console we have an infinite loop of data fetching 
//we want to fetch data only once on componentDidMount and it is achieved by
//specifying  empty dependency list to an useEffect hook []
//if we now take a look at browser data is only fetch once and same is render in UI

//Tutorial 13:Fetching data with useEffect part 2

//In this tutorial lets learn how to frtch individual posts by passing teh post ID to the get request
//Fist step- we need to create an input element that will accept a post id from the user
//so in JSX lets add input element and this is going to be controlled component
//meaning we need to set the value and listen to the onChange event to assign the value back to 
//the input element
//so basically we need a state variable, lets create state variable const [id, setId] =useState([1])
//now on input element we assign ID to value and on change we are going to call setID so we listen to
//the event call setId() passing in e.target.value i.e setId( e.target.value)
//next we need to make couple of changes to the existing code
//first is changing teh url end point we need to add backtick and within it /${id}
//i.e `https://jsonplaceholder.typicode.com/posts/${id}`
//when we make this get request we get back a single post as opposed to an array of post
//so lets change variable to post and setPost, so initial value will be empty object 
//instead of empty array
//now next in the promise we will call setPost
//finally in the JSX lets comment out list of post and instead render sigle post {post.title}

import React,{useState, useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(Response);
            setPost(response.data)
        }).catch(error => {
            console.log(Error);
        })
    }, [idFromButtonClick])

    return (
        <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type="button" onClick= {handleClick}>Fetch Post </button>
       <div> {post.title} </div>
            {/* <ul>
            {post.map(post => (
                <li key={post.id}>{post.title}</li>
                ))}
                
            </ul> */}
           
        </div>
    )
}

export default DataFetching

//if we save the file and go back to the browser we can see the post title with ID equal to 2
//if we chang the Id =2 still title is not changing we still see old title
//that is beacuse we have specify the empty array as dependency list our effect though 
//depend on id so lets sepecify id as dependency and now when we look at browser we see
//post with id=1 if we remove the id the API returns all the hundred post as an array which we will ignoore noe
//lets go wth non empty values only 
//if we change id=10 the title also get changes 
//so we are able to fetch an indicidual post by passing in the ID entered by the user
//now the way we have written the code now
//on every character  you type into the input field the effect is triggered which executes another data
//fetching request what would be better is if we  could trigger the request on button click lets see 
//how to do that in next video

//Tutorial 14: Fetching data with useEffect part 3

//so we will see how to trigger the effect on a button click typically 
//what we will do is vreate a button and add a clickHandler and within clickHandler we make get request 
//and that is fine but we want to understand how to so same with useEffect hook
//lets begin
//first we need to state variable whose value is change based on button click
//so lets create a new variable const [idFromButtonClick, setIdFromButtonClick] = useState(1)
//next add button in JSX and onclick handler
//now save teh file and look at browser we are able to fetch the data on button click