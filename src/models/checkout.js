const pool = require('../configs/db')

const historyCheckout = (id) => {
    return pool.query(`SELECT * FROM checkout WHERE id = ${id}`)
}

const postCheckout = (data) => {
    const { id_transaction, status } = data
    return pool.query(`INSERT INTO checkout(id_transaction, status)VALUES(${id_transaction}, '${status}')`)
}

module.exports = {
    historyCheckout,
    postCheckout
}