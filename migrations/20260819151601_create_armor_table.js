/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('armor', table => {
    table.increments('id');
    table.text('name');
    table.float('armor');
    table.float('encumbrance');
    table.float('gold');
    table.text('upgrade');
    table.text('perk');
    table.text('type_armor');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('armor');
};
