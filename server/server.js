const express = require('express');

const app = express();

const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) =>{
 res.json({ message: 'Welcome to the E-commerce API' });
});

app.post('/api/test', (req, res) =>{
 res.json({ data:req.body });
});

app.listen(PORT, () => {

0})