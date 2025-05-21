const express = require('express');
const router = express.Router();
const { Supplier, Brand } = require('./modelos');

    //create supplier
router.post('/suppliers', async (req, res) => {
try {
    const { cod_gan } = req.body;
    const existe = await Supplier.findOne({cod_gan});
    if(existe){
      return res.status(400).json({ erro: 'codigo gan ja cadastrado.'});
    }
    const sup = await Supplier.create(req.body);
    res.status(201).json(sup);

  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

    //read supplier
router.get('/suppliers', async (req, res) => {
  try {
    const filtros = { ...req.query };
    const lista = await Supplier.find(filtros);
    res.json(lista);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

    //update supplier 
router.put('/suppliers/:id', async (req, res) => {
  try {
    const atualizado = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ erro: 'Supplier não encontrado' });
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
}); 

    //delete supplier
router.delete('/suppliers/:id', async (req, res) => {
  try {
    const removido = await Supplier.findByIdAndDelete(req.params.id);
    if (!removido) return res.status(404).json({ erro: 'Supplier não encontrado' });
    res.json({ mensagem: 'Supplier removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

    // create brand
router.post('/brands', async (req, res) => {
  try {
    const { vtex_name } = req.body;
    const existe = await Supplier.find({vtex_name});
    if(existe){
      return res.status(400).json({ erro: 'Nome VTEX ja cadastrado cadastrado.'});
    }
    const nova = await Brand.create(req.body);
    res.status(201).json(nova);

  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

    //read brand
router.get('/brands', async (req, res) => {
  try {
    const filtros = { ...req.query };
    const lista = await Brand.findOne(filtros);
    res.json(lista);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

    //update 
router.put('/brands/:id', async (req, res) => {
  try {
    const atualizada = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizada) return res.status(404).json({ erro: 'Brand não encontrada' });
    res.json(atualizada);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

    //delete
router.delete('/brands/:id', async (req, res) => {
  try {
    const removida = await Brand.findByIdAndDelete(req.params.id);
    if (!removida) return res.status(404).json({ erro: 'Brand não encontrada' });
    res.json({ mensagem: 'Brand removida com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;