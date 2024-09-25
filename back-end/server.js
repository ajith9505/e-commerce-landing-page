const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const dbConnection = require('./config/dbConnect');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes')

const app = express();

const PORT = process.env.PORT || 3500
dbConnection()

app.use(cors())

app.use(express.json())

app.use('/api/products', productRoutes)

mongoose.connection.once('open', () => {
    console.log('DB Connected');
    app.listen(PORT, ()=> console.log('server running on port 3500'))
})