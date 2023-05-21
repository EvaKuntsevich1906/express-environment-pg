const pool = require("../db");

const getAllDataDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment`;
    const result = (await client.query(sql)).rows;
    return result; 
}

const getAllDataByIDDB = async (id) => {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result; 
}

const createDataDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment`;
    const result = (await client.query(sql)).rows;
    return result; 
}


const updateDataDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment`;
    const result = (await client.query(sql)).rows;
    return result; 
}

module.exports = {
    getAllDataDB, 
    getAllDataByIDDB,
    createDataDB, 
    updateDataDB, 
    
}