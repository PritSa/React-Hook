//Tutorial 15: useContex Hook part 2

import React from 'react'
import ComponentE from './ComponentE'

 function ComponentC() {
    return (
        <div>
            <ComponentE/>
        </div>
    )
}

export default ComponentC

//First step: create usercontect in APP component
//const UserContext = React.createContext()

//Second step: we need to provide thhis context with a value and the provider must wrap the
//children components for the value to be available
//so we wrap componentC

//Third Step:
//to consume the context value so from APP component export context and in ComponentF lets import it
//i.e  export const UserContext = React.createContext()