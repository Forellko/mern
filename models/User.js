const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, requare: true, unique: true },
  password: { type: String, requare: true },
  links: [{ type: Types.ObjectId, ref: 'Link' }],
});

module.exports = model('User', schema);
