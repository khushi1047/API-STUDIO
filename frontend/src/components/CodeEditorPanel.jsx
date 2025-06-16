import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

export default function CodeEditorPanel() {
  const [code, setCode] = useState(`const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/example', (req, res) => {
    res.json({ message: 'API Working Fine!' });
});

app.listen(PORT, () => console.log('Server running on port ' + PORT));
`);

  const runServer = async () => {
    try {
      await axios.post('http://localhost:4000/update-server', { code });
      alert('Backend server updated! Nodemon will restart automatically.');
    } catch (error) {
      console.error(error);
      alert('Failed to update the server.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Code Editor</h2>
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 mt-4"
        onClick={runServer}
      >
        Run Server
      </button>
    </div>
  );
}
