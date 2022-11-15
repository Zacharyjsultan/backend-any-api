const pool = require('../utils/pool');

module.exports = class President {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.party = row.party;
    this.number = row.number;
    this.country = row.country;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from President');
    return rows.map((row) => new President(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from President WHERE id = $1', [
      id,
    ]);
    return new President(rows[0]);
  }
};
