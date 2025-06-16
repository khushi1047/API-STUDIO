const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/update-server', (req, res) => {
  const { code } = req.body;

  fs.writeFile('./server.js', code, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error writing file');
    }

    console.log('Backend code updated successfully!');
    return res.send('Backend code updated successfully!');
  });
});

app.listen(PORT, () => console.log(`Code Receiver API running on port ${PORT}`));
