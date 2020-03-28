const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
       type: String,
       required: true
     },
     email: {
       type: String,
       required: true
     },
     admin: {
       type: Boolean,
       required: true
     },
     full_name: {
       type: String,
       required: true
     },
     location: {
       type: String
     },
     phone: {
       type: String
     },
     facility_rep: {
       type: Boolean,
       required: true
     },
     facility_id: {
       type: Schema.Types.ObjectId, 
       ref: 'healthcare'
     },
     items: [],
     pending_items: []
  })

  const User = mongoose.model('users', UserSchema);
  module.exports = User