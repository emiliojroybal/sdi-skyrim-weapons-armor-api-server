const { parseCSV } = require("../src/functions.js");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const records = await parseCSV("initial_data/dataset_armor_skyrim_1.csv");
  await knex('armor').del()
  await knex('armor').insert(records);
};