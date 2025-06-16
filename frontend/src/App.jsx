import React, { useState } from "react";
import Split from "react-split";
import ApiTesterPanel from "./components/ApiTesterPanel";
import ServerResponsePanel from "./components/ServerResponsePanel";
import CodeEditorPanel from "./components/CodeEditorPanel";

export default function App() {
  const [serverResponse, setServerResponse] = useState("");

  return (
    <div className="h-screen w-screen flex">
      <Split
        className="flex w-full h-screen"
        sizes={[50, 50]}
        minSize={300}
        direction="horizontal"
      >
        {/* Left Panel: API Tester + Response */}
        <div className="h-full w-full p-4 bg-gray-100 overflow-auto">
          <Split
            className="flex h-full"
            sizes={[50, 50]}
            minSize={200}
            direction="vertical"
          >
            <ApiTesterPanel setServerResponse={setServerResponse} />
            <ServerResponsePanel serverResponse={serverResponse} />
          </Split>
        </div>

        {/* Right Panel: Code Editor */}
        <div className="h-full w-full p-4 bg-gray-50 overflow-auto">
          <CodeEditorPanel />
        </div>
      </Split>
    </div>
  );
}
