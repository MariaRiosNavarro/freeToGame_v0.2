import "./Gallery.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import Pikachu from "../../assets/img/pikachu.png";

const Gallery = ({ newGames }) => {
  return (
    <div className="gallery-wrapper">
      <section className="galleryContainer">
        {newGames.length > 0 ? (
          newGames.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <div>
            <div>
              <h2>No results...</h2>
              <img src={Pikachu} alt="" />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
