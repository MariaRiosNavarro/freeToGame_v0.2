import "./TopPC.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { api_key } from "../../../config";

const TopPC = () => {
  const [topPCGames, setToptPCGames] = useState([]);

  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=relevance";

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
      .then((games) => setToptPCGames(games.slice(0, 4))) //Only the 4thy first Results
      .catch((err) => console.error("Fetch Isue", err));
  }, []);

  return (
    <section className="top-pc-wrapper">
      {topPCGames ? (
        topPCGames.map((item, index) => (
          <div
            className={`card-wrapper card-wrapper-${index + 1}`}
            key={item.id}
          >
            <Card item={item} description={false} />
            <span className="card-number">{`${index + 1}`}</span>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default TopPC;
