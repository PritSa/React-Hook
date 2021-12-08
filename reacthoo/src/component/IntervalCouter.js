//Tutorial 11: useEffect with incorrect dependency

//WE are going to take look at another example this time highlighting a common mistake 
//beginners  such as ourselves are likely to make

//Lets create a simple counter but this time it automatically increment every second
//Lets create a class component for that

import React, { Component } from 'react'

class IntervalCouter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    tick = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <h1>{this.state.count}</h1>
        )
    }
}

export default IntervalCouter

//Now lets go back and implement same in the functional component with Hooks

//Create new filr IntervalHookCounter.js