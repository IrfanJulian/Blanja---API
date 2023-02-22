const checkoutModel = require('../models/checkout')
const {response} = require('../helpers/common')

exports.historyCheckout = async(req,res) => {
    const id = req.params.id
    try {
        const result = checkoutModel.getCheckout(id)
        return response(res, result, 'success', 200, 'Success get history checkout')
    } catch (error) {
        console.log(error);
        return response(res, error, 'error', 200, 'Failed get history checkout')
    }
}


exports.addCheckout = (req,res) => {
    const { user_id , seller_id, username, product_id, status, subtotal } = req.body
    const data = { user_id , seller_id, username, product_id, status, subtotal }
    checkoutModel.insertCheckout(data)
    .then(()=>{
        return response(res, null, 'success', 200, 'Checkout proccess success')
    })
    .catch((err)=>{
        console.log(err);
        return response(res, err, 'error', 200, 'Checkout proccess error')
    })
}