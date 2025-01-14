const userModel = require("../models/user");
const userService = require("../services/user.service");
const BlacklistTokenModel = require("../models/blacklisttoken");

const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, lastname, email, password } = req.body;
  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
  try {
  } catch (error) {}
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie("token");
    const token =  req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlacklistTokenModel.create({token});
    res.status(200).json({ message: "Logout successfully" });
}
