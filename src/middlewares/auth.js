const {response} = require('../helpers/common')
const jwt = require('jsonwebtoken')
// eslint-disable-next-line no-undef
let key = process.env.JWT_KEY

const protect = (req,res,next) =>{
    try{
        let token
        if(req.headers.authorization){
            let auth = req.headers.authorization
            token = auth.split(" ")[1]
            let decode = jwt.verify(token,key)
            req.payload = decode
            next()
        } else {
            return response(res, null, 'failed', 404, 'Server Need Token')
        }
    } catch(err) {
        console.log(err)
        if(err && err.name == 'JsonWebTokenError'){
            return response(res, null, 'failed', 404, 'Invalid Token')
        } else if (err && err.name == 'TokenExpriredError'){
            return response(res, null, 'failed', 404, 'Invalid Token')
        } else {
            return response(res, null, 'failed', 404, 'Invalid Token')
        }
    }
}

module.exports = {
    protect
}