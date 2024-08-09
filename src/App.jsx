import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Questions from "./pages/Questions";
import { Routes, Route } from "react-router-dom";
import IMAGES from "./assets/Images";
function App() {
  //[url('https://img.freepik.com/free-vector/blue-grunge-background_1048-2081.jpg?t=st=1722068238~exp=1722071838~hmac=bbc77d28147c0dfb66b90d398a68077125f3501c3c5296e28bfc2f082f14680a&w=740
  return (
    <div className="bg-main-bg">
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
