const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const proxyRoutes = require("./proxy");

router.use("/api", apiRoutes);

module.exports = router;
