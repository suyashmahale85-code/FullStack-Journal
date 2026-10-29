
import List from './list'
function App() {
    let fruit =  [{id:1,name:"apple",calaries : 77} , 
                       {id:2,name:"mango",calaries : 137} , 
                       {id:3,name:"banana",calaries : 27}];

      let vegetable =  [{id:1,name:"Tamato",calaries : 90} , 
                       {id:2,name:"Carrot",calaries : 45} , 
                       {id:3,name:"Onion",calaries : 43}];                  
  return(  
       <>
     {fruit.length > 0 ? <List  item = {fruit} catagory = "Fruit"/> : null}
     {vegetable.length > 0 ?  <List item = {vegetable} catagory = "Vegetable"/> : null} 
    </>
  )
 
  
}

export default App
