const operationsTraysService = require("../services/operationsTraysService")

const getAllOperationsTrays = (req, res) => {
  const operationsTrays = operationsTraysService.getAllOperationsTrays()  
  res.send({ status: "OK", data: operationsTrays });
};

const getOneOperationTray = (req, res) => {
  const operationTray = operationsTraysService.getOneOperationTray()
  res.send("Get an existing Operation");
};

const createNewOperationTray = (req, res) => {
  const { body } = req 
  const newOperationTray = {    
    nameOperationTry: body.nameOperationTry,
    active: body.active,
    newRequests: body.newRequests,
    listingRequest: body.listingRequest
  }
  const createdOperationTray = operationsTraysService.createNewOperationTray(newOperationTray)
  res.status(201).send({ status: "OK", data: createdOperationTray });
};

const updateOperationTray = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  if (!id) {
    return;
  }
  const updatedOperationTray = operationsTraysService.updateOperationTray(id, body);
  res.send({ status: "OK", data: updatedOperationTray });
};

const deleteOperationTray = (req, res) => {
  const {
    params: { id },
  } = req;
  if (!id) {
    return;
  }
  operationsTraysService.deleteOperationTray(id);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllOperationsTrays,
  getOneOperationTray,
  createNewOperationTray,
  updateOperationTray,
  deleteOperationTray,
};