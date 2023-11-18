import { useState } from "react";
import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import HeaderPicture from "../components/HeaderPicture/HeaderPicture";
import "./AllGamePage.css";
import Shiggy from "../assets/img/shiggy.gif";
import ScrollTo from "../components/SchrollTo/ScrollTo";

const AllGamesPage = ({ newGames }) => {
  const [filteredGames, setGames] = useState(newGames);

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1800);

  return (
    <div className="all-page page-style">
      <HeaderPicture titelPage="All Games" imgSrc="/img/header2.jpeg" />

      {loading ? (
        <div
          className="shiggy-wrapper"
          style={{ width: "fit-content", margin: "0 auto" }}
        >
          <img className="shiggy-img" src={Shiggy} alt="" />
        </div>
      ) : (
        <>
          <Category setGames={setGames} />
          <ScrollTo top={false} />
          <Gallery newGames={filteredGames} />
          <ScrollTo top={true} />
        </>
      )}
    </div>
  );
};

export default AllGamesPage;
