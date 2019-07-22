# Simple Validator Request
Npm Package for simple validator request body

## Installation 
```
npm i simple-validator-request
```

## Dependencies
- [validator](https://www.npmjs.com/package/validator)

## How To Use

```
const { simpleValidator } = require('simple-validator-request')

const validation = {
    requiredKey: {
        type: 'string',
        message: {
            required: '{customize message for required validation}',
            type: '{customize message for type validation}'
        }
    },
    anotherRequiredKey: {
        type: 'number',
        message: {
            required: '{customize message for required validation}',
            type: '{customize message for type validation}'
        }
    }
}

// JSON request body example 
const body = {
    code: "TEST",
    name: "asd",
    arrs: ["test","asd"]
}

let validator = simpleValidator(body, validation)
console.log(validator)
// validator.status = boolean
// validator.error = string (message error)
```
## Explain
```
const validator = {
	requiredKey: <option>
}
simpleValidator(requestBody,validator)

/** 
*<option>
*	type:
*	- 'string' => string validator
*	- 'number' => number validator
*	- 'email' => email format validator
*	- 'array' => array format validator
*	
*	length : (int) <string len>
*	min : (int) <min number>
*	max : (int) <max number>
*/
```
