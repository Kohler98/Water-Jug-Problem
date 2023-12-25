const { validationResult } = require('express-validator')



// this function catch the errors from the body
const fieldValid = (req, res, next) =>{
    const {errors} = validationResult(req)
    const dataError = errors.map((error)=>{
        return{
            msg:error.msg,
            value:error.value,
            path:error.path,
        }
    })
 
    if(!validationResult(req).isEmpty()){
            return res.status(400).json(dataError)
    }
    next()
}


module.exports = {
    fieldValid
}