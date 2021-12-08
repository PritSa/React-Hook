//Tutorial 24: Fetching Data with useReducer Part 2

//In the previous video we have learned to frtch the data bu using useState and useEffect Hook
//now lets see how to achieve the same by using the useReducer and useEffect hook

import React,{useReducer, useEffect} from 'react'
import axios from 'axios'


const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
    case 'FETCH_SUCCESS':
        return {
            loading: false,
            post: action.payload,
            error: ''
        }
    case 'FETCH_ERROR':
        return {
            losding: false,
            post:{},
            error: 'Something wents wrong'
        }    
    default:
        return state

}
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type:'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
           dispatch({type:'FETCH_ERROR'})
        })

    }, [])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title} 
           {state.error ? error : null}
        </div>
    )
}

export default DataFetchingTwo

//we will implement the four staep here
//import useReducer and useEffect hooks and then also import axios
//now we use the same state variable from the last video but this time we declare them as 
//properties of a singlr object so
//const initialState = {loading: true, error: '', post: {}}
//next is the reducer function the reducer function accepts state and action as ints argument and 
//returns the updated state if we go back to code from previous video you can see that there are two clear
//transion scenarios one when data was fetch succefully and one wher there was an error fetching the data
//these two scenarios form the switch cases for our reducer function so
//we have added two swicth cases
//we will also add a default case, 
//so all right that is our reducer function now for our third step
//invoking useReducer and useEffect to fetch the data and set the state
//first withing the component we call useReducer passing in the reducer function and the initialState
//const [state, dispatch] = useState(reducer, initialState)
//now we can make out HTTP call
//lets copy useEffect from previous video and make the necessary changes 
//so we change the all occurence of useState with useReducer that is pretty simple
//when datafetching is successful we dispatch  an action the action though is an object with
//type set i.e dispatch({type:'FETCH_SUCCESS', payload: response.data})
//and this will corresppnsd to action.type and action.payload in our  reducer function similary in the 
//catch block we will dispatch an action with type  dispatch(type: 'FETCH_ERROR') and here
//we dont need payload as we have hard-coded the error message in the reducer itself and this needs to be an
//object the final step is to specify the JSX again we are going to copy paste
//the JSX from previous video
//the only chnage we need to make is to append state to all the variable names
//state.loading and state.post.title and state.error this is beacuse they are all part of this state object now
//and that is pretty much it lets save the file and include in app.js and take a look at browser

//so what we done differently from the previous video so useState is replaced by the useReducer
//and we have grouped the related state variables together over here and at the same time state transition are also
//grouped together alright thats all