

const mongoose = require('mongoose')

const Store = mongoose.model('Store',{
  nameStore: String,
  responsible: String,
  completeAddress: String,
  phoneNumber: Number,
})

module.exports = Store