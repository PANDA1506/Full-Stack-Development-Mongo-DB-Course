import { useState } from "react";

// 1. TextUpdater Component
const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-6 bg-gray-300 rounded-lg shadow-md w-80">
      <input
        type="text"
        className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#33ffee]"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-3 text-lg font-semibold text-gray-700">{text}</p>
    </div>
  );
};

// 2. Form with Console Logging
const InputForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Value:", input);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-300 rounded-lg shadow-md w-80">
      <input
        type="text"
        className="border p-2 w-full mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33ffee]"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="!bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full">
        Submit
      </button>
    </form>
  );
};

// 3. UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 w-80 bg-white text-center">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500">{email}</p>
    </div>
  );
};

// 4. Styled Button Component
const StyledButton = () => {
  return (
    <button
      className="bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:from-indigo-900 hover:to-indigo-900 transition duration-300"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
};

// 5. LoginForm Component
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-300 rounded-lg shadow-md w-80">
      <input
        type="email"
        className="border p-2 w-full mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33ffee]"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 w-full mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#33ffee]"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="!bg-blue-900 text-white px-4 py-2 rounded-md w-full hover:bg-blue-400 transition duration-300">
        Login
      </button>
    </form>
  );
};

export default function App() {
  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-50 min-h-screen">
      <TextUpdater />
      <InputForm />
      <UserCard name="Gautam Singh kaushik" email="gautam@example.com" />
      <StyledButton />
      <LoginForm />
    </div>
  );
}



