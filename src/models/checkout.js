const pool = require('../configs/db')

const getCheckout = (id) => {
    return pool.query(`SELECT checkout.*, product.name, product.price, product.brand, product.photo FROM checkout INNER JOIN product ON product.id = checkout.product_id WHERE checkout.user_id = '${id}'`);
}

const insertCheckout = (data) => {
    const { user_id , seller_id, username, product_id, status, subtotal } = data
    return pool.query(`INSERT INTO checkout(user_id , seller_id, username, product_id, status, subtotal)VALUES('${user_id}', '${seller_id}', '${username}', ${product_id}, '${status}', ${subtotal})`)
}

module.exports = {
    getCheckout,
    insertCheckout
}