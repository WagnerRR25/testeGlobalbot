const ViaCep = require('node-viacep').default;
 
const viacep = new ViaCep({
  type: 'json'
})

  const viaCep =  async (cep) => {
    const _cep = await viacep.zipCod.getZip(cep).then(data => data.json()).then(data => data);
    return _cep
}


const mongoose = require('mongoose')

const Store = mongoose.model('Store',{
  nameStore: String,
  responsible: String,
  address: String,
  phoneNumber: Number
})

module.exports = Store, viaCep