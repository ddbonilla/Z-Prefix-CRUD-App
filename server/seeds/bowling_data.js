/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const users = [
  {Username: "Jason1", Password: "password", isManager: false},
  {Username: "Joseph2", Password: "password", isManager: false},
  {Username: "Jacob3", Password: "password", isManager: true},
  {Username: "Kyle4", Password: "password", isManager: false},
  {Username: "David5", Password: "password", isManager: true},
]

const bowlingItems = [
  {UserId: 1, ItemName: "Brunswick TZone Indigo Swirl", Description: "Spare Ball", Quantity: 250 },
  {UserId: 1, ItemName: "Hammer Black Widow Pink Pearl Urethane", Description: "Mid Performance", Quantity: 300 },
  {UserId: 2, ItemName: "Hammer Black Widow 2.0 Hybrid", Description: "Upper Mid Performance", Quantity: 200 },
  {UserId: 2, ItemName: "Brunswick TZone Caribbean Blue", Description: "Spare Ball", Quantity: 100 },
  {UserId: 3, ItemName: "Brunswick TZone Frozen Bliss", Description: "Spare Ball", Quantity: 59 },
  {UserId: 3, ItemName: "Storm Phaze II", Description: "Upper Mid Performance", Quantity: 49},
  {UserId: 4, ItemName: "900 Global Eternity Pear", Description: "High Performance", Quantity: 10 },
  {UserId: 4, ItemName: "Track Archetype", Description: "High Performance", Quantity: 74 },
  {UserId: 5, ItemName: "Radical Katana Assault", Description: "High Performance", Quantity: 189 },
  {UserId: 5, ItemName: "Ebonite Game Braker 4 Hybrid", Description: "Mid Performance", Quantity: 201 },
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_tbl').del()
  await knex('users_tbl').insert(users);

  await knex('bowling_tbl').del()
  await knex('bowling_tbl').insert(bowlingItems);
};
