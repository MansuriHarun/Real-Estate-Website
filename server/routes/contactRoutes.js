const router = require("express").Router();
const saveContact = require("../controllers/contactController");

router.route("/contact").post(saveContact);

module.exports = router;
