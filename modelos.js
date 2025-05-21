const mongoose = require('mongoose');

const supplier = new mongoose.Schema({
  cod_gan: {
    type: String,
    required: true
  },
  razao_social: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  uf: {
    type: String,
    required: true
  },
  suframa: {
    type: [String, Number],
    required: false
  },
  cod_trib: {
    type: Number,
    required: false
  },
  contribuinte: {
    type: String,
    required: false
  },
},
{ 
  timestamps: true 
});


const brand = new mongoose.Schema({
        vtex_id: {
          type: Number,
          required: true
        },
        vtex_name: {
          type: String,
          required: true
        },
        pim_code: {
          type: String,
          required: true
        },
        pim_name: {
          type: String,
          required: true
        },
  },
{ 
  timestamps: true 
})

const Supplier = mongoose.model('Supplier', supplier);
const Brand    = mongoose.model('Brand',    brand);
module.exports = { Supplier, Brand };
