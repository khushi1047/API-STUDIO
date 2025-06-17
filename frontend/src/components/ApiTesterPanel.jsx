import React, { useState } from "react";
import axios from "axios";

export default function ApiTesterPanel({ setServerResponse }) {
  const [url, setUrl] = useState("http://localhost:5000/api/example");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  const handleSend = async () => {
    try {
      const options = {
        method,
        url,
        headers: { 'Content-Type': 'application/json' },
      };

      // Only add request body for POST and PUT
      if (method === 'POST' || method === 'PUT') {
        options.data = JSON.parse(body);
      }

      const response = await axios(options);
      setServerResponse(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error(error);
      setServerResponse(error.message);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">API Tester</h2>

      {/* URL Input */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">API URL:</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter API URL"
        />
      </div>

      {/* Method and Send Button Row */}
      <div className="flex items-center gap-6">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>

        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-6 py-3 rounded 
                     hover:bg-blue-600 active:scale-95 transition transform duration-150"
        >
          Send
        </button>
      </div>

      {/* Body Input (Shown only for POST and PUT) */}
      {(method === 'POST' || method === 'PUT') && (
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-medium">Request Body (JSON):</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder='Example: { "data": "Your data here" }'
            rows={5}
          />
        </div>
      )}
    </div>
  );
}
