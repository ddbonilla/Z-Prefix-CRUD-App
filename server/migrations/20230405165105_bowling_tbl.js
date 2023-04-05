/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users_tbl", (table) => {
      table.increments("id").primary();
      table.string("Username").notNullable();
      table.string("Password").notNullable();
      table.boolean("isManager").defaultTo(false);
    })
    .createTable("bowling_tbl", (table) => {
      table.increments("InvId").primary();
      table.string("ItemName").notNullable();
      table.string("Description");
      table.integer("Quantity");

      table.integer("UserId").unsigned().notNullable();
      table.foreign("UserId").references("id").inTable("users_tbl");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("bowling_tbl")
    .dropTableIfExists("users_tbl");
};
