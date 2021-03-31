const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = validateRegisterInput = (data) => {
    let errors = {};

    // Convert empty field to empty string
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Check Name
    if(Validator.isEmpty(data.name)) {
        errors.name = "Name is required!";
    }
    // Check Email
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required!";
    } else if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid!";
    }
    // Check Password
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required!";
    }
    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be at least 6 characters!";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};