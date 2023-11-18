import React, { useEffect, useState, useRef } from "react";
import "./Category.css";
import Arrow from "../../assets/img/Arrow.svg";

const Category = ({ setGames }) => {
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [isOpenGenre, setIsOpenGenre] = useState(false);
  const [isOpenSortBy, setIsOpenSortBy] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("PLATFORM");
  const [selectedGenre, setSelectedGenre] = useState("GENRE/TAG");
  const [sortBy, setSortBy] = useState("SORT BY");

  // const [isWindowOpen, setIsWindowOpen] = useState(false);

  // Zustand, um die ausgewählten Optionen zu speichern
  const [selectedFilters, setSelectedFilters] = useState({
    platform: [],
    genre: [],
    sortBy: [],
  });

  const gameGenres = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-Person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ];

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80bad1a5dbmshf2f932854360a23p117e26jsn6a9999a6e64f",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
    mode: "cors",
  };

  useEffect(() => {
    fetch(url4, options)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Yan junge hör auf damit", err));
  }, [selectedFilters]);

  let url4 = `https://free-to-play-games-database.p.rapidapi.com/api/${
    selectedFilters.genre.length > 0
      ? `filter?${
          selectedFilters.genre.length > 0
            ? `tag=${selectedFilters.genre.join(".")}`
            : ""
        }${
          selectedFilters.platform.length > 0
            ? `&platform=${selectedFilters.platform.join("&")}`
            : ""
        }${
          selectedFilters.sortBy.length > 0
            ? `&sort-by=${selectedFilters.sortBy.join("&")}`
            : ""
        }`
      : `games?${
          selectedFilters.platform.length > 0
            ? `platform=${selectedFilters.platform.join("&")}`
            : ""
        }${
          selectedFilters.genre.length > 0
            ? `&category=${selectedFilters.genre.join("&")}`
            : ""
        }${
          selectedFilters.sortBy.length > 0
            ? `&sort-by=${selectedFilters.sortBy.join("&")}`
            : ""
        }`
  }`;

  let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?${
    selectedFilters.platform.length > 0
      ? `platform=${selectedFilters.platform.join("&")}`
      : ""
  }${
    selectedFilters.genre.length > 0
      ? `&category=${selectedFilters.genre.join("&")}`
      : ""
  }${
    selectedFilters.sortBy.length > 0
      ? `&sort-by=${selectedFilters.sortBy.join("&")}`
      : ""
  }`;

  const toggleMenu = (menuType) => {
    switch (menuType) {
      case "platform":
        setIsOpenPlatform(!isOpenPlatform);
        // console.log(isOpenPlatform);
        break;
      case "genre":
        setIsOpenGenre(!isOpenGenre);
        // console.log(isOpenGenre);
        break;
      case "sortBy":
        setIsOpenSortBy(!isOpenSortBy);
        // console.log(isOpenSortBy);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (category, value) => {
    // Kopiere das aktuelle ausgewählte Filterset
    const newSelectedFilters = { ...selectedFilters };

    // Überprüfe, ob der Wert bereits ausgewählt ist
    const index = newSelectedFilters[category].indexOf(value);

    if (index !== -1) {
      // Wenn ausgewählt, entferne den Wert
      newSelectedFilters[category].splice(index, 1);
    } else {
      // Wenn nicht ausgewählt, füge den Wert hinzu
      newSelectedFilters[category].push(value);
    }

    // Aktualisiere den Zustand mit den neuen ausgewählten Filtern
    setSelectedFilters(newSelectedFilters);
    //  ! console.log("Selected Filters:", selectedFilters);
  };

  const removeFilter = (category, value) => {
    // Kopiere das aktuelle ausgewählte Filterset
    const newSelectedFilters = { ...selectedFilters };

    // Überprüfe, ob der Wert ausgewählt ist
    const index = newSelectedFilters[category].indexOf(value);

    if (index !== -1) {
      // Wenn ausgewählt, entferne den Wert
      newSelectedFilters[category].splice(index, 1);

      // Aktualisiere den Zustand mit den neuen ausgewählten Filtern
      setSelectedFilters(newSelectedFilters);
    }
  };

  return (
    <>
      <div className="categoryContainer">
        <div className="custom-dropdown">
          <div
            className="selected-Platform select"
            onClick={() => toggleMenu("platform")}
            onBlur={() => setIsOpenPlatform(false)}
          >
            {selectedPlatform === "platforms" ? "Platforms" : selectedPlatform}
            <img src={Arrow} className={isOpenPlatform ? "arrow" : ""}></img>
          </div>
          {isOpenPlatform && (
            <form
              action=""
              className={`Form ${isOpenPlatform ? "open" : ""}`}
              style={{}}
            >
              <div className="input-bg">
                <input
                  type="checkbox"
                  value="all"
                  name="allPlatforms"
                  id="allPlatforms"
                  checked={selectedFilters.platform.includes("all")}
                  onChange={() => handleCheckboxChange("platform", "all")}
                />
                <label htmlFor="allPlatforms">all Platforms</label>
              </div>
              <div className="input-bg">
                <input
                  type="checkbox"
                  value="pc"
                  name="windows"
                  id="windows"
                  checked={selectedFilters.platform.includes("pc")}
                  onChange={() => handleCheckboxChange("platform", "pc")}
                />
                <label htmlFor="windows">Windows</label>
              </div>
              <div className="input-bg">
                <input
                  type="checkbox"
                  value="browser"
                  name="browser"
                  id="browser"
                  checked={selectedFilters.platform.includes("browser")}
                  onChange={() => handleCheckboxChange("platform", "browser")}
                />
                <label htmlFor="browser">Browser</label>
              </div>
            </form>
          )}
        </div>
        <div className="custom-dropdown">
          <div
            className="selected-Genre select"
            onClick={() => toggleMenu("genre")}
            onBlur={() => setIsOpenGenre(false)}
          >
            {selectedGenre === "genre" ? "Genre" : selectedGenre}
            <img src={Arrow} className={isOpenGenre ? "arrow" : ""} />
          </div>
          {isOpenGenre && (
            <form
              action=""
              className={`Form ${isOpenGenre ? "open" : ""}`}
              style={{}}
            >
              {gameGenres.map((genre) => (
                <div key={genre} className="input-bg">
                  <input
                    type="checkbox"
                    value={genre}
                    name={genre}
                    id={genre}
                    checked={selectedFilters.genre.includes(genre)}
                    onChange={() => handleCheckboxChange("genre", genre)}
                  />
                  <label htmlFor={genre}>{genre}</label>
                </div>
              ))}
            </form>
          )}
        </div>
        <div className="custom-dropdown">
          <div
            className="sortBy select"
            onClick={() => toggleMenu("sortBy")}
            onBlur={() => setIsOpenSortBy(false)}
          >
            {sortBy === "sortby" ? "SortBy" : sortBy}
            <img src={Arrow} className={isOpenGenre ? "arrow" : ""} />
          </div>
          {isOpenSortBy && (
            <form
              action=""
              className={`Form ${isOpenSortBy ? "open" : ""}`}
              style={{}}
            >
              <div className="input-bg">
                <input
                  type="checkbox"
                  name="relevance"
                  id="relevance"
                  checked={selectedFilters.sortBy.includes("relevance")}
                  onChange={() => handleCheckboxChange("sortBy", "relevance")}
                />
                <label htmlFor="relevance">Relevance</label>
              </div>
              <div className="input-bg">
                <input
                  type="checkbox"
                  name="popularity"
                  id="popularity"
                  checked={selectedFilters.sortBy.includes("popularity")}
                  onChange={() => handleCheckboxChange("sortBy", "popularity")}
                />
                <label htmlFor="popularity">Popularity</label>
              </div>
              <div className="input-bg">
                <input
                  type="checkbox"
                  name="releaseDate"
                  id="releaseDate"
                  checked={selectedFilters.sortBy.includes("releaseDate")}
                  onChange={() => handleCheckboxChange("sortBy", "releaseDate")}
                />
                <label htmlFor="releaseDate">Release Date</label>
              </div>
              <div className="input-bg">
                <input
                  type="checkbox"
                  name="alphabetical"
                  id="alphabetical"
                  checked={selectedFilters.sortBy.includes("alphabetical")}
                  onChange={() =>
                    handleCheckboxChange("sortBy", "alphabetical")
                  }
                />
                <label htmlFor="alphabetical">Alphabetical</label>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="filter-categories">
        {selectedFilters.platform.map((filter, index) => (
          <span key={index} className="filter">
            <button
              className="remove-filter"
              onClick={() => removeFilter("platform", filter)}
            >
              X
            </button>

            {filter[0].toUpperCase() + filter.slice(1)}
          </span>
        ))}
        {selectedFilters.genre.map((filter, index) => (
          <span key={index} className="filter">
            <button
              className="remove-filter"
              onClick={() => removeFilter("genre", filter)}
            >
              X
            </button>

            {filter[0].toUpperCase() + filter.slice(1)}
          </span>
        ))}
        {selectedFilters.sortBy.map((filter, index) => (
          <span key={index} className="filter">
            <button
              className="remove-filter"
              onClick={() => removeFilter("sortBy", filter)}
            >
              X
            </button>

            {filter[0].toUpperCase() + filter.slice(1)}
          </span>
        ))}
      </div>
    </>
  );
};

export default Category;
