const router = require("express").Router();
const creatorController = require("../../controllers/creatorController");

// Matches with "/api/books"
router.route("/")
  .get(creatorController.findAll)
  .post(creatorController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(creatorController.findById)
  .put(creatorController.update)
  .delete(creatorController.remove);

module.exports = router;
