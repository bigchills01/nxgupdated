import React from "react";
import { NavLink } from "react-router-dom";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="center-content">
          <div className="content slide-up">
          <h2 className="title"style={{ whiteSpace: "pre-line" }}>{slide.title}</h2>
          <h3 className="text"style={{ whiteSpace: "pre-line" }}>{slide.description.replace(/\\n/g, '\n')}</h3>
          <div className='Button-Container'>

            <NavLink exact to="/services">
            <button className='btn'> Learn More </button>
            </NavLink>
          </div>
          </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
