import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllGamesPage from "./pages/AllGamesPage";
import RecentlyPage from "./pages/RecentlyPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import { api_key } from "../config";

function App() {
  const [newGames, setNewGames] = useState([]);

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
  // const urlRecently = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
    mode: "cors",
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((games) => setNewGames(games))
      .catch((err) => console.error("Fetch Isue", err));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header newGames={newGames} />
        <Routes>
          <Route path="/" element={<HomePage newGames={newGames} />}></Route>
          <Route
            path="/allgames"
            element={<AllGamesPage newGames={newGames} />}
          ></Route>
          <Route
            path="/recently"
            element={<RecentlyPage newGames={newGames} />}
          ></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
