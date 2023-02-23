const categoryModel = require('../models/category')
const commonHelper = require('../helpers/common')

exports.get = async (req,res) =>{
    try {
        const by = req.query.by || 'id'; 
        const limit = parseInt(req.query.limit) || 5; 
        const {rows} = await categoryModel.getData(by, limit)
        return commonHelper.response(res, rows, 'success', 200, 'Get Data Category Success')
    } catch (error) {
        console.log(error);
        res.send({message: 'error', error})
    }
}
exports.getAll = async (req,res) =>{
    try {
        const {rows} = await categoryModel.getDataAll()
        return commonHelper.response(res, rows, 'success', 200, 'Get Data Category Success')
    } catch (error) {
        console.log(error);
        res.send({message: 'error', error})
    }
}

exports.getById = async(req,res) => {
    try {
        const id = req.params.id
        const {rows} = await categoryModel.getDataId(id)
        return commonHelper.response(res, rows, 'success', 200, 'Get Detail Category Success')
    } catch (error) {
        return commonHelper.response(res, null, 'error', 200, 'Get Detail Category Failed')
    }
}

exports.insert = (req, res) => {
    try {
        const {name} = req.body
        const data = {name}
        categoryModel.insert(data)
        return commonHelper.response(res, data.name, 'success', 200, 'Insert Data Category Success')
    } catch (error) {
        res.send({message: 'error', error})
    }
  }

exports.update = (req,res) =>{
    try {
        const {name} = req.body
        const data = {name}
        categoryModel.update(req.params.id, data)
        return commonHelper.response(res, name, 'success,', 200, 'Data Updated')
    } catch (error) {
        res.send({message: 'error', error})
    }
}

exports.deleteData = (req,res) =>{
    categoryModel.deleteData(req.params.id)
    .then(()=>{
        return commonHelper.response(res, null, 'success', 200, 'Delete Data Success')
    })
    .catch((error)=>{
        res.json({message: 'error', error})
    })
}