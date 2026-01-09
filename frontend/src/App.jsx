import React from "react";
import { Route, Routes } from "react-router";
import toast from "react-hot-toast";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div>
      <button
        onClick={() => toast.success("congrats")}
        className="text-red-500 p-4 bg-pink-300"
      >
        Click
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
