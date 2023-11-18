import "./Card.css";
import Button from "../Button/Button";
import PCSvg from "../PCSvg/PCSvg";
import BrowserSvg from "../BrowserSvg/BrowserSvg";

const Card = (props) => {
  return (
    <article className="card">
      <div className="img-wrapper">
        <img src={props.item.thumbnail} alt={props.item.title} />
      </div>
      <div className="text-wrapper">
        <h4 className="title">{props.item.title}</h4>
        {props.description ? (
          <p className="description">{props.item.short_description}</p>
        ) : null}
        <Button href={`/detail/${props.item.id}`} btnName="READ MORE" />
        <div className="separation-line"></div>
        <div className="badge-wrapper">
          {props.item.platform.length > 12 ? (
            <>
              <span className="badge badge-img-wrapper">
                <BrowserSvg />
              </span>
              <span className="badge badge-img-wrapper">
                <PCSvg />
              </span>
            </>
          ) : (
            <>
              <span className="badge badge-img-wrapper">
                {props.item.platform === "Web Browser" ? (
                  <BrowserSvg />
                ) : (
                  <PCSvg />
                )}
              </span>
            </>
          )}

          <p className="badge bagge-genre card-category">{props.item.genre}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
