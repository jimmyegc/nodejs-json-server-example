const express = require("express");
const operationsTrays = require("../../controllers/operationsTraysController");

const router = express.Router();

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 */
router.get("/", operationsTrays.getAllOperationsTrays);
router.get("/:id", operationsTrays.getOneOperationTray);
router.post("/", operationsTrays.createNewOperationTray);
router.put("/", operationsTrays.updateOperationTray);
router.patch("/", operationsTrays.updateStatusOperationTry)
router.delete("/:id", operationsTrays.deleteOperationTray);

module.exports = router;