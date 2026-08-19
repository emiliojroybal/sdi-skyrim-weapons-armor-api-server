/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('weapons', table => {
    table.increments('id');
    table.text('name').notNullable();
    table.float('damage').notNullable();
    table.float('weight').notNullable();
    table.float('gold').notNullable();
    table.text('upgrade');
    table.text('perk');
    table.text('type');
    table.text('category');
    table.float('speed').notNullable().defaultTo(0);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('weapons');
};
