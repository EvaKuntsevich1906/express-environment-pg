const {
    getAllDataDB,
    getAllDataByIDDB,
    createDataDB,
    updateDataDB,
    deleteDataByIDDB
} = require("../repository/enviroment.repository.js");

const getAllData = async () => {
    const data = await getAllDataDB();
    return data;
};

const getAllDataByID = async (id) => {
    const data = await getAllDataByIDDB(id);
    return data;
};

const createData = async (label, category, priority) => {
    const data = await createDataDB(label, category, priority);
    return data;
};

const updateData = async (label, category, priority, id) => {
    const data = await updateDataDB(label, category, priority, id);
    return data;
};

const deleteDataByID = async (id) => {
    const data = await deleteDataByIDDB(id);
    return data;
}

module.exports = {
    getAllData,
    getAllDataByID,
    createData,
    updateData, 
    deleteDataByID
}

