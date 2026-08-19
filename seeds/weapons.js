const { parseCSV } = require("../src/functions.js");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const records = await parseCSV("initial_data/dataset_weapons_skyrim_1.csv");
  const cleanedWeapons = records.map(weapon => {
    return {
      ...weapon,
      speed: weapon.speed == "" ? undefined : weapon.speed,
    }
  })
  await knex('weapons').del()
  await knex('weapons').insert(cleanedWeapons);
};
