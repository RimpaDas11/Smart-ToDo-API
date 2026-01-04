const mongoose = require('mongoose');
module.exports = mongoose.model('Task', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  completed: { type: Boolean, default: false }
}));
