const pool = require('../configs/db')

const getData = (by, limit) =>{
    return pool.query(`SELECT * FROM category ORDER BY ${by} ASC LIMIT ${limit}`)
}

const getDataAll = () =>{
    return pool.query(`SELECT * FROM category`)
}

const getDataId = (id) =>{
    return pool.query(`SELECT * FROM product WHERE category = ${id}`)
}

const insert = (data) => {
    const {name} = data;
    return pool.query(`INSERT INTO category(name) VALUES('${name}')`);
}

const update = (id, data) =>{
    const {name} = data
    return pool.query(`UPDATE category SET name='${name}' WHERE id=${id}`)
}

const deleteData = (id) =>{
    return pool.query(`DELETE FROM category WHERE id=${id}`)
}

module.exports = {
    getData,
    insert,
    update,
    deleteData,
    getDataId,
    getDataAll
}