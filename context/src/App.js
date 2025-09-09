import { Child1 } from "./C1"
import { PowerContext } from "./usecontext"


// export function App() {
//   return <>
//     <Child1 />
//   </>
// }

export function App() {
    const power = 1000
    const city = 'NYC'
    return <>
        {/* <PowerContext.Provider value={power}>
    <Child1/>
    </PowerContext.Provider> */}
        <PowerContext.Provider value={{ power, city }}>
            <Child1 />
        </PowerContext.Provider>
    </>
}