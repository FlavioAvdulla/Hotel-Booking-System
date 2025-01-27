// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Gallery.css";

// Photos
import gallery_01 from "../../../assets/images/Gallery/gallery_01.jpg";
import gallery_02 from "../../../assets/images/Gallery/gallery_02.jpg";
import gallery_04 from "../../../assets/images/Gallery/gallery_04.jpg";
import gallery_03 from "../../../assets/images/Gallery/gallery_03.jpg";
import gallery_05 from "../../../assets/images/Gallery/gallery_05.jpg";
import gallery_06 from "../../../assets/images/Gallery/gallery_06.jpg";
import gallery_07 from "../../../assets/images/Gallery/gallery_07.jpg";
import gallery_08 from "../../../assets/images/Gallery/gallery_08.jpg";
import gallery_09 from "../../../assets/images/Gallery/gallery_09.jpg";
import gallery_10 from "../../../assets/images/Gallery/gallery_10.jpg";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, src, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <img src={src} alt="modal" />
      </div>
    </div>
  );
};

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleImageClick = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

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
          <div className="gallery-section-01">
            <img src={gallery_01} alt="gallery_01" onClick={() => handleImageClick(gallery_01)} />
            <img src={gallery_02} alt="gallery_02" onClick={() => handleImageClick(gallery_02)} />
          </div>
          <div className="gallery-section-01">
            <img src={gallery_06} alt="gallery_06" onClick={() => handleImageClick(gallery_01)} />
            <img src={gallery_03} alt="gallery_03" onClick={() => handleImageClick(gallery_01)} />
          </div>
          <div className="gallery-section-01">
          <img src={gallery_08} alt="gallery_08" onClick={() => handleImageClick(gallery_02)} />
          <img src={gallery_07} alt="gallery_07" onClick={() => handleImageClick(gallery_01)} />
          </div>
          <div className="gallery-section-01">
            <img src={gallery_04} alt="gallery_04" onClick={() => handleImageClick(gallery_01)} />
            <img src={gallery_05} alt="gallery_05" onClick={() => handleImageClick(gallery_01)} />
          </div>
          <div className="gallery-section-01">
            <img src={gallery_10} alt="gallery_10" onClick={() => handleImageClick(gallery_01)} />
            <img src={gallery_09} alt="gallery_09" onClick={() => handleImageClick(gallery_02)} />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
    </div>
  );
};

export default Gallery;
