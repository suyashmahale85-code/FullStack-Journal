import React,{ useState } from "react" 

function Mycomponent(){
  const [name , setName] = useState("GUST")
  let [counter , setCounter] = useState(0)
  let [isEmployee , setEmployee] = useState("false")
    const updateName = () =>{
        setName("Sitaram")
        setCounter(counter++)
        
    }
       const increment = () =>{
        setCounter(counter+1)
        
    }
    
    const toggle = () =>{
       setEmployee(!isEmployee)

    }
    
    return(<>
        <div>
             
              <p>Name : {name}</p>
            <button onClick={updateName}>change Name</button>

            <p>Counter : {counter}</p>
            <button onClick={increment}>+</button>

                <p>Counter : {isEmployee ? "Yes" : "No"}</p>
            <button onClick={toggle}>IS Employee</button>
        </div>
    </>)
}
export default Mycomponent