const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Temporary in-memory "database"
const users = [];

// Route to register a user
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email is already in use
    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: 'Email already registered' });
    }

    // Add user to the "database"
    users.push({ name, email, password });
    res.status(201).json({ message: 'User registered successfully' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
