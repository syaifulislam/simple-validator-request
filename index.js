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
    },
    arrs: {
        type: 'array',
        message: {
            required: 'arrs is required',
            type: 'arrs array'
        }
    }
}

const body = {
    code:"asdasd",
    name:"asdsad"
}


let val = simpleValidator(body,validation)
console.log(val)