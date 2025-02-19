import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Form from "./Form.jsx";
// import Header from "./Header.jsx"; 
// import Cart from "./Cart.jsx";  
// import Week3_assignment from "./Week3_assignment.jsx";
import Authpage from "./Authpage";
import TextUpdater from "./Week-3-assignment/TextUpdater";
import InputForm from "./Week-3-assignment/Inputform";
import UserCard from "./Week-3-assignment/Usercard";
import StyledButton from "./Week-3-assignment/StyledButton";
import LoginForm from "./Week-3-assignment/LoginForm";


createRoot(document.getElementById("root")).render(
  <StrictMode>

    {/* <Authpage /> */}
    {/* <Week3_assignment />
    <Header />
    <App />
    <Form />  
    <Cart /> */}
    <div className="flex flex-col items-center justify-center space-y-6 p-10 min-h-screen bg-gradient-to-br from-blue-200 to-purple-300">
      <h1 className="text-4xl font-bold text-gray-800">Week 3 Assignment</h1>
      <TextUpdater />
      <InputForm />
      <UserCard name="Gautam Singh Kaushik" email="gautam@example.com" />
      <StyledButton />
      <LoginForm />
    </div>
    
    
  </StrictMode>
);

