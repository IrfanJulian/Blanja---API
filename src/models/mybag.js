const pool = require('../configs/db')

const getDataBag = () => {
    return pool.query(`SELECT * FROM mybag`)
}

const insertDataBag = (data) => {
    const { id_user, id_product, qty, total } = data
    return pool.query(`INSERT INTO mybag(id_user, id_product, qty, total)VALUES('${id_user}', ${id_product}, ${qty}, ${total})`)
}

module.exports = {
    getDataBag,
    insertDataBag
}