const express = require("express");
const historyController = require("../../controllers/historyController");

const router = express.Router();

router.get("/", historyController.getAllHistories);
router.get("/:id", historyController.getOneHistory);

module.exports = router;