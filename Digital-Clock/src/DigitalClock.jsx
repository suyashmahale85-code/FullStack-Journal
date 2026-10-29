import { useState,useEffect } from "react"

function DigitalClock(){
     const[time , setTime] = useState(new Date())


  useEffect(()=>{
     let setInterval = (()=>{
        setTime(new Date())
     },1000)
    
     return(()=>{
       clearInterval(setInterval)
     })
     
  },[])

  function FormatTime(){

       let hour = time.getHours()
       let min = time.getMinutes()
       let sec = time.getSeconds()

       return(`${hour}:${min}:${sec}`)
  }

    return(<>
      <div className="Container">
          <div className="Clock">
            <span {FormatTime}>00:00:00</span>
          </div>

      </div>
    </>)
}

export default DigitalClock