

// with the help of props
export function Child3(props) {
    return <>
        <h1>Child3</h1>
        <h3>Power of Steve Roger is :{props.power1} </h3>

    </>
}

// with the help of context
// import React, { useContext } from 'react'
// import { PowerContext } from './usecontext'

// export function Child3() {
//     const {power,city}= useContext(PowerContext)

//     return <>
//         <h1>Child3</h1>
//         <h3>Power of Steve Roger is :{power} </h3>
//         <h3>City of Steve Roger is : {city}</h3>

//     </>
// }
