const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacilitiesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  npi: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }, 
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  phone1: {
    type: String,
    required: true
  }, 
  phone2: {
    type: String,
    required: true
  },
  supplies: [],
  requests: [],
  verified: {
    type: Boolean,
    required: true
  }

}) 

const Facilities = mongoose.model('facilities', UserSchema);
module.exports = Facilities