const {simpleValidator} = require('./simple-validator-request')

const validation = {
    name: {
        type: 'string',
        message: {
            required: 'Please insert name and code prefix',
            type: 'Please insert name with string'
        }
    },
    code: {
        type: 'string',
        message: {
            required: 'Please insert name and code prefix',
            type: 'Please insert code with string'
        }
    }
}

const body = {
    code:"asdasd",
    name:"asdsad"
}


let val = simpleValidator(body,validation)
console.log(val)