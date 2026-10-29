import { useState , useEffect} from "react"

function MyComponent(){
  const [count , setCount] = useState(0)
  const [color , setColor] = useState("green")  

  useEffect(()=>{
    document.title = `MY Count : ${count} ${color}`
  },[count ,color])

 function handleClickAdd(){
     setCount(c => c + 1)
 }

 function handleClickSub(){
     setCount(c => c - 1)
 }

 function handleChangeColor(){
     setColor(c => c === "green" ? "red" : "green")
 }
    return(<>
       <div style={{color : color}}> Count : {count}</div>
        <button onClick={handleClickAdd}>+</button>
         <button onClick={handleClickSub}>-</button>
            <button onClick={handleChangeColor}>Change Color</button>
    </>)
}

export default MyComponent