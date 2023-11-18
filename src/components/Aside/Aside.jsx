import "./Aside.css";
import BurgerIcon from "../../assets/img/BurgerIcon.svg";
import CloseIcon from "../../assets/img/CloseIcon.svg";
import Games from "../../assets/img/Games.svg";
import Home from "../../assets/img/Home.svg";
import Added from "../../assets/img/Added.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ShiggyLoad from "../../assets/img/shiggy_load.gif";

const Aside = () => {
  // # Toggelt die sidebar und dementsprechend die buttons, standardmäßig false
  const [sideBar, showSide] = useState(false);

  const showBar = () => {
    showSide(!sideBar);
  };

  let media = window.matchMedia("(max-width: 600px)");

  return (
    // ! sideBar ? "true= sidebar erscheint und burgermenü wird zu close button" : " alles umgedreht";
    <aside className={sideBar ? "asideWide" : null}>
      {sideBar ? (
        <div className="menu-icon">
          <img src={CloseIcon} onClick={showBar} alt="" />
        </div>
      ) : (
        <div className="menu-icon">
          <img src={BurgerIcon} onClick={showBar} alt="" />
        </div>
      )}

      <div className="navicon-wrapper">
        <NavLink onClick={media.matches ? showBar : null} to={"/"}>
          <div className="asideIcon">
            <img src={Home} alt="" />
            {sideBar ? <p>Home</p> : null}
          </div>
        </NavLink>

        <NavLink onClick={media.matches ? showBar : null} to={"/allgames"}>
          <div className="asideIcon">
            <img src={Games} alt="" />
            {sideBar ? <p>All Games</p> : null}
          </div>
        </NavLink>

        <NavLink onClick={media.matches ? showBar : null} to={"/recently"}>
          <div className="asideIcon">
            <img src={Added} alt="" />
            {sideBar ? <p>Recently Added</p> : null}
          </div>
        </NavLink>
      </div>
      <div className="shiggy-sidebar">
        {sideBar ? <img className="shiggy-load" src={ShiggyLoad}></img> : null}
      </div>
    </aside>
  );
};

export default Aside;
