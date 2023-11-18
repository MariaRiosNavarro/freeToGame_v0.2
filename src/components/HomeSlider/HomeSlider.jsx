import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./HomeSlider.css";

const HomeSlider = ({ apiUrlEnd, description }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleGames, setVisibleGames] = useState([]);
  //   const [isHovered, setIsHovered] = useState(false);

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?${apiUrlEnd}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80caff7fbemshc112244508e4c65p1241abjsnd55fb8f398b4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
    mode: "cors",
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((games) => setVisibleGames(games.slice(0, 20)))
      .catch((err) => console.error("Fetch Isue", err));
  }, []);

  const visibleGamesSubset = [...visibleGames].slice(
    startIndex,
    startIndex + 4
  );

  const handleShowMoreClick = () => {
    if (startIndex < 15) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleShowLessClick = () => {
    if (startIndex >= 1) {
      setStartIndex(startIndex - 1);
    }
  };

  handleShowLessClick;

  //   useEffect(() => {
  //     let intervalId;

  //     const handleHoverIncrement = () => {
  //       intervalId = setInterval(() => {
  //         setStartIndex((prevIndex) => (prevIndex + 1) % 16);
  //       }, 1000);
  //     };

  //     const handleHoverEnd = () => {
  //       clearInterval(intervalId);
  //     };

  //     const sliderWrapper = document.querySelector(".slider-wrapper");
  //     if (sliderWrapper) {
  //       sliderWrapper.addEventListener("mouseenter", handleHoverIncrement);
  //       sliderWrapper.addEventListener("mouseleave", handleHoverEnd);
  //     }

  //     return () => {
  //       if (sliderWrapper) {
  //         sliderWrapper.removeEventListener("mouseenter", handleHoverIncrement);
  //         sliderWrapper.removeEventListener("mouseleave", handleHoverEnd);
  //       }
  //     };
  //   }, []);

  return (
    <section className="slider-wrapper">
      {/*onMouseEnter={handleHoverIncrement} */}
      <button className="slider-button one" onClick={handleShowLessClick}>
        ◀︎
      </button>
      <div className="slider-content">
        {visibleGamesSubset.map((item) => (
          <Card key={item.id} description={description} item={item} />
        ))}
      </div>
      <button className="slider-button two" onClick={handleShowMoreClick}>
        ►
      </button>
    </section>
  );
};

export default HomeSlider;
