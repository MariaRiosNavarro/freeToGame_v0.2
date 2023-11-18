import { useState, useEffect } from "react";
// import { imgArray } from "../../utils/db";
import "./HeaderPicture.css";

const HeaderPicture = ({ titelPage, imgSrc }) => {
  // const [game, setGame] = useState("");

  // useEffect(() => {
  //   handleImg();
  // }, []);

  // const handleImg = () => {
  //   if (imgArray.length === 0) {
  //     return;
  //   }
  //   const randomIndex = Math.floor(Math.random() * imgArray.length);
  //   console.log(randomIndex);
  //   setGame(imgArray[randomIndex]);
  // };

  return (
    <div className="image-title-wrapper">
      <div className="big-image">
        <img src={imgSrc} alt="game pic" />
      </div>
      <h2 className="page-title">{titelPage}</h2>
    </div>
  );
};

export default HeaderPicture;
