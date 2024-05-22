const users = require("../models/user");
const bcrypt = require("bcryptjs");

const hashPassword = async (req, res, next) => {
  try {

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка хеширования пароля" });
  }
}; 


const findAllUsers = async (req, res, next) => {

  req.usersArray = await users.find({}, { password: 0 });
  next();
}

const createUser = async (req, res, next) => {
  console.log("POST /users");
  try {
    console.log(req.body);
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.status(400).send("Error creating user");
  }
}; 

const findUserById = async (req, res, next) => {
  console.log("GET /users/:id");
  try {
    req.user = await users.findById(req.params.id, { password: 0 });
    next();
  } catch (error) {
    res.status(404).send({ message: "User not found" });
  }
}; 

const updateUser = async (req, res, next) => {
  console.log("PUT /categories")
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.body)
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка обновления информации о пользователе" });
  }
}; 

const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error deleting user" });
  }
}; 

const checkIsUserExists = async (req, res, next) => {
  const isInArray = req.usersArray.find((game) => {
    return req.body.username === game.username || req.body.email === game.email;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Пользователь с такой почтой или именем уже существует" }));
  } else {
    next();
  }
};

const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Введите имя, email и пароль" }));
  } else {
    next();
  }
}; 

const checkEmptyNameAndEmail = async (req, res, next) => {
  if (!req.body.username || !req.body.email) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Введите имя и email" }));
  } else {
    next();
  }
}; 



module.exports.findAllUsers = findAllUsers;
module.exports.createUser = createUser;
module.exports.findUserById = findUserById;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.checkIsUserExists = checkIsUserExists;
module.exports.checkEmptyNameAndEmailAndPassword = checkEmptyNameAndEmailAndPassword;
module.exports.checkEmptyNameAndEmail = checkEmptyNameAndEmail;
module.exports.hashPassword = hashPassword;