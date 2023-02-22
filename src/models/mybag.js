const pool = require('../configs/db')

const getDataBag = (id) => {
    return pool.query(`SELECT * FROM bag WHERE user_id = '${id}'`);
}

const getDetailBag = (id) => {
    return pool.query(`SELECT * FROM bag WHERE product_id = ${id}`);
}

const insertDataBag = (data) => {
    const { user_id, user_name, product_id, product_name, price, photo, brand, seller_id } = data
    return pool.query(`INSERT INTO bag(user_id, user_name, product_id, product_name, price, photo, brand, seller_id)VALUES('${user_id}', '${user_name}', ${product_id}, '${product_name}', ${price}, '${photo}', '${brand}', '${seller_id}')`)
}

const deleteBag = (id) => {
    return pool.query(`DELETE FROM bag WHERE id = ${id}`)
}

module.exports = {
    getDataBag,
    insertDataBag,
    getDetailBag,
    deleteBag
}