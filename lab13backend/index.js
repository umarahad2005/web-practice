const express = require('express');
import connection from './db/connection';

const app = express();
app.use(express.json());
connection();
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number
    }); 

const usermodel = mongoose.model('User', userSchema); 

app.get('/users', async (req, res) => {
    try {
        const users = await usermodel.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.post('/users', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = await usermodel.create({ name, email, age });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create user' });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const updatedUser = await usermodel.findByIdAndUpdate(
            req.params.id,
            { name, email, age },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update user' });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await usermodel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to delete user' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});