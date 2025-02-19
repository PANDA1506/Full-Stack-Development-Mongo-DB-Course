import { useState } from "react";
import React from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-96">
      <input
        type="text"
        className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-3 text-lg font-semibold text-gray-700">{text}</p>
    </div>
  );
};

export default TextUpdater;


