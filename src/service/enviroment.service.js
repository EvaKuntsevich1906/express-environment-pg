const {
    getAllDataDB, 
    getAllDataByIDDB,
    createDataDB, 
    updateDataDB
} = require("../repository/enviroment.repository.js");

const getAllData = async () => {
    const data = await getAllDataDB();
    return data;
};

const getAllDataByID = async (id) => {
    const data = await getAllDataByIDDB(id);
    return data;
}; 

// const createData = async () => {
//     const data = await createDataDB();
//     return data;
// };

// const updateData = async () => {
//     const data = await updateDataDB();
//     return data;
// };


module.exports = {
    getAllData, 
    getAllDataByID,
 
}