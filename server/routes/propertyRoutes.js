const router = require("express").Router();
const {
  createProperty,
  getProperty,
  deleteProperty,
  getParticularProperty,
  updateProperty,
} = require("../controllers/propertyController");

router.route("/property").post(createProperty).get(getProperty);
router
  .route("/property/:id")
  .delete(deleteProperty)
  .get(getParticularProperty)
  .put(updateProperty);

module.exports = router;
