const express = require("express");
const {
    getAllData, getAllDataByID, createData, updateData, deleteDataByID 
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

route.post("/", async (req,res) => {
    const {label, category, priority} = req.body; 
    const data = await createData(label, category, priority); 
    res.send(data);
})


route.put("/:id", async (req,res) => {
    const {label, category, priority} = req.body; 
    const {id} = req.params;
    const data = await updateData(label, category, priority, id); 
    res.send(data);
});

route.delete("/:id", async (req,res) => {
    const {id} = req.params;
    const data = await deleteDataByID(id); 
    res.send(data);
});


module.exports = route; 