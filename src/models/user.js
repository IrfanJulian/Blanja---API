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

const verify = (email) => {
    return pool.query(`UPDATE users SET status = 'actived' WHERE email = '${email}'`)
}

const insertData = (data) =>{
    const { id, name, email, password, store_name, phone_number, role, otp} = data
    return pool.query(`INSERT INTO users(id, name, email, password, store_name, phone_number, role, otp)VALUES('${id}', '${name}', '${email}', '${password}', '${store_name}', '${phone_number}', '${role}', '${otp}')`)
}

const updatePhoto = (data) => {
    const { id, photo } = data
    return pool.query(`UPDATE users SET photo = '${photo}' WHERE id = '${id}'`)
}

const updateData = (id, data) =>{
    const { name, email, birth, phone_number, store_description, store_name, gender } = data
    return pool.query(`UPDATE users SET name='${name}', email='${email}', birth='${birth}', phone_number='${phone_number}', store_description='${store_description}', store_name='${store_name}', gender='${gender}' WHERE id='${id}'`)
}

const updateAddress = (id, data) =>{
    const { recipient_name, recipient_phone, address } = data
    return pool.query(`UPDATE users SET recipient_name = '${recipient_name}', recipient_phone = '${recipient_phone}', address = '${address}' WHERE id = '${id}'`)
}

const deleteData = (id) =>{
    return pool.query(`DELETE FROM users WHERE id='${id}'`)
}

module.exports = {
    getData,
    verify,
    insertData,
    updateData,
    updateAddress,
    deleteData,
    findByEmail,
    getDataById,
    updatePhoto
}