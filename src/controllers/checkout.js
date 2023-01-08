const checkoutModel = require('../models/checkout')
const {response} = require('../helpers/common')

exports.historyCheckout = async(req,res) => {
    const id = req.params.id;
    try {
        const {rows} = checkoutModel.historyCheckout(id);
        response(res, rows, 'success', 200, 'success get history')
    } catch (error) {
        console.log(error);
    }
}

exports.postCheckout = async(req,res) => {
    const {id_transaction, status} = req.body;
    const data = {id_transaction, status}
    try {
        const {rows} = await checkoutModel.postCheckout(data)
        response(res, rows, 'success', 200, 'post checkout success')
    } catch (error) {
        console.log(error);
    }
}