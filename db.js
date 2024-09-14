const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/livros'; 

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useUnifiedTopology: true
    });
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
