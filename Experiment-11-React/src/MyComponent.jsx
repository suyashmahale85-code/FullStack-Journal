import { useState , useEffect } from "react"
function MyComponent(){
   const [width , setWidth] = useState(window.innerWidth)
      const [Height , setHeight] = useState(window.innerHeight)
  
  
 
       useEffect(()=>{
                window.addEventListener("resize",handleResie)
                console.log("Event Listener Added")
                  
                // document.title = `Width : ${width} Height : ${Height}`    

                return(()=>{
                  window.removeEventListener("resize",handleResie)
                  console.log("Event Listener Remove")
                })

       },[])
      
          useEffect(()=>{
           
                  
                document.title = `Sise : ${width} x ${Height}`    

    
                },[width,Height])

 
      function handleResie(){
         setWidth(window.innerWidth)
         setHeight(window.innerHeight)
      }
 
 return(
    <>
     <p>Width : {width}px</p>
     <p>Height : {Height}px</p>
    </>
 )
}
export default MyComponent