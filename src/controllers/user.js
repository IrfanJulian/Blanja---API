/* eslint-disable no-undef */
const userModel = require('../models/user')
const {v4: uuidv4} = require('uuid')
const commonHelper = require('../helpers/common')
const bcrypt = require('bcryptjs')
const { generateToken, generateRefreshToken } = require('../helpers/auth')
const cloudinary = require('cloudinary').v2
// const client = require('../configs/redis')

cloudinary.config({ 
  cloud_name: 'ddpo9zxts', 
  api_key: '713177134711193', 
  api_secret: 'LPrYJjwuotkDzsvBwCDlsUoIycw' 
});


exports.getData = async(req,res) =>{
    try {
        const {rows} = await userModel.getData()
        commonHelper.response(res, rows, 'sucess', 200, 'get data user sucess')
    } catch (error) {
        res.send({message: 'error', error})
    }
}

exports.insertData = async(req, res) =>{
    try {
        const {name, email, role, password, phone, gender, photo} = req.body
        // const photo = req.file
        // console.log(req.file);
        // const image = await cloudinary.uploader.upload(photo.path, { folder: 'Backend Blanja/user' })
        // const data = { name, email, password, phone, gender, photo: [image.secure_url] }
        const dataUser = await userModel.findByEmail(email)
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);
        // console.log(dataUser);
        if(!dataUser.rowCount){
            let data = {
                id: uuidv4(),
                name,
                email,
                password: passwordHash,
                role,
                phone,
                gender,
                photo
            }
            await userModel.insertData(data)
            // console.log(data);
            res.send({status: 200, message: 'add data success'})
        }else{
            res.send({message: 'email is already exist'})
        }
    } catch (error) {
        console.log(error)
        res.send({message: 'error'})
    }
}

exports.login = async (req,res) => {
    const {email, password} = req.body
    const {rows: [dataUser]} = await userModel.findByEmail(email)
    if(!dataUser){
        return commonHelper.response(res, null, 'failed', 403, 'login failed! wrong email or password')
    }
    // console.log(dataUser);
    const validationPassword = bcrypt.compareSync(password, dataUser.password)
    // console.log(validationPassword);
    if(!validationPassword){
        return commonHelper.response(res, null, 'failed', 403, 'login failed! wrong email or password')
    }
    let payload = {
        email: dataUser.email,
        password: dataUser.password,
        role: dataUser.role
    }
        dataUser.token = generateToken(payload)
        dataUser.refreshToken= generateRefreshToken(payload)
        commonHelper.response(res, dataUser, 'success', 200, 'login success')
}

exports.getProfile = async(req, res)=>{
    try {
        const id = req.params.id
        const {rows} = await userModel.getDataById(id)
        commonHelper.response(res, rows, 'suuccess', 200, 'get profile success')
    } catch (error) {
        console.log(error);
        res.json({message: 'error', error})
    }
}


exports.updateData = async(req, res) => {
    try {
        const id = req.params.id
        const {name,email,store_name,phone} = req.body
        let photo = req.file
        const image = await cloudinary.uploader.upload(photo.path, { folder: 'Backend Blanja/products' })
        const data = {name,email,store_name,phone,photo: image.secure_url} 
        userModel.updateData(id, data)
          return commonHelper.response(res, data, 'success', 200, 'data updated')
      } catch (error) {
        console.log(error);
          // res.send({message: 'error', error})
      }
    },

exports.deleteData = (req,res) =>{
    userModel.deleteData(req.params.id)
    .then(()=>{
        res.send({status: 200, message: 'delete data success'})
    })
    .catch((error)=>{
        res.send({message: 'error', error})
    })
}