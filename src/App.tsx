import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/Auth/LoginPage";
import { SignUpPage } from "@/pages/Auth/SignUpPage";
import { HomePage } from "@/pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;