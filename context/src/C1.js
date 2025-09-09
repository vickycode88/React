import { Child2 } from "./C2"

// with the help of props
export function Child1() {
    return <>
        <h1>Child1</h1>
        <Child2 power={100 } />
    </>
}

// with the help of context
// export function Child1() {
//     return <>
//         <h1>Child1</h1>
//         <Child2 />
//     </>
// }