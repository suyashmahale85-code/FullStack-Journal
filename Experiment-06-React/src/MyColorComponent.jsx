import {  useState } from "react"
function MyColorComponent(){
 const [color , setColor] = useState("")
  const[shadowColor , setShadowColor] = useState("")  
 const[shadowColorX , setShadowColorX] = useState("")  
 const[shadowColorY , setShadowColorY] = useState("")  
  const[shadowColorZ , setShadowColorZ] = useState("")  
  
  function handleColorChange(event){
        setColor(event.target.value)
  }
  function handleShadowColor(event){
     setShadowColor(event.target.value)
  }

  function handleShadowX(event){
       setShadowColorX(event.target.value)
  }

    function handleShadowY(event){
         setShadowColorY(event.target.value)
  }
    function handleShadowZ(event){
           setShadowColorZ(event.target.value)
  }
 return(
    <>
    <div className="colorScreen" style={{backgroundColor : color,
          boxShadow: `${shadowColorX}px  ${shadowColorY}px ${shadowColorZ}px ${shadowColor}`
    }}>
         <p>Selected Color : {color}</p>
      </div>
       <br />
       Select inner Color : 
       <br />
      <input type="color"  value={color} onChange={handleColorChange}/>
       <br />
        Select Shadow Color 
          <br /> 
       <input type="color"  min="0"  value={shadowColor}  onChange={handleShadowColor}/>
       <br /><br />
       <input type="number" min="0" value={shadowColorX} onChange={handleShadowX} placeholder="X-axis"/>
            <br /><br />
      <input type="number"  min="0" value={shadowColorY} onChange={handleShadowY}  placeholder="Y-axis" />
           <br /><br />
       <input type="number"  min="0" value={shadowColorZ} onChange={handleShadowZ}  placeholder="Z-axis"/>
    </>
 )

}

export default MyColorComponent
