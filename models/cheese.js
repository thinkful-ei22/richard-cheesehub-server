const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema({
  name: String
});

cheeseSchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  versionKey: false,  // remove `__v` version key
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
  }
});

module.exports= mongoose.model('Cheese', cheeseSchema);