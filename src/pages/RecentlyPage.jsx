import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import HeaderPicture from "../components/HeaderPicture/HeaderPicture";
import Shiggy from "../assets/img/shiggy.gif";
import { useState } from "react";
import ScrollTo from "../components/SchrollTo/ScrollTo";

const RecentlyPage = ({ newGames }) => {
  const copyArray = [...newGames];

  copyArray.sort((a, b) => {
    let dateA = new Date(a.release_date);
    let dateB = new Date(b.release_date);
    return dateB - dateA;
  });

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1800);

  return (
    <div className="page-style">

     

      <HeaderPicture titelPage="Recently Add" imgSrc="/img/header3.jpg" />

      {loading ? (
        <div
          className="shiggy-wrapper"
          style={{ width: "fit-content", margin: "0 auto" }}
        >
          <img className="shiggy-img" src={Shiggy} alt="" />
        </div>
      ) : (
        <>
          <ScrollTo top={false} />
          <Gallery newGames={copyArray} />
          <ScrollTo top={true} />
        </>
      )}
    </div>
  );
};

export default RecentlyPage;
