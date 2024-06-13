const { v4: uuid } = require("uuid");
const OperationsTrays = require('../database/OperationTray.js')

const getAllOperationsTrays = () => {
  const allOperationsTrays = OperationsTrays.getAllOperationsTrays()    
  return allOperationsTrays;
};

const getOneOperationTray = (operationTrayId) => {
  const operationTray = OperationsTrays.getOneOperationTray(operationTrayId);
  return operationTray; 
};

const createNewOperationTray = (newOperationTray) => {
  const operationTryToInsert = {
    ...newOperationTray,
    idOperationTry: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  }
  const createdOperationTry = OperationsTrays.createNewOperationTray(operationTryToInsert)  
  return createdOperationTry
};

const updateOperationTray = (operationTrayId, changes) => {
  const updatedOperationTray = OperationsTrays.updateOperationTray(operationTrayId, changes);
  return updatedOperationTray;
};

const deleteOperationTray = (operationTrayId) => {
  OperationsTrays.deleteOperationTray(operationTrayId)
};

module.exports = {
  getAllOperationsTrays,
  getOneOperationTray,
  createNewOperationTray,
  updateOperationTray,
  deleteOperationTray,
};