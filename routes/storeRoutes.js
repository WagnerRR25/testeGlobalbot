
const ViaCep = require('node-viacep').default;

const router = require('express').Router()

const Store = require('../models/Store')

router.post('/', async (req, res) => {

  const {nameStore, responsible, address, phoneNumber} = req.body

  if (!nameStore) {
      res.status(422).json({ error: 'O nome da loja é obrigatório!'})
      return
  }

  const store = {
      nameStore,
      responsible,
      address,
      phoneNumber
  }

  try{

      await Store.create(store)

      res.status(201).json({message: 'Loja inserida no sistema com sucesso!'})

  } catch (error) {
      res.status(500).json({ error: error})
  }
})

router.post('/', async (req, res) => {

    const {ViaCep} = req.body
  
    if (!ViaCep) {
        res.status(422).json({ error: 'Cep campo obrigatório!'})
        return
    }
  
    const cep = {
        cep,
    }
  
    try{
  
        await viaCep.create(cep)
  
        res.status(201).json({message: 'Cep criado com sucesso!'})
  
    } catch (error) {
        res.status(500).json({ error: error})
    }
  })

router.get('/', async (req, res) => {
    try {

        const stores = await Store.find()

        res.status(200).json(stores)
    } catch (error) {
        res.status(500).json({ error: error})
    }    
})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {

        const store = await Store.findOne({ _id: id })

        if (!store) {
            res.status(422).json({ message: 'O loja não foi encontrada!'})
            return
        }

        res.status(200).json(store)
    } catch (error) {
        res.status(500).json({ error: error})
    } 
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
  
    const { nameStore, responsible, address, phoneNumber } = req.body
  
    const store = {
        nameStore,
        responsible,
        address,
        phoneNumber,
    }
  
    try {
      const updatedStore = await Store.updateOne({ _id: id }, store)
      
      if (updatedStore.matchedCount === 0) {
        res.status(422).json({ message: 'Loja não foi encontrada!' })
        return
      }

      res.status(200).json(store)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    const store = await Store.findOne({ _id: id })
  
    if (!store) {
      res.status(422).json({ message: 'Loja não foi encontrada!' })
      return
    }
  
    try {
      await store.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Loja removida com sucesso!' })
    } catch (error) {
      res.status(500).json({ error: error })
    }
  })

module.exports = router