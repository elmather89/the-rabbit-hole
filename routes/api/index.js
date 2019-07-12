const router = require('express').Router();
// const authRoutes = require('./auth');

// router.use('/auth', authRoutes);

const bookRoutes = require("./booksRoutes");

// Book routes
router.use("/booksRoutes", bookRoutes);

module.exports = router;
