// Файл controllers/games.js

const sendAllGames = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // Вернём найденные игры в формате JSON
  res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
}; 

const sendGameById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

const sendGameUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({ message: "Данные об игре обновлены" });
}; 

const sendGameDeleted = (req, res) => {
res.setHeader("Content-Type", "application/json");
res.end(JSON.stringify(req.game));
}; 

module.exports.sendAllGames = sendAllGames;
module.exports.sendGameCreated = sendGameCreated;
module.exports.sendGameById = sendGameById;
module.exports.sendGameUpdated = sendGameUpdated;
module.exports.sendGameDeleted = sendGameDeleted;