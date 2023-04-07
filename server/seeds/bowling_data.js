const { Password } = require("@mui/icons-material");
const bcrypt = require("bcrypt");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const users = [
  { Username: "Jason1", Password: bcrypt.hashSync("password", 10), isManager: false },
  { Username: "Joseph2", Password: bcrypt.hashSync("password", 10), isManager: false },
  { Username: "Jacob3", Password: bcrypt.hashSync("password", 10), isManager: true },
  { Username: "Kyle4", Password: bcrypt.hashSync("password", 10), isManager: false },
  { Username: "David5", Password: bcrypt.hashSync("password", 10), isManager: true },
];

const bowlingItems = [
  {
    ItemName: "Brunswick TZone Indigo Swirl",
    Description: "Spare Ball",
    Quantity: 250,
    UserId: 1,
  },
  {
    ItemName: "Hammer Black Widow Pink Pearl Urethane",
    Description: "Mid Performance",
    Quantity: 300,
    UserId: 1,
  },
  {
    ItemName: "Hammer Black Widow 2.0 Hybrid",
    Description: "Upper Mid Performance",
    Quantity: 200,
    UserId: 2,
  },
  {
    ItemName: "Brunswick TZone Caribbean Blue",
    Description: "Spare Ball",
    Quantity: 100,
    UserId: 2,
  },
  {
    ItemName: "Brunswick TZone Frozen Bliss",
    Description: "Spare Ball",
    Quantity: 59,
    UserId: 3,
  },
  {
    ItemName: "Storm Phaze II",
    Description: "Upper Mid Performance",
    Quantity: 49,
    UserId: 3,
  },
  {
    ItemName: "900 Global Eternity Pear",
    Description: "High Performance",
    Quantity: 10,
    UserId: 4,
  },
  {
    ItemName: "Track Archetype",
    Description: "High Performance",
    Quantity: 74,
    UserId: 4,
  },
  {
    ItemName: "Radical Katana Assault",
    Description: "High Performance",
    Quantity: 189,
    UserId: 5,
  },
  {
    ItemName: "Ebonite Game Braker 4 Hybrid",
    Description: "Mid Performance",
    Quantity: 201,
    UserId: 5,
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users_tbl").del();
  await knex("users_tbl").insert(users);

  await knex("bowling_tbl").del();
  await knex("bowling_tbl").insert(bowlingItems);
};
