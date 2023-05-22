const express = require("express");
const {
    getAllData,
    getAllDataByID,
    createData,
    updateData,
    deleteDataByID
} = require("../service/enviroment.service");
const {
    buildResponse
} = require("../helper/buildResponse");

const {
    isValidEnvironmentId,
    isValidBody
} = require("../helper/validation")

const route = express.Router();

route.get("/", async (req, res) => {
    try {
        const data = await getAllData();
        res.status(200).send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.get("/:id", isValidEnvironmentId, async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const data = await getAllDataByID(id);
        res.send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});


route.post("/", isValidBody, async (req, res) => {
    try {
        const {
            label,
            category,
            priority
        } = req.body;
        const data = await createData(label, category, priority);
        res.send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})


route.put("/:id", isValidEnvironmentId, isValidBody, async (req, res) => {
    try {
        const {
            label,
            category,
            priority
        } = req.body;
        const {
            id
        } = req.params;
        const data = await updateData(label, category, priority, id);
        res.send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.delete("/:id",isValidEnvironmentId, async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const data = await deleteDataByID(id);
        res.send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});


module.exports = route;