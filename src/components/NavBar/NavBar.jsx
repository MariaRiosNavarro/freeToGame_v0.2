import Logo from "../../assets/img/Logo.svg";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const NavBar = (props) => {
  const navigate = useNavigate();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    // console.log(item);
    navigate(`./detail/${item.id}`);
    navigate(0);
  };

  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.title}
        </span>
      </>
    );
  };
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src={Logo} alt="" className="logo" />
      </Link>

      <div className="search">
        <ReactSearchAutocomplete
          items={props.item}
          fuseOptions={{ keys: ["title", "description"] }}
          resultStringKeyName="title"
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
          styling={{
            backgroundColor: "#375470",
            color: "white",
            iconColor: "white",
            border: "none",
            hoverBackgroundColor: "#152f47",
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
