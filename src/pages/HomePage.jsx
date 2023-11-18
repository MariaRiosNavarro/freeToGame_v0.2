import TopPC from "../components/TopPC/TopPC";
import Button from "../components/Button/Button";
import "./HomePage.css";
import HomeSlider from "../components/HomeSlider/HomeSlider.jsx";
import HeaderPicture from "../components/HeaderPicture/HeaderPicture.jsx";
import ScrollTo from "../components/SchrollTo/ScrollTo.jsx";

const HomePage = ({ newGames }) => {
  return (
    <div className="home-page page-style">
      <HeaderPicture
        titelPage="Find & track the best free-to-play games!"
        imgSrc="/img/header1.jpeg"
      />
      <div className="home-wrapper">
        <ScrollTo top={false} />
        <div className="container-home">
          <h3>Recently Added</h3>
          <HomeSlider apiUrlEnd="sort-by=release-date" description={true} />
          <div className="show-more">
            <Button href="/allgames" btnName="SHOW MORE" />
          </div>
        </div>

        <div className="container-home">
          <h3>Top 4 Games for PC in November 2023</h3>
          <TopPC />
          <div className="show-more">
            <Button href="/recently" btnName="SHOW MORE" />
          </div>
        </div>

        <div className="container-home">
          <h3>Top 4 Games for Browser in November 2023</h3>
          <HomeSlider
            apiUrlEnd="platform=browser&sort-by=relevance"
            description={false}
          />
          <div className="show-more">
            <Button href="/allgames" btnName="SHOW MORE" />
          </div>
        </div>
        <ScrollTo top={true} />
      </div>
    </div>
  );
};

export default HomePage;
