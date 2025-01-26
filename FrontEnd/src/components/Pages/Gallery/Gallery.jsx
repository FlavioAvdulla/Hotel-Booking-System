import React from "react";
import "./Gallery.css";

// Photos
import gallery_01 from "../../../assets/images/Gallery/gallery_01.jpg";
import gallery_02 from "../../../assets/images/Gallery/gallery_02.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <div className="gallery-title">
          <h1>Masonry Layout</h1>
          <p>
            With a variety of layout options, including grid, masonry, and
            carousel, you can choose the perfect display style to match your
            website’s aesthetic.
          </p>
        </div>

        <div className="gallery-photos">
          <div className="section-01">
            <img src={gallery_01} alt="gallery_01" />
            <img src={gallery_02} alt="gallery_02" />
          </div>
          <div className="section-01">
            <img src={gallery_01} alt="gallery_01" />
            <img src={gallery_01} alt="gallery_01" />
          </div>
          <div className="section-01">
            <img src={gallery_02} alt="gallery_02" />
            <img src={gallery_02} alt="gallery_02" />
            <img src={gallery_01} alt="gallery_01" />
          </div>
          <div className="section-01">
            <img src={gallery_01} alt="gallery_01" />
            <img src={gallery_02} alt="gallery_02" />
            <img src={gallery_02} alt="gallery_02" />
          </div>
          <div className="section-01">
            <img src={gallery_02} alt="gallery_02" />
            <img src={gallery_01} alt="gallery_01" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
