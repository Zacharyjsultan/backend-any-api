const pool = require('../utils/pool');

module.exports = class PastPets {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.animal = row.animal;
    this.nickname = row.nickname;
    this.age = row.age;
    this.smells = row.smells;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from past_pets');
    return rows.map((row) => new PastPets(row));
  }
};
