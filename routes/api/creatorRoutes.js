const router = require("express").Router();
const creatorController = require("../../controllers/creatorController");

// Matches with "/api/creators"
router.route("/")
  .get(creatorController.findAll)
  .post(creatorController.create);

// Matches with "/api/creators/:id"
router
  .route("/:id")
  .get(creatorController.findById)
  .put(creatorController.update)
  .delete(creatorController.remove);

module.exports = router;
