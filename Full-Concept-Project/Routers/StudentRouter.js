const {createStudent,findAllStudent,findById,DeleteById1} = require("../Controller/studentController")

const express = require("express")
const StudentRouter1 = express.Router()


StudentRouter1.post("/details",createStudent)
StudentRouter1.get("/details",findAllStudent)
StudentRouter1.get("/details/:id",findById)
StudentRouter1.delete("/details/delete/:id",DeleteById1)
module.exports = StudentRouter1
