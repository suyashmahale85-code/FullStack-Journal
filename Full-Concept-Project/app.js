const express = require("express")
const path = require("path")

const app = express()

const StudentRouter1 = require("./Routers/StudentRouter")

app.use(express.json())
app.use(express.static("static"))

app.get("/index",(req,res)=>{
   res.sendFile(path.join(__dirname,"view","index.html"))
})

app.get("/pokmeon",(req,res)=>{
  let data = req.query
  console.log(data)
 res.send(data)

})


app.get("/analysis",(req,res)=>{
  
    let data =  req.query
    let Header = req.headers
  const { clientid, environment } = Header
    let start =  Date.now()
      console.log("Client : ",clientid)
      console.log("Environment : ",environment)
    let end = Date.now() 

    console.log(Header)

     console.log("Response time = ",end - start)

     if((end - start) > 400){
       console.log("long")
     }
     else{
         console.log("Short")
     }
    res.send(data)
    
})

app.use("/api",StudentRouter1)

app.listen(8080,()=>{
    console.log("running")
})