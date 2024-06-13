const { v4: uuid } = require("uuid");
const History = require('../database/History.js')

const getAllHistories = () => {
  const allHistories = History.getAllHistories()    
  return allHistories;
};

const getOneHistory = (id) => {  
  const historyItem = History.getOneHistory(id);
  return historyItem; 
};

module.exports = {
  getAllHistories,
  getOneHistory
};