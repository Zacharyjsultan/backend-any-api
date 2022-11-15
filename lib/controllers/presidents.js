const { Router } = require('express');
const President = require('../models/PastPresidents');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const presidentId = await President.getById(req.params.id);
    res.json(presidentId);
  })
  .get('/', async (req, res) => {
    const presidentList = await President.getAll();
    const filtered = presidentList.map(({ id, name, party }) => ({
      id,
      name,
      party,
    }));
    res.json(filtered);
  });
