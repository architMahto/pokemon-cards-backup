const fetch = require('node-fetch');
const card = require('../models/cards');

export class CardsController {
  static async createBackup(req, res) {
    try {
      const pokemonApiCardsResponse = await fetch('https://api.pokemontcg.io/v1/cards?setCode=base4');
      const pokemonApiCardsJson = await pokemonApiCardsResponse.json();
      const pokemonApiCards = pokemonApiCardsJson['cards'];

      for (const pokemonApiCard of pokemonApiCards) {
        await card.create(pokemonApiCard);
      }

      res.status(200).json({ message: 'Backup Successful' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  }

  static async purgeBackup(req, res) {
    try {
      await card.remove({})

      res.status(200).json({ message: 'Purge Successful' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err })
    }
  }

  static async searchBackup(req, res) {
    try {
      const searchResults = await card.find(req.query);
      res.status(200).json({ message: 'Search Succcessful', results: searchResults})
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
}
