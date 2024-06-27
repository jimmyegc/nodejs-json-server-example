const express = require("express");
const webformssetup = require("../../controllers/webformssetup");

const router = express.Router();

router.get("/", webformssetup.getAllWebFormsSetup);
router.get("/:id", webformssetup.getOneWebFormSetup);

module.exports = router;
