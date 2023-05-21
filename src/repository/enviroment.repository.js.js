const pool = require("../db");

const getAllDataDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment`;
    const result = (await client.query(sql)).rows;
    return result;
};

const getAllDataByIDDB = async (id) => {
    const client = await pool.connect();
    const sql = `SELECT * FROM environment WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result;
};

const createDataDB = async (label, category, priority) => {
    const client = await pool.connect();
    const sql = `INSERT INTO environment (label, category, priority) VALUES ($1, $2, $3) RETURNING *  `;
    const result = (await client.query(sql, [label, category, priority])).rows;
    return result;
};


const updateDataDB = async (label, category , priority, id) => {
    const client = await pool.connect();
    const sql = `UPDATE environment SET label = $1, category = $2, priority = $3 WHERE id = $4 returning *`;
    const result = (await client.query(sql, [label, category, priority, id])).rows;
    return result;
};

const deleteDataByIDDB = async (id) => {
    const client = await pool.connect();
    console.log(`id : ${id}`)
    const sql = `DELETE FROM environment WHERE id = $1 returning * `;
    const result = (await client.query(sql, [id])).rows;
    console.log(result)
    return result;
};

module.exports = {
    getAllDataDB,
    getAllDataByIDDB,
    createDataDB,
    updateDataDB, 
    deleteDataByIDDB
}