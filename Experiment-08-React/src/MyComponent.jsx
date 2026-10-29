import { useState } from "react"
function MyComponent(){
  const [food , SetFood] = useState(["Apple","Mango","Banana"])
  
  function handleAddFood(){
    const Fooditem = document.getElementById("foodItem").value
     document.getElementById("foodItem").value = ""
      SetFood([...food,Fooditem])
  }

    function handleDeleteFood(index){
      SetFood(food.filter((element,x) => x !== index))
  }
    return(<>
         <div>
            <h1>Food</h1>
             {food.map((food, index) =>
                                        <ol key={index} onClick={() => handleDeleteFood(index)}>{food}</ol>)} 
         </div>
         <div>
            <input type="text" id="foodItem" placeholder="Enter Food" />
            <button onClick={handleAddFood}>Add Food</button>
         </div>
    </>)

}
export default MyComponent