

const router = require('express').Router()

const Store = require('../models/Store')

router.post('/', async (req, res) => {

  const {nameStore, responsible, completeAddress, phoneNumber} = req.body

  if (!nameStore) {
      res.status(422).json({ error: 'O nome da loja é obrigatório!'})
  }

  const store = {
      nameStore,
      responsible,
      completeAddress,
      phoneNumber
  }

  try{

      await Store.create(store)

      res.status(201).json({message: 'Loja inserida no sistema com sucesso!'})

  } catch (error) {
      res.status(500).json({ error: error})
  }
})

module.exports = router