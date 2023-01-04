const pool = require('../configs/db')

const getData = () =>{
    return pool.query(`SELECT * FROM users`)
}

const findByEmail = (email) =>{
    return pool.query(`SELECT * FROM users WHERE email='${email}'`)
}

const getDataById = (id) => {
    return pool.query(`SELECT * FROM users WHERE id='${id}'`)
}

const insertData = (data) =>{
    const {id, name, email, password, role, phone, gender, photo} = data
    return pool.query(`INSERT INTO users(id, name, email, password, role, phone, gender, photo)VALUES('${id}', '${name}', '${email}', '${password}', '${role}', '${phone}', '${gender}', '${photo}')`)
}

const updateData = (id, data) =>{
    const {name,email,store_name,phone,photo} = data
    return pool.query(`UPDATE users SET name='${name}', email='${email}', store_name='${store_name}', phone='${phone}', photo='${photo}' WHERE id='${id}'`)
}

const deleteData = (id) =>{
    return pool.query(`DELETE FROM users WHERE id='${id}'`)
}

module.exports = {
    getData,
    insertData,
    updateData,
    deleteData,
    findByEmail,
    getDataById
}