
const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const storeRoutes = require('./routes/storeRoutes')

app.use('/store', storeRoutes)

app.get('/', (req,res) => (

    res.status(200).json({ message: 'Hello express!'})
))

const DB_USER = 'WagnerRR25'
const DB_PASSWORD = encodeURIComponent('QaMMRJ3LDt3Np2qA')

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirestfulcluster.unjmnpv.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
    console.log('conectado ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))




