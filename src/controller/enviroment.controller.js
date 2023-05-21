const express = require("express");
const {
    getAllData, getAllDataByID 
} = require("../service/enviroment.service");

const route = express.Router(); 

route.get("/", async (req,res) => {
    const data = await getAllData(); 
    res.send(data);
});

route.get("/:id", async (req,res) => {
    const {id} = req.params;
    const data = await getAllDataByID(id); 
    res.send(data);
});






module.exports = route; 