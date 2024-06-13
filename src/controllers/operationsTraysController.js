const operationsTraysService = require("../services/operationsTraysService")

const getAllOperationsTrays = (req, res) => {
  const operationsTrays = operationsTraysService.getAllOperationsTrays()  
  res.send({ status: "OK", data: operationsTrays });
};

const getOneOperationTray = (req, res) => {
  const {
    params: { id },
  } = req;
  if (!id) {
    return;
  }
  const operationTray = operationsTraysService.getOneOperationTray(id)
  res.send({ status: "OK", data: operationTray });    
};

const createNewOperationTray = (req, res) => {
  const { body } = req 
  const newOperationTray = {    
    nameOperationTry: body.nameOperationTry,
    active: body.active,
    newRequests: body.newRequests,
    listingRequest: body.listingRequest,
    comments: body.comments
  }
  const createdOperationTray = operationsTraysService.createNewOperationTray(newOperationTray)
  res.status(201).send({ status: "OK", data: createdOperationTray });
};

const updateOperationTray = (req, res) => {
  const {
    body    
  } = req;
  if (!body.idOperationTry) return;  
  // console.log(body.idOperationTry)
  const updatedOperationTray = operationsTraysService.updateOperationTray(body.idOperationTry, body);
  res.send({ status: "OK", data: updatedOperationTray });
};

const updateStatusOperationTry = ( req, res) => {
  const { 
    body 
  } = req 
  if(!body.idOperationTry) return 
  const updatedOperationTray = operationsTraysService.updateStatusOperationTry(body.idOperationTry, body)  
  res.send({ status: "OK", data:  updatedOperationTray })
}

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
  updateStatusOperationTry,
  deleteOperationTray,
};