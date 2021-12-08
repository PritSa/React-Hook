//Tutorial 2: useState Hook

//Let create a normal class based counter component

import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount= () =>{
        this.setState({
         count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
               <button onClick = {this.incrementCount}> count {this.state.count}</button> 
            </div>
        )
    }
}

export default ClassCounter


//Now lets create the same counter with the help of Hooks
//Create new file HookCounter.js

