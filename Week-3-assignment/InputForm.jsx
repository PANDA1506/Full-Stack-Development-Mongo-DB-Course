import { useState } from "react";
import React from "react";

const InputForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Value:", input);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg w-96">
      <input
        type="text"
        className="border p-3 w-full mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full transition duration-300">
        Submit
      </button>
    </form>
  );
};

export default InputForm;

