const pool = require('../configs/db')

const getData = ({search, limit, offset, sortBy, sortList}) =>{
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM products WHERE (name) ILIKE ('%${search}%') ORDER BY ${sortBy} ${sortList} LIMIT ${limit} OFFSET ${offset}`, (err, result)=>{
            if(!err){
                resolve(result)
            }else{
                reject(err)
                console.log(err);
            }
        }) 
    });
}

const getDetailProduct = (id) =>{
    return pool.query(`SELECT * FROM products WHERE id=${id}`)
    // return pool.query(`SELECT products.*, category.name AS category FROM products INNER JOIN category ON products.id_category = category.id WHERE products.id=${id}`)
}


const countData = () =>{
    return pool.query(`SELECT COUNT(*) AS total_products FROM products`)
}

const insert = (data) => {
    const {name,brand,condition,description,stock,price,photo} = data
    return pool.query(`INSERT INTO products(name,brand,condition,description,stock,price,photo)VALUES('${name}','${brand}','{${condition}','${description}',${stock},${price},'${photo}')`);
}

const update = (id, data) =>{
    const {name,brand,condition,description,stock,id_category,price,photo} = data
    return pool.query(`UPDATE products SET name='${name}', brand='${brand}', condition='${condition}', description='${description}', stock=${stock}, id_category=${id_category}, price=${price}, photo=${photo} WHERE id=${id}`)
}

const deleteData = (id) =>{
    return pool.query(`DELETE FROM products WHERE id = ${id}`)
}

module.exports = {
    getData,
    getDetailProduct,
    insert,
    update,
    deleteData,
    countData
    // getRelation
}