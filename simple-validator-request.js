/* eslint-disable valid-typeof */
const validator = require('validator')
module.exports.simpleValidator = function (data, validate) {
    let resp = {
        status: true,
        error: {}
    }
    if (typeof (validate) !== 'object') {
        resp.status = false
        resp.error.validator = 'Validator is not a instance of Object'
        return resp
    }
    for (let loop in validate) {
        if (data[loop] === undefined || data[loop] === '' || data[loop] === null) {
            // required validation
            resp.status = false
            resp.error = validate[loop].message.required || 'required validation'
            return resp
        } else {
            // type validation
            if (validate[loop].type) {
                // type email validation
                if (validate[loop].type === 'email' ? !validator.isEmail(data[loop]) : false) {
                    resp.status = false
                    resp.error = validate[loop].message.type || 'type validation'
                    return resp
                } else if (validate[loop].type !== 'email' && validate[loop].type !== 'array' ? typeof (data[loop]) !== validate[loop].type : false) {
                    resp.status = false
                    resp.error = validate[loop].message.type || 'type validation'
                    return resp
                } else if (validate[loop].type === 'array' ? !Array.isArray(data[loop]) : false) {
                    resp.status = false
                    resp.error = validate[loop].message.type || 'type validation'
                    return resp
                }
            }

            // length validator
            if (validate[loop].length ? String(data[loop]).length < parseInt(validate[loop].length) : false) {
                resp.status = false
                resp.error = validate[loop].message.length || 'length validation'
                return resp
            }

            // min validation
            if (validate[loop].min ? parseInt(data[loop]) < parseInt(validate[loop].min) : false) {
                resp.status = false
                resp.error = validate[loop].message.min || 'min validation'
                return resp
            }

            // max validation
            if (validate[loop].max ? parseInt(data[loop]) > parseInt(validate[loop].max) : false) {
                resp.status = false
                resp.error = validate[loop].message.max || 'max validation'
                return resp
            }
        }
    }
    return resp
}
