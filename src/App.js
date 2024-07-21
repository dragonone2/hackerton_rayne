import React from 'react';
import Chatbot from "./Chatbot";
import Dashboard from "./Dashboard";
import AiMusic from "./AiMusic";
import BookRecommendation from "./BookRecommendation";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      {/* 웹 서비스 소개 페이지 */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/ai-music" element={<AiMusic />} />
      <Route path="/book-recommendation" element={<BookRecommendation />} />
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
