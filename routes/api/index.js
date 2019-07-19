const router = require('express').Router();
const bookRoutes = require("./booksRoutes");
const creatorRoutes = require("./creatorRoutes");

// const authRoutes = require('./auth');
// router.use('/auth', authRoutes);

// Book routes
router.use("/books", bookRoutes);
router.use("/creators", creatorRoutes);

module.exports = router;
