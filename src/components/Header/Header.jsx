import Aside from "../Aside/Aside";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = ({ newGames }) => {
  return (
    <header>
      <NavBar item={newGames} />
      <Aside />
    </header>
  );
};

export default Header;
