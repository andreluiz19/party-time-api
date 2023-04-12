const router = require("express").Router();

// Service Route
const serviceRouter = require("./services");

router.use("/", serviceRouter);

// Parties Route
const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;