const sendAllUsers = (req, res) => {

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(req.usersArray));
};

const sendUserCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
}; 

const sendUserById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendUserUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({message: "Данные о пользователях обновлены"});
};

const sendUserDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
  }; 


module.exports.sendAllUsers = sendAllUsers;
module.exports.sendUserCreated = sendUserCreated;
module.exports.sendUserById = sendUserById;
module.exports.sendUserUpdated = sendUserUpdated;
module.exports.sendUserDeleted = sendUserDeleted;
