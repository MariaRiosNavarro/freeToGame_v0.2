import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
import Button from "../components/Button/Button";

const DetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState("");

  useEffect(() => {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2da045f70dmsh00a6d7151352363p157277jsn3936fc9a63e5",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
      mode: "cors",
    };

    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => setGame(data))
      .catch((error) => {
        console.error("Game Over: Try Again with your Fetch:", error);
      });
  }, []);
  // console.log(game);

  return (
    <section className="detail-page page-style">
      <div className="big-image">
        {game.screenshots?.map((item, index) =>
          index === 0 ? (
            <img
              key={item.id}
              src={item.image}
              alt=""
              className="game-preview"
            />
          ) : null
        )}
      </div>

      <div className="detail-grid">
        <div className="detail-flex">
          <h1>{game.title}</h1>
          <img src={game.thumbnail} alt={game.title} />
          <h3>Plattform: {game.platform}</h3>
          <p className="card-category">{game.genre}</p>
          <br />
          <Button href={game.game_url} btnName="Play now" />
        </div>

        <div className="about">
          <h2>About</h2>
          <p>{game.description}</p>
        </div>
      </div>

      <div className="detail-2col">
        {game.screenshots?.map((item, index) =>
          index > 0 && index < 3 ? (
            <img
              key={item.id}
              src={item.image}
              alt=""
              className="game-preview"
            />
          ) : null
        )}
      </div>

      <div className="detail-description">
        <div className="info-wrapper">
          <h2>Additional Information</h2>
          <p>{game.short_description}</p>
          <div className="info-flex">
            <div>
              <h4>Developer</h4>
              <h4>Publisher</h4>
              <h4>Release Date</h4>
            </div>
            <div className="info-fetch">
              <p>{game.developer}</p>
              <p>{game.publisher}</p>
              <p>{game.release_date}</p>
            </div>
          </div>
        </div>

        <div className="require-wrapper">
          <h2>Minimum System Requirements</h2>
          <h3>({game.platform})</h3>
          <div className="require-flex">
            <div>
              <h4>OS</h4>
              <p>{game.minimum_system_requirements?.os}</p>
              <h4>Memory</h4>
              <p>{game.minimum_system_requirements?.memory}</p>
              <h4>Storage</h4>
              <p>{game.minimum_system_requirements?.storage}</p>
            </div>

            <div className="require-fetch">
              <h4>Processor</h4>
              <p>{game.minimum_system_requirements?.processor}</p>
              <h4>Graphics</h4>
              <p>{game.minimum_system_requirements?.graphics}</p>
              <h4>Additional Notes</h4>
              <p>Specifications may change during development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
