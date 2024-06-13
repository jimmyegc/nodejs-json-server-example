const DB = require('./db.json')
const { saveToDatabase } = require("./utils");

const getAllOperationsTrays = () => {   
  // console.log("database", DB.operationstrays)
  return DB.operationstrays
}

const getOneOperationTray = (operationTrayId) => {
  const operationTray = DB.operationstrays.find((item) => item.idOperationTry === operationTrayId);
  if (!operationTray) {
    return;
  }
  return operationTray;
}

const createNewOperationTray = (newOperationTray) => {
  const isAlreadyAdded = DB.operationstrays.findIndex((operationTray) => operationTray.nameOperationTry === newOperationTray.nameOperationTry) > -1
  if(isAlreadyAdded) return 
  DB.operationstrays.push(newOperationTray)
  saveToDatabase(DB);
  return newOperationTray;
}

const updateOperationTray = (operationTrayId, changes) => {
  const indexForUpdate = DB.operationstrays.findIndex(
    (operationTray) => operationTray.idBandejaOperacion === operationTrayId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedOperationTray= {
    ...DB.bandejasoperacion[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.operationstrays[indexForUpdate] = updatedOperationTray;
  saveToDatabase(DB);
  return updatedOperationTray;
}

const deleteOperationTray = (operationTrayId) => {
  const indexForDeletion = DB.operationstrays.findIndex(
    (operationTray) => operationTray.idOperationTry === operationTrayId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.operationstrays.splice(indexForDeletion, 1);
  saveToDatabase(DB);

}

module.exports = { 
  getAllOperationsTrays,
  getOneOperationTray,
  createNewOperationTray,
  updateOperationTray,
  deleteOperationTray
}