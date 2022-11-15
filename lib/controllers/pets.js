const { Router } = require('express');
const PastPets = require('../models/PastPets');

module.exports = Router().get('/', async (req, res) => {
  const pets = await PastPets.getAll();
  const filtered = pets.map(({ id, name }) => ({
    id,
    name,
  }));
  res.json(filtered);
});
