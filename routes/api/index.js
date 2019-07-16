const router = require('express').Router();
const bookRoutes = require("./booksRoutes");

// const authRoutes = require('./auth');
// router.use('/auth', authRoutes);

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
