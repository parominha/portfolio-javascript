const express = require("express");
const cors = require('cors')

const authRoutes = require('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

const app = express();

app.use(express.json()) 
app.use(cors())

require('dotenv').config();

const port = 3000;

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('A API está funcionando normalmente!');
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})