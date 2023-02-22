const bagModel = require('../models/mybag')
const { response } = require('../helpers/common')

exports.getBag = async (req,res) => {
    const id = req.params.id
    const { rows } = await bagModel.getDataBag(id)
    // console.log(val);
    response(res, rows, 'sucess', 200, 'get data bag success')
}

exports.getDetailBag = async (req,res) => {
    const id = req.params.id
    try {
        const { rows } = await bagModel.getDetailBag(id)
        response(res, rows, 'sucess', 200, 'get data bag success')
    } catch (error) {
        response(res, error, 'error', 200, 'get data bag failed')
    }
}

exports.insertBag = async (req,res) => {
    const { user_id, user_name, product_id, product_name, price, photo, brand, seller_id } = req.body
    const data = { user_id, user_name, product_id, product_name, price, photo, brand, seller_id }
    try {
        const { rows } = await bagModel.insertDataBag(data);
        response(res, rows, 'sucess', 200, 'insert data sucess');
    } catch (error) {
        console.log(error);
        response(res, null, 'failed', 400, 'insert data failed' );
    }
}

exports.deleteBag = (req, res) => {
    const id = req.params.id
    bagModel.deleteBag(id)
    .then((res)=>{
        response(res, null, 'success', 200, 'delete data bag success' );
    })
    .catch((err)=>{
        response(res, err, 'failed', 400, 'delete data bag failed' );
    })
}