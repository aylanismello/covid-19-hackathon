const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Facility = require('../../models/Facilities')

const validateFacilityInput = require('../../validation/facilities_valid')

router.post('/newFacility', (req, res) => {
      const {
        errors,
        isValid
      } = validateFacilityInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newFacility = new Facility ({
      name: req.body.name,
      npi: req.body.npi,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      phone1: req.body.phone1,
      phone2: req.body.phone2,
      verified: false,
      reps: [req.body.repID],
      supplies: [],
      requests: []
    })
    
    newFacility.save()
      .then(facility => res.json(facility))
      .catch(err => res.json(err))


})

router.get('facilities/:id', (req, res) => {

  Facility.findById(req.params.id)
    .populate({ path: 'repID', select: '_id, name'})
    .then(facility => res.json(facility))
    .catch(err => res.status(404).json({facilitynotfoud: 'There is no facility matching that request'}))

})


module.exports = router;