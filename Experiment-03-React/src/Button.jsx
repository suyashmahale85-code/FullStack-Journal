
function Button(){
//    const handleClick = () => console.log("hello")
//     const handleClick2 = (name) => console.log(`hello ${name}`)
//  let count = 0
// const handleClick = () =>{
//   if(count < 3){
//     count++
//     console.log(`you click me ${count} 😊`)
//   }
//   else{
//     console.log(`Stop click me ${count} 😡`)
//   }
// }

  const handleClick = (e) => e.target.textContent = "Hey U Click ME' 😀 "
  // Can also use onDoubleClock
  return(<button onClick={(e)=>handleClick(e)}>Click Me 😊</button>)
}

export default Button