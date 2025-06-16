import React from "react";

export default function ServerResponsePanel({ serverResponse }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Server Response</h2>
      <pre className="bg-gray-200 p-4 rounded h-80 overflow-auto">
        {serverResponse || "No response yet..."}
      </pre>
    </div>
  );
}
