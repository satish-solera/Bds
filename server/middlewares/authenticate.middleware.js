const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, "process.env.tokenSecret", (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    req.user = user; // Attach the user info to the request object
    next();
  });
};

module.exports = authenticateJWT;
