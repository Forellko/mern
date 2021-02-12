require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use('/api/auth', require('./routes/routerAuth'));

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log('app.js > start: ---', error);
  }
};

app.listen(PORT, () => {
  console.log(`on port: ${PORT}`);
});
