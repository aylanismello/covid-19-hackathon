const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register_valid');
const validateLoginInput = require('../../validation/login_valid')



router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  
 User.findOne({
     email
   })

bcrypt.compare(password, user.password)
  .then(isMatch => {
    if (isMatch) {
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        admin: user.admin
      };

      jwt.sign(
        payload,
        keys.secretOrKey,
        // Tell the key to expire in one hour
        {
          expiresIn: 3600
        },
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token,
            username: user.username,
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
          });
        });
    } else {
      return res.status(400).json({
        password: 'Incorrect password'
      });
    }
  })
       
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
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser.save()
                    .then(user => res.json(user))
                  // .catch(err => console.log(err));
                })
              })
              
       }
       })

})



module.exports = router;