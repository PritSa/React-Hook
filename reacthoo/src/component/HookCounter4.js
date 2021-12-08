//Tutorial 5: useState with array

import React, {useState} from 'react'

const HookCounter4 = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length, 
            value: Math.floor(Math.random()*10) + 1

        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a Number</button>
            <ul>
            {items.map(item => (
            <li key={item.id}>{item.value}</li>
            ))}
                
            </ul>
        </div>
    )
}

export default HookCounter4

//create functional componet
//next we are going to declare a state variable using the useState hook so import {useState}
//and destructure items and setItems from useState
//since we are working with an array for this example the default value is an empty array
//next lets render the items in the JSX so add <ul> tag and we are going to 
//items.map()item => <li key=item.id>{item.value}</li> 
//lets add button  which pushesh items into the array and onClick we are going to call a
//function {addItem}
//noe lets define a addItem function const addItem = () => {setItem()}
//so we need to pass in teh value to set for teh items array and we learn in last video 
//setItem function doesnt merge and update or in the case of an array teh setItem function
//doesnt autimatically append the item to the end of teh list
// we need to handle that manually using the spread operator which is pretty simple
//as we saw in last example
//so we add a spread operator and then push a new object for teh new object the ID is
//going to be items.length and the value is going to be a random number between 1 to 10
// addItem = () => {setItem([...item, {id: item.lenght, value:Math.floor(Math.rendom()*10)+1}])}

//so let me explain what is happening here
//whenever addItem is called we make a copy of all the items in the array using the spread operator
//to that list of copied items we simply append another object
//that waywe are not overwritting teh original array on first iteration the item is an empty array
//so id will be zero which is items.lenght the value will be random number between 1 to 10
//on next iteration we would have one item in the items array
//so we make a copy of that and to that we append a new object the id this time will be 
//item.lenght which is equal to 1 and the value offcourse will be a random number
//and the same logic id continue for the subsequent button clicks 
//lets save this and include in APP componet
//look at browswer

//so, addItem = () => {setItem([...items, {}])}


