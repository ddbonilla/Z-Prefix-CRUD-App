const knex = require("./dbConnection");

//bowling_table queries
const getAllItems = () => {
  return knex
    .select("*")
    .from("bowling_tbl")
    .orderBy("ItemName")
    .join("users_tbl", "users_tbl.id", "bowling_tbl.UserId");
};

const getOneItem = (id) => {
  return knex.select("*").from("bowling_tbl").where("InvId", "=", parseInt(id));
};

const addItem = (item) => {
  return knex("bowling_tbl").insert(item);
};

const updateItem = (id, { ItemName, Type, Description, Quantity }) => {
  return knex("bowling_tbl")
    .where({ InvId: id })
    .update({
      ItemName,
      Type,
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

const getUserItems = (username) => {
  return knex
    .select("*")
    .from("bowling_tbl")
    .orderBy("ItemName")
    .join("users_tbl", "users_tbl.id", "bowling_tbl.UserId")
    .where("Username", "ilike", `%${username}%`);
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
  getUserItems,
};
