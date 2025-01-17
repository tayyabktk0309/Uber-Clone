const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const BlacklistTokenModel = require("../models/blacklisttoken");


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
    res.status(200).json({ token, captain });

  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
};

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email });
    if (!captain) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const validPassword = await bcrypt.compare(password, captain.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ token, captain });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
}


module.exports.getCaptainProfile = async (req, res) => {
  try {
    const captain = req.captain;
    res.status(200).json(captain);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
}

module.exports.logoutCaptain = async (req, res) => {
  res.clearCookie("token");
    const token =  req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlacklistTokenModel.create({token});
    res.status(200).json({ message: "Logout successfully" });
}