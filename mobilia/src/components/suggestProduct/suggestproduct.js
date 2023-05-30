import React from "react";
import a3de from "../../images/a3de.jpeg";
import corner from "../../images/corner.jpeg";
import luxury from "../../images/luxury.jpeg";
import "../suggestProduct/suggestproduct.css";
const SuggestProduct = () => {
  return (
    <div className="slider" data-aos="fade-up">
      <div className="slide-track">
        <div className="slide">
          <img
            src="https://assets.architecturaldigest.in/photos/60eed0435260d592f50edbc7/16:9/w_2560%2Cc_limit/Italian-luxury-furniture-Minotti.jpg"
            alt=""
            className="slide-img"
          />
        </div>
        <div className="slide">
          <img
            src="https://assets.architecturaldigest.in/photos/60eece4d0e8686d95b697b79/master/w_1600,c_limit/Italian-luxury-furniture-Minotti3.jpg"
            alt=""
            className="slide-img"
          />
        </div>
        <div className="slide">
          <img
            src="https://media.architecturaldigest.in/wp-content/uploads/2023/04/Alcove_Silver-Trinklet_-min-866x378.jpg"
            alt=""
            className="slide-img"
          />
        </div>
        <div className="slide">
          <img src={a3de} alt="" className="slide-img" />
        </div>

        <div className="slide">
          <img src={luxury} alt="" className="slide-img" />
        </div>
        <div className="slide">
          <img src={corner} alt="" className="slide-img" />
        </div>
        <div className="slide">
          <img
            src="https://assets.architecturaldigest.in/photos/60eed0435260d592f50edbc7/16:9/w_2560%2Cc_limit/Italian-luxury-furniture-Minotti.jpg"
            alt=""
            className="slide-img"
          />
        </div>
        <div className="slide">
          <img
            src="https://assets.architecturaldigest.in/photos/60eece4d0e8686d95b697b79/master/w_1600,c_limit/Italian-luxury-furniture-Minotti3.jpg"
            alt=""
            className="slide-img"
          />
        </div>
        <div className="slide">
          <img
            src="https://media.architecturaldigest.in/wp-content/uploads/2023/04/Alcove_Silver-Trinklet_-min-866x378.jpg"
            alt=""
            className="slide-img"
          />
        </div>
        <div className="slide">
          <img src={a3de} alt="" className="slide-img" />
        </div>

        <div className="slide">
          <img src={luxury} alt="" className="slide-img" />
        </div>
        <div className="slide">
          <img src={corner} alt="" className="slide-img" />
        </div>
        <div className="slide">
          <img
            src="https://assets.architecturaldigest.in/photos/60eece4d0e8686d95b697b79/master/w_1600,c_limit/Italian-luxury-furniture-Minotti3.jpg"
            alt=""
            className="slide-img"
          />
        </div>
        <div className="slide">
          <img
            src="https://media.architecturaldigest.in/wp-content/uploads/2023/04/Alcove_Silver-Trinklet_-min-866x378.jpg"
            alt=""
            className="slide-img"
          />
        </div>
      </div>
    </div>
  );
};

export default SuggestProduct;
