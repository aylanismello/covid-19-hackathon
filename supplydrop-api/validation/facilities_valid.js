const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateFacilitiesInput(data) {
    let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.npi = validText(data.npi) ? data.npi : '';
  data.address = validText(data.address) ? data.address : '';
  data.city = validText(data.city) ? data.city : '';
  data.state = validText(data.state) ? data.state : '';
  data.zipcode = validText(data.zipcode) ? data.zipcode : '';
  data.phone1 = validText(data.phone1) ? data.phone1 : '';
  data.phone2 = validText(data.phone2) ? data.phone2 : '';

if (Validator.isEmpty(data.name)) {
  errors.name = 'name field is required';
}
if (Validator.isEmpty(data.npi)) {
  errors.npi = 'npi field is required';
}
if (Validator.isEmpty(data.address)) {
  errors.address = 'address field is required';
}
if (Validator.isEmpty(data.city)) {
  errors.city = 'city field is required';
}
if (Validator.isEmpty(data.state)) {
  errors.state = 'state field is required';
}
if (Validator.isEmpty(data.zipcode)) {
  errors.zipcode = 'zipcode field is required';
}
if (Validator.isEmpty(data.phone1)) {
  errors.phone1 = 'phone1 field is required';
}
if (Validator.isEmpty(data.phone2)) {
  errors.phone2 = 'phone2 field is required';
}


  

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}