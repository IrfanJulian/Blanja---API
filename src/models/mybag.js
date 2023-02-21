const pool = require('../configs/db')

const getAll = () => {
    return pool.query(`SELECT * FROM bag`);
}

const getDataBag = (id) => {
    return pool.query(`SELECT * FROM bag WHERE user_id = '${id}'`);
}

const insertDataBag = (data) => {
    const { user_id, user_name, product_id, product_name, price, photo, brand } = data
    return pool.query(`INSERT INTO bag(user_id, user_name, product_id, product_name, price, photo, brand)VALUES('${user_id}', '${user_name}', ${product_id}, '${product_name}', ${price}, '${photo}', '${brand}')`)
}

module.exports = {
    getDataBag,
    insertDataBag,
    getAll
}