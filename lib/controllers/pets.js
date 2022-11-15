const { Router } = require('express');
const PastPets = require('../models/PastPets');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const pet = await PastPets.getById(req.params.id);
    res.json(pet);
  })
  .get('/', async (req, res) => {
    const pets = await PastPets.getAll();
    const filtered = pets.map(({ id, name }) => ({
      id,
      name,
    }));
    res.json(filtered);
  });
