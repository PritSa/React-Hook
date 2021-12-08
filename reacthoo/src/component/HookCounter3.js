//Tutorial 4: useState with Object

import React, {useState} from 'react'

const HookCounter3 = () => {

    const [name, setName] = useState({firstName: '', lastName:'' })
    return (
      
            <form>
                <input type="text"  
                value={name.firstName}
                    onChange={e => setName({...name, firstName: e.target.value })}
                
                />
                <input type="text" 
                value={name.lastName} 
                    onClick = {e => setName({...name, lastName: e.target.value })}
                />
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - { name.lastName }</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        
    )
}

export default HookCounter3

//Lets create functional compoennt
//add useState hook to it but now we set the initial value to object 
//in object set the firstName and lastName to the emplty string
//This is an important point to keep in mind
//the state value can be a string, number, bollean an object or even an array
//you can use any of type based on your requirement
//now lets define render(), we basically wants to have two input field one for firstname one for lastname
//in form tag add two input field below that simply dispaly the h2 tag of {name.firstName} and
//{name.lastName}
//Next lets handle the value attribute and the on change event on the two input field
//so for firstName value={name.firstName} and onChange, whenever user type something we want
//to set the firstName property to event followed by arrow function call setName which is the set function
//for state variable and we want to set firstName: e.target.value 
//<input type="text"  value={name.firstName} onChange={e => setName({ firstName: e.target.value})}/>

//lets do teh same for lastname

//basically when the fiest input value changes we update the last name property 
//lets test this out
//include HookCounter3 to APP compompinet save the file and look at the browser

//when we add first name in a input field it is dispalyed fine but when i started typing 
//second input field we have a problem lastname dispalyed fine but firstname becomes empty
//and vice a versa happens 

//so there is something hapens in our code so to visualize that i am going to display
//the same name state variable so in H2 tag {JSON.stringify(name)}
//now if you go back to browser and check 
//you can see that by default we have set the firstname and lastname to empty string
//so when i start typing in the first name lastname property is removed from the state variable
//if i started typing in teh last name firstname property disappears from the state variable
//The reason this happens beacuse useState does not automatically merge and update the object
//This is the key diffwrence to setState which you come across in a class components
//setState will merge the state whereas the use state hook setter function will not merge the state
//we have do it manually

//this not difficult though we can use spread operator to handle the manual merge
//so onChange we first set the appropriate property and that is spread the name and 
//i.e onChange={e => setName({...name, firstName: e.target.value})}
//...name means copy the name object and then just override the firstname field with a different value
//similary for the lastname

//now save the file and look at browser everything works

//Note: so setState provided by the useState hook does not automatically merge and update object
//we have to manually merge the update and then pass teh value to setState function
