const User = require("../model/authModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "kishan sheth super secret key", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};



module.exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);

    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });

    return res.status(201).json({ userId: user._id, token, status: true }); // 201 Created
  } catch (err) {
    const errors = handleErrors(err);

    if (err.code === 11000) {
      return res.status(409).json({ errors, status: false }); // 409 Conflict (Duplicate Email)
    }

    return res.status(400).json({ errors, status: false }); // 400 Bad Request (Validation Errors)
  }
};



module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });

    return res.status(200).json({ userId: user._id, token, status: true });
  } catch (err) {
    const errors = handleErrors(err);

    if (errors.email || errors.password) {
      return res.status(401).json({ errors, status: false }); // Unauthorized for incorrect email/password
    }

    return res.status(400).json({ errors, status: false }); // Bad Request for other validation issues
  }
};

