const express = require('express');
const mongoose = require('mongoose');
const usuariosRoutes = require('./rotas');

const app = express();
app.use(express.json());

// Conexão com o MongoDB (local)
mongoose.connect('mongodb://localhost:27017/teste', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB', err);
});

app.use('/colecaocolecao', usuariosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});