const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Card = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  imageUrlHiRes: { type: String, required: true },
  supertype: { type: String, required: true },
  subtype: { type: String },
  number: { type: String, required: true },
  artist: { type: String, required: true },
  rarity: { type: String, required: true },
  series: { type: String, required: true },
  set: { type: String, required: true },
  setCode: { type: String, required: true },
  text: []
}, { strict: false });

module.exports = mongoose.model('Card', Card);
