const { signUp, login , logout } = require("../controllers/users.controllers");
const  createPayment  = require("../controllers/payment.controller");
const authMiddleware = require("../middlewares/authenticate.middleware")
const { Router } = require("express");

const router = Router();

router
  .post("/signup", signUp)
  .post("/login", login)
  .post("/payment", authMiddleware, createPayment)
  .post('/logout' , logout)

module.exports = router;
