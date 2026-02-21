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

app.post('/api/register', (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ error: 'username, password and email are required' });
    }

    // In a real application you'd hash the password and store in a database
    const newUser = { id: users.length + 1, username, email };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// simple in-memory store for the example
const users = [];

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});