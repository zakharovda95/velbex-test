const db = require('../database/postgres.database.js');

class TableDataController {
  async setData(req, res) {
    res.header('Access-Control-Allow-Origin', '*');

    const { date, name, amount, distance } = req.body;

    const newRow = await db.query(
      `INSERT INTO table_data (date, name, amount, distance) values ($1, $2, $3, $4) RETURNING *`,
      [date, name, amount, distance],
    );

    res.json(newRow.rows[0]);
  }

  async getData(req, res) {
    res.header('Access-Control-Allow-Origin', '*');

    const workouts = await db.query(`SELECT date, name, amount, distance from table_data`);

    res.json(workouts.rows);
  }

  async updateData(req, res) {
    res.header('Access-Control-Allow-Origin', '*');

    const { id, date } = req.body;

    const result = await db.query(`UPDATE table_data set date = $1 where id = $2 RETURNING *`, [
      date,
      id,
    ]);

    res.json(result.rows[0]);
  }
}

module.exports = new TableDataController();
