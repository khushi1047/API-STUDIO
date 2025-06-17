import React, { useState } from "react";
import Split from "react-split";
import ApiTesterPanel from "./components/ApiTesterPanel";
import ServerResponsePanel from "./components/ServerResponsePanel";
import CodeEditorPanel from "./components/CodeEditorPanel";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [isRegistering, setIsRegistering] = useState(false);
    const [serverResponse, setServerResponse] = useState("");

  
    if (!isLoggedIn && !isRegistering) {
        return <LoginForm setIsLoggedIn={setIsLoggedIn} setIsRegistering={setIsRegistering} />;
    }

    if (!isLoggedIn && isRegistering) {
        return <RegisterForm setIsRegistering={setIsRegistering} />;
    }

    return (
        <div className="h-screen w-screen flex relative bg-gray-100">
          
            <button
                onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                }}
                className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 z-50"
            >
                Logout
            </button>

           
            <Split
                className="flex w-full h-screen pt-16"
                sizes={[50, 50]}
                minSize={300}
                direction="horizontal"
            >
              
                <div className="h-full w-full p-4 bg-gray-100 overflow-auto flex flex-col space-y-4">
                    <ApiTesterPanel setServerResponse={setServerResponse} />
                    <ServerResponsePanel serverResponse={serverResponse} />
                </div>

               
                <div className="h-full w-full p-4 bg-gray-50 overflow-auto">
                    <CodeEditorPanel />
                </div>
            </Split>
        </div>
    );
}
