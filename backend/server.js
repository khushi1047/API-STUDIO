// Your initial backend code here with MongoDB and Authentication

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/apiStudio', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch((err) => console.error('❌ MongoDB Connection Failed:', err));

// Middlewares
app.use(cors());
app.use(express.json());

// Authentication Routes
app.use('/auth', authRoutes);

// Sample GET API
app.get('/api/example', (req, res) => {
    res.json({ message: 'GET API working Fine!' });
});

// Sample POST API
app.post('/api/example', (req, res) => {
    const { data } = req.body;
    res.json({ message: 'POST API Received Successfully!', receivedData: data });
});

// Sample PUT API
app.put('/api/example', (req, res) => {
    const { data } = req.body;
    res.json({ message: 'PUT API Updated Successfully!', updatedData: data });
});

// Sample DELETE API
app.delete('/api/example', (req, res) => {
    res.json({ message: 'DELETE API Deleted Successfully!' });
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
