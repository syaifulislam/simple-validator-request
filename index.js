const {simpleValidator} = require('./simple-validator-request')

const validation = {
    name: {
        type: 'string',
        message: {
            required: 'Please insert name and code prefix #FORECOFFEE',
            type: 'Please insert name with string #FORECOFFEE'
        }
    },
    code: {
        type: 'string',
        message: {
            required: 'Please insert name and code prefix #FORECOFFEE',
            type: 'Please insert code with string #FORECOFFEE'
        }
    },
    arrs: {
        type: 'array',
        message: {
            required: 'arrs is required #FORECOFFEE',
            type: 'arrs array #FORECOFFEE'
        }
    }
}

const body = {
    code:"asdasd",
    name:"asdsad"
}

let val = simpleValidator(body,validation)
console.log(val)