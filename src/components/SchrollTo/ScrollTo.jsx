import { useState } from "react";
import "./SchrollTo.css";

const ScrollTo = ({ top }) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (scroll) {
      if (top) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
      setScroll(false);
    }
  };

  return (
    <div className="scroll-wrapper">
      <input
        type="checkbox"
        id={`scroll-to${top ? "top" : "bottom"}`}
        className="hidden-scroll"
        onChange={() => setScroll(!scroll)}
        checked={scroll}
        name="hidden-scroll"
      />

      <label
        htmlFor={`scroll-to${top ? "top" : "bottom"}`}
        className={`scroll-to-btn ${top ? "right" : "left"} flex-label`}
        onClick={handleScroll}
      >
        {top ? <span className="up">▲</span> : <span className="down">▼</span>}
      </label>
    </div>
  );
};

export default ScrollTo;
