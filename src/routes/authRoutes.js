const express = require("express");
const router = express.Router();

const auth =
require("../middleware/Authmiddleware");

const registercontroller =
require("../controllers/authController");

const logincontroller =
require("../controllers/loginController");

router.post(
    "/register",
    registercontroller.register
);

router.post(
    "/login",
    logincontroller.login
);

router.get(
    "/profile",
    auth,
    logincontroller.profile
);

module.exports = router;