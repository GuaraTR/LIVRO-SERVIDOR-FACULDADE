const mongoose = require('mongoose'); 


const LivroSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  titulo: { type: String, required: true },
  codEditora: { type: Number, required: true },
  resumo: { type: String },
  autores: [{ type: String }] 
});


const Livro = mongoose.model('Livro', LivroSchema, 'livros');


module.exports = Livro;
