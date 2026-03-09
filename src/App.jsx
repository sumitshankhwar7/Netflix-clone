import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Login from "./pages/Login.jsx";
import Player from "./pages/Player.jsx";
import SearchMovie from "./pages/SearchMovie.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/search" element={<SearchMovie />} />
      </Routes>
    </>
  );
}

export default App;
