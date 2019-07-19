const router = require('express').Router();
const bookRoutes = require("./booksRoutes");
const creatorRoutes = require("./creatorRoutes");
const userRoutes = require("./userRoutes");

// Book routes
router.use("/books", bookRoutes);

// Creator routes
router.use("/creators", creatorRoutes);

// User routes
router.use("/users", userRoutes);

module.exports = router;
