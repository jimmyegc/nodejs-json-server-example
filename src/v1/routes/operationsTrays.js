const express = require("express");
const operationsTrays = require("../../controllers/operationsTraysController");

const router = express.Router();

router.get("/", operationsTrays.getAllOperationsTrays);
router.get("/:id", operationsTrays.getOneOperationTray);
router.post("/", operationsTrays.createNewOperationTray);
router.put("/", operationsTrays.updateOperationTray);
router.delete("/:id", operationsTrays.deleteOperationTray);

module.exports = router;