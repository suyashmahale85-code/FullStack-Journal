import { useState } from "react"

function Counter(){

    const [counter , setCounterState] = useState(0)
    
    
     const incrementClick = () =>{
         setCounterState(counter+1)
     }
        const deincrementClick = () =>{
         setCounterState(counter-1)
     }
            const ResetClick = () =>{
         setCounterState(0)
     }

    return(
       <>
         <div className="container">
            <p className="counter"> {counter}</p>
            <button className="counterBtn" onClick={incrementClick}>Increment</button>
            <button className="counterBtn" onClick={ResetClick}>Reset</button>
            <button className="counterBtn" onClick={deincrementClick}>Decrement</button>
            
         </div>
       </>

    )
}
export default Counter