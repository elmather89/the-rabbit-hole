const router = require('express').Router();
const bookRoutes = require("./booksRoutes");
// const creatorRoutes = require("./creatorRoutes");
// const userRoutes = require("./user");

// Book routes
router.use("/books", bookRoutes);

// Creator routes
// router.use("/creator", creatorRoutes);

// User routes
// router.use("/users", userRoutes);

module.exports = router;
