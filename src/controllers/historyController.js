const historyService = require("../services/historyService")

const getAllHistories = (req, res) => {
  const histories = historyService.getAllHistories()  
  res.send({ status: "OK", data: histories });
};

const getOneHistory= (req, res) => {
  const {
    params: { id },
  } = req;
  if (!id) {
    return;
  }
  console.log(id)
  const historyItem = historyService.getOneHistory(id)
  res.send({ status: "OK", data: historyItem });    
};

module.exports = {
  getAllHistories,
  getOneHistory
}