const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const proxyRoutes = require("./proxy");

router.use("/api", apiRoutes);
router.use("/proxy", proxyRoutes);

module.exports = router;
