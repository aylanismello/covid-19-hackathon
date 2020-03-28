const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register_valid');



router.post('/login', (req, res) => {
  const email = req.body.email;
 User.findOne({
     email
   })
         .then(user => {
           res.json({
             username: user.username,
             name: user.full_name,
             location: user.location,
             id: user.id,
             items: user.items,
             pending_items: user.pending_items,
             phone: user.phone,
             facility_rep: user.facility_rep,
             facility_id: user.facility_id,
             admin: user.admin
           })
         })
         .catch(err => res.status(404).json({
           usernotfound: 'Yo dog there is no user!'
         }))
})



router.post('/register', (req, res) => {

      const {
        errors,
        isValid
      } = validateRegisterInput(req.body);


      if (!isValid) {
        return res.status(400).json(errors);
      }

      User.findOne({
          email: req.body.email
        })
        .then(user => {
            if (user) {
              // Throw a 400 error if the email address already exists
              return res.status(400).json({
                email: "A user has already registered with this address"
              })
            } else {
              const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                full_name: req.body.name,
                location: req.body.location,
                phone: req.body.phone,
                facility_rep: false,
                items: [],
                pending_items: [],
                admin: false
              })
              newUser.save()
                .then(user => res.json(user))
       }
       })

})



module.exports = router;