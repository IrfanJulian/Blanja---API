const bagModel = require('../models/mybag')
const { response } = require('../helpers/common')

exports.getAllBag = async(req, res) => {
    const {rows} = await bagModel.getAll()
    response(res, rows, 'sucess', 200, 'get data bag success')
}

exports.getBag = async (req,res) => {
    const id = req.params.id
    const { rows } = await bagModel.getDataBag(id)
    // console.log(val);
    response(res, rows, 'sucess', 200, 'get data bag success')
}

exports.insertBag = async (req,res) => {
    const { user_id, user_name, product_id, product_name, price, photo, brand } = req.body
    const data = { user_id, user_name, product_id, product_name, price, photo, brand }
    try {
        const { rows } = await bagModel.insertDataBag(data);
        response(res, rows, 'sucess', 200, 'insert data sucess');
    } catch (error) {
        console.log(error);
        response(res, null, 'failed', 400, 'insert data failed' );
    }
}