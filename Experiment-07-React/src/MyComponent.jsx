//Update state of an Object in React
import { useState } from "react"
function MyComponent(){
   const [car , setCar] = useState({year : "2024" , model : "Swift" , make : "Maruti"})
   
   const HandleYear = (event) =>{
         setCar({...car,year:event.target.value})
   }
      
   const HandleModle = (event) =>{
          setCar({...car,model:event.target.value})
   }
      
   const HandleMake = (event) =>{
          setCar({...car,make:event.target.value})
   }
    return(
        <>
         <p>My Car is {car.year} {car.model} {car.make}</p>
          <input type="number" value={car.year} onChange={HandleYear} />
          <input type="text" value={car.model} onChange={HandleModle} />
          <input type="text"  value={car.make} onChange={HandleMake}/>
        
        </>
    )

}
export default  MyComponent