import React, { useState } from "react";
import axios from "axios";

export default function ApiTesterPanel({ setServerResponse }) {
  const [url, setUrl] = useState("http://localhost:5000/api/example");
  const [method, setMethod] = useState("GET");

  const handleSend = async () => {
    try {
      const response = await axios({ method, url });
      setServerResponse(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setServerResponse(error.message);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">API Tester</h2>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 border"
        placeholder="Enter API URL"
      />
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        className="p-2 border"
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Send
      </button>
    </div>
  );
}
