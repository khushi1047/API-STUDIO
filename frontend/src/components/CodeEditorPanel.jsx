import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

export default function CodeEditorPanel() {
    const [code, setCode] = useState(`// Your initial backend code here...`);
    const [theme, setTheme] = useState('light');

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
        <div className="w-full h-full">
         
            <div className="flex justify-between mb-4 ">
                <h2 className="text-xl font-bold">Code Editor</h2>
                <button
                    onClick={() => setTheme(theme === 'light' ? 'vs-dark' : 'light')}
                    className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
                >
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
            </div>

            <Editor
                height="65vh"
                theme={theme}
                defaultLanguage="javascript"
                value={code}
                onChange={(value) => setCode(value)}
            />

                      <button
                className="bg-green-500 text-white px-4 py-2 mt-4 rounded 
                          hover:bg-green-600 active:scale-95 transition transform duration-150"
                onClick={runServer}
            >
                Run Server
            </button>
        </div>
    );
}
