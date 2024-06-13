const DB = require('./db.json')

const getAllHistories = () => {     
  return DB.historyoperationtrays
}

const getOneHistory = (id) => {
  const history = DB.historyoperationtrays.find((item) => item.idEventHistory == id);  
  if (!history) return;  
  return history;
}

module.exports = { 
  getAllHistories,
  getOneHistory,
}