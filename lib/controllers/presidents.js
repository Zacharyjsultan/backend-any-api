const { Router } = require('express');
const President = require('../models/PastPresidents');

module.exports = Router().get('/', async (req, res) => {
  const pokemonList = await President.getAll();
  const filtered = pokemonList.map(({ id, name, party }) => ({
    id,
    name,
    party,
  }));
  res.json(filtered);
});
