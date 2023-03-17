const jwt = require("jsonwebtoken");
const secret = "this-is-the-secret-key";
const expiresIn = "1h";

exports.sign = (payload) => jwt.sign(payload, secret, { expiresIn });

exports.verify = (req, res, next) => {
  const token = req.headers["authorization"];
  try {
    const payload = jwt.verify(token, secret);
    console.log(payload);
    req.userId = payload.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized!" + error });
  }
};
