const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello Khushi! This is dynamic API.' });
});

app.listen(PORT, () => console.log('Server running on port ' + PORT));
