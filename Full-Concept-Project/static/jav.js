

const submit = document.getElementById("submit")
const screen = document.getElementById("screen")
const inputFindStudent = document.getElementById("inputFindStudent")
const deletebtn = document.getElementById("delete")
submit.addEventListener("click",async()=>{

    const name1 = document.getElementById("name").value
    const Rollno1 = document.getElementById("rollno").value
    const div1 = document.getElementById("div").value

    let details = {
         name:name1,
         rollno:Rollno1,
         div:div1
    }

     PostData(details)
})










async function PostData (details){

    const response =  await fetch(`http://localhost:8080/api/details`,{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(details)
    })
     const data = await response.json()
    console.log(data)

}



inputFindStudent.addEventListener("input",()=>{

    findByID(inputFindStudent.value)
})


async function findByID (id){

    const response =  await fetch(`http://localhost:8080/api/details/${id}`,{
        method:"GET",
        headers:{
            "Content-Type" : "application/json"
        },
    })
     const data = await response.json()
    console.log(data)
   screen.textContent =JSON.stringify(data) 
}


deletebtn.addEventListener("click",()=>{
    
    
    delete1( inputFindStudent.value)
})

async function delete1(id){
    let response = await fetch(`http://localhost:8080/api/details/delete/${id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/json"
          },
    })
    let data = await response.json()
     console.log(data)

}