const knex = require("./dbConnection");

//bowling_table queries
const getAllItems = () => {
  return knex.select("*").from("bowling_tbl").join("users_tbl", "users_tbl.id", "bowling_tbl.UserId");
};

const getOneItem = (id) => {
  return knex.select("*").from("bowling_tbl").where("InvId", "=", parseInt(id));
};

const getUserItem = (id) => {
  return knex.select("*").from("bowling_tbl").join("users_tbl", "users_tbl.id", "bowling_tbl.UserId").where("InvId", "=", parseInt(id));
};

const addItem = (item) => {
  return knex("bowling_tbl").insert(item);
};

const updateItem = (id, { ItemName, Description, Quantity }) => {
  return knex("bowling_tbl")
    .where({ InvId: id })
    .update({
      ItemName,
      Description,
      Quantity,
    })
    .returning("*");
};

const deleteItem = (id) => {
  return knex("bowling_tbl").where({ InvId: id }).delete().returning("*");
};

const getManagers = () => {
  return knex.select("*").from("users_tbl");
};

const getUserName = (username) => {
  return knex("users_tbl")
    .select("Username", "Password", "isManager")
    .where("Username", "ilike", username);
};

const createUser = (user) => {
  return knex("users_tbl").insert(user);
};

const deleteUser = (id) => {
  return knex("users_tbl").where({ id: id }).delete().returning("*");
};

module.exports = {
  getAllItems,
  getOneItem,
  addItem,
  updateItem,
  deleteItem,
  getManagers,
  getUserName,
  createUser,
  deleteUser,
  getUserItem,
};
