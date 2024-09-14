const Livro = require('./livro-schema'); 


const obterLivros = async () => {
  try {
    
    return await Livro.find();
  } catch (err) {
    console.error('Erro ao obter livros:', err);
    throw err; 
  }
};


const incluir = async (livro) => {
  try {
    
    return await Livro.create(livro);
  } catch (err) {
    console.error('Erro ao incluir livro:', err);
    throw err; 
  }
};


const excluir = async (codigo) => {
  try {
    
    const result = await Livro.deleteOne({ _id: codigo });
    return result.deletedCount > 0; 
  } catch (err) {
    console.error('Erro ao excluir livro:', err);
    throw err; 
  }
};


module.exports = { obterLivros, incluir, excluir };
