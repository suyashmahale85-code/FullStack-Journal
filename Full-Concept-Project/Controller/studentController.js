const EventEmitter = require("events")
const event = new EventEmitter()
const Cron = require("node-cron")
const fs = require("fs")

const writeSteam = fs.createWriteStream("pokemon.txt","utf-8")

const {student1} = require("../models")
const { where } = require("sequelize")

event.on("studentCreate",(student) =>{
    console.log("Student Created : ",student.name)
})


const createStudent = async(req,res)=>{

    const student = await student1.create(req.body)
    event.emit("studentCreate",student)
  
    res.send(student)
 
}



Cron.schedule("*/1 * * * *",async()=>{
  
    const student = await student1.findAll()    
      writeSteam.write(JSON.stringify(student)+"\n") 
    console.log("Cron Check Student ",student.length)
    
})



 const findAllStudent = async(req,res)=>{

    const student = await student1.findAll()     
    res.send(student)
  }

const findById = async(req,res)=>{

    const student = await student1.findByPk(req.params.id)
    res.send(student)
}

const DeleteById1 = async(req , res)=>{

    const student = await student1.destroy({
        where:{
            id :req.params.id
        }
    })
    res.send(student)

}

module.exports={
createStudent,
findAllStudent,
findById,
DeleteById1

}