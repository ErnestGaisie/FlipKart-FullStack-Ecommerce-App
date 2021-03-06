const express = require("express");
const {
  signup,
  signin,
  requireSignin,
} = require("../../controllers/admin/auth");
const {
  validateSigninRequest,
  validateSignupRequest,
  isRequestValidated,
} = require("../../validators/auth");
const router = express.Router();

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

module.exports = router;
