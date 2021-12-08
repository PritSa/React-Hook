//Tutorial 7: useEffect after render
/*
import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount(){
        document.title = `Cliked ${this.state.count} times`
    }
    
    componentDidUpdate(prevProps, prevState){

        document.title = `clicked ${this.state.count} times`

    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne
*/
//Kindly refrer the notes

//Now lets try to replace this functionality with functional component
//or to be more precise replace componentDidMount and componentDidUpdate with useEffect hook

//lets create a file HookCounterOne.js


//Tutorial 8: conditionally run useEffect

//In some cases applying useEffect after every render might create a performance problem
//so we need a way to conditionally run an effect from a functionl component 
//Lets take an example to understand how to do that 
//I will quickly wallk throgh the class component implemetation and then we can proceed
//with useEffecr hook infunctional component
//For this example we will continue with the code from previous video
//so we have ClassComponentOne with state variable count initialize to zero 
//In render function we have button onCLick of that button we increment the count value by 1
//when value increment the state changes which couses the component to re render and componentDidUpdate
//will execute setting the document title to updated value 

//Now lets add text input to the class component whisch will accept the name from user
//so create a state variable called name and initialize to an empty string
//Next in the JSX add an input element whose value = {this.state.name}
//we need to capture the input element value so lets add an onchanged Handler 
//so onChange = {e => {this.setState({name: e.target.value})}}
//we basically update the variable when the state changes
//finally in componentDidUpdate i am going to add a log statement  'Updating document title'
//save the files add it in APP.js and back to the browser

//If we click on teh button we can see the log statement and the doucmnet title updated but
//If we start typing the name in input field we still get the log statement Updating document title

//the count value however still 1 so we are basically setting teh document title in a same string
//several time whcih is sort of unnecessary to optimize this
//we can compare the count value before and after the update and if at all the 
//count value change thn we conditionally update the title 

//to achieve that lets include teh parameter for componentDidUpdate (prevProps, prevState)
//within the body we check if previous state count is diffrerent from the current state count 
//and only then update the document title
//so simple if condition
//now go back to browswe
//now when we type in input field document title is not updated so we have achieve expected result

//so we are conditionally updating the title only when the appropriate variable changes
//that is only when the count value changes well now we know what has to be implemented 
//lets see how to implement same with FUNCTIONAL COMPONENT AND USEEFFECT HOOK

//lets go back to HookCounterOne compnent


import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }

    }

    componentDidMount(){
        document.title = `Cliked ${this.state.count} times`
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count) {
     console.log('Updating document title');
        }
        document.title = `clicked ${this.state.count} times`

    }

    render() {
        return (
            <div>
            <input 
            type="text"  
            value={this.state.name}
            onChange = {e => {this.setState({name: e.target.value})
                }}
            />
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne