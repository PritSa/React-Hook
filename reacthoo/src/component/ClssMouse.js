//Tutorial 9: Run effects only once

import React, { Component } from 'react'

class ClssMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
             y: 0
        }
    }
        logMousePosition = e => {
            this.setState({x: e.clientX, y: e.clientY})
        }
    
    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logMousePosition)
    }
    
    render() {
        return (
            <div>
                X - {this.state.x}  Y- {this.state.y}
            </div>
        )
    }
}

export default ClssMouse

//We set up teh event listener only once that is in componentDidMont
//now lets implenent tha same with useEffect in Functional component

//Lets create a file HookMouse.js

//Now how do we handle the clean up code
//in class component we have commonentDidUnmount lifecycle hook where you simply add
//window.removeEventListener('mousemove' , this.logMousePosition)
