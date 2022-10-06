import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./components/pages/CreatePost";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";

import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/new" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
