const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }

  try {
    const { fullname, email, password, vehicle } =
      req.body;
    const existingCaptain = await captainModel.findOne({email});
    if (existingCaptain) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const hashPassword = await captainModel.hashPassword(password);
    
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate : vehicle.plate,
      capacity : vehicle.capacity,
      vehicletype : vehicle.vehicletype,
    });
    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
  } catch (error) {
    console.log(error);
    
    res.status(400).send(error.message);
  }
};
