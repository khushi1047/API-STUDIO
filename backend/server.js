// Your initial backend code here...
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample GET API
app.get('/api/example', (req, res) => {
    res.json({ message: 'GET API Working Fine!' });
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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 


