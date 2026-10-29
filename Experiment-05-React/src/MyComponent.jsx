//Onchange event Handler in react

import { useState } from "react"

function MyComponent(){
 
    const [name , setName] = useState("Guest")
    const [quentity , setQuentity] = useState("0")
    const [comment , setComment] = useState("")
    const [option , setOption] = useState("")
    const [btnState , setBtnState] = useState("")

    function handleNameChange(event){
        console.log(event)
          setName(event.target.value)

    }

    function handleQuentityChange(event){
          setQuentity(event.target.value)        
    }

    function handleCommentChange(event){
         setComment(event.target.value)
    }

    function handleOptionChange(event){
        setOption(event.target.value)
    }

    function handleBtnState(event){
           setBtnState(event.target.value)
    }
    
    return(
        <>
          <div>
             <input  value = {name} onChange={handleNameChange}/>
             <p >Name : {name}</p>

             <input  value = {quentity} onChange={handleQuentityChange} type="number"/>
             <p >Quentity : {quentity}</p>

             <textarea placeholder="Enter the Comment" onChange={handleCommentChange}></textarea>
             <p>Comment : {comment}</p>

             <select value = {option} onChange={handleOptionChange}>

                 <option value="">select a option</option>
                 <option value="Visa">Visa</option>
                 <option value="MasterCard">MasterCard</option>
                 <option value="MasterCard">GiftCard</option>
             </select>
              <p>Payment : {option}</p>

             MALE :    
             <input type="radio" value ="M" checked={btnState ==="M"} onChange={handleBtnState}/>
             <br></br>
             FEMALE :    
             <input type="radio" value ="F" checked={btnState ==="F"} onChange={handleBtnState}/>
             <p>Gender : {btnState}</p>
          </div>
        </>
    )
}
export default MyComponent