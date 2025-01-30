// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
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
import gallery_11 from "../../../assets/images/Gallery/gallery_11.jpg";
import gallery_12 from "../../../assets/images/Gallery/gallery_12.jpg";
import gallery_13 from "../../../assets/images/Gallery/gallery_13.jpg";
import gallery_14 from "../../../assets/images/Gallery/gallery_14.jpg";
import gallery_15 from "../../../assets/images/Gallery/gallery_15.jpg";

// Scroll to top
import ScrollToTop from "../../ScrollToTop/ScrollToTop.jsx";

// Video
import gallery_video_01 from "../../../assets/images/Gallery/gallery_video_01.mp4";

// Icons
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { LuCheck } from "react-icons/lu";

const images = [
  gallery_01,
  gallery_02,
  gallery_03,
  gallery_04,
  gallery_05,
  gallery_06,
  gallery_07,
  gallery_08,
  gallery_09,
  gallery_10,
];

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, currentIndex, onNext, onPrev, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <i
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <SlArrowLeft className="arrow-left" />
      </i>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt="modal" />
      </div>
      <i
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <SlArrowRight className="arrow-right" />
      </i>
    </div>
  );
};

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.1, // percentage of the element's visibility
  });

  useEffect(() => {
    if (inView) {
      setCount(30);
    }
  }, [inView]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery">
      <ScrollToTop/>
      <div className="gallery-container-01">
       

        <div className="gallery-photos">
          <div className="gallery-section-01">
            <img
              src={gallery_01}
              alt="gallery_01"
              onClick={() => handleImageClick(0)}
            />
            <img
              src={gallery_02}
              alt="gallery_02"
              onClick={() => handleImageClick(1)}
            />
          </div>
          <div className="gallery-section-01">
            <img
              src={gallery_06}
              alt="gallery_06"
              onClick={() => handleImageClick(5)}
            />
            <img
              src={gallery_03}
              alt="gallery_03"
              onClick={() => handleImageClick(2)}
            />
          </div>
          <div className="gallery-section-01">
            <img
              src={gallery_08}
              alt="gallery_08"
              onClick={() => handleImageClick(7)}
            />
            <img
              src={gallery_07}
              alt="gallery_07"
              onClick={() => handleImageClick(6)}
            />
          </div>
          <div className="gallery-section-01">
            <img
              src={gallery_04}
              alt="gallery_04"
              onClick={() => handleImageClick(3)}
            />
            <img
              src={gallery_05}
              alt="gallery_05"
              onClick={() => handleImageClick(4)}
            />
          </div>
          <div className="gallery-section-01">
            <img
              src={gallery_10}
              alt="gallery_10"
              onClick={() => handleImageClick(9)}
            />
            <img
              src={gallery_09}
              alt="gallery_09"
              onClick={() => handleImageClick(8)}
            />
          </div>
        </div>
      </div>

      <div className="gallery-title">
          <h1>Masonry Layout</h1>
          <p>
            With a variety of layout options, including grid, masonry, and
            carousel, you can choose the perfect display style to match your
            website’s aesthetic.
          </p>
        </div>

      <Modal
        isOpen={isModalOpen}
        currentIndex={currentIndex}
        onNext={goToNextImage}
        onPrev={goToPrevImage}
        onClose={closeModal}
      />
      <div className="gallery-container-02">
        <div className="gallery-section-02">
          <div className="gallery-left">
            <img src={gallery_11} alt="gallery_11" />
          </div>
          <div className="gallery-right">
            <div className="gallery-right-01">
              <div className="blend-color"></div>
              <img src={gallery_12} alt="gallery_12" />
            </div>
            <div className="gallery-right-02">
              <div className="gallery-right-02-a">
                <h1>Hotel Info</h1>
                <div className="info-details">
                  <div className="info-details-1">
                    <i>
                      <LuCheck className="check-icon" />
                    </i>
                    <p>Drinks Included</p>
                  </div>
                  <div className="info-details-2">
                    <i>
                      <LuCheck className="check-icon" />
                    </i>
                    <p>Pets Allowed</p>
                  </div>
                  <div className="info-details-3">
                    <i>
                      <LuCheck className="check-icon" />
                    </i>
                    <p>Heated Pool</p>
                  </div>
                  <div className="info-details-4">
                    <i>
                      <LuCheck className="check-icon" />
                    </i>
                    <p>Indoor Big Gym</p>
                  </div>
                </div>
              </div>
              <div className="gallery-right-02-b">
                <img src={gallery_13} alt="gallery_13" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-container-03" ref={ref}>
        <div className="gallery-section-03">
          <div className="record-1">
            <div className="record-1-num">
              <h1>
                <CountUp className="num" start={0} end={count} duration={4} />
              </h1>
            </div>
            <div className="record-1-info">
              <h1>Suites</h1>
              <p>Dolor Sit Amet</p>
            </div>
          </div>
          <div className="record-2">
            <div className="record-1-num">
              <h1>
                <CountUp className="num" start={0} end={count} duration={4} />
              </h1>
            </div>
            <div className="record-1-info">
              <h1>Suites</h1>
              <p>Dolor Sit Amet</p>
            </div>
          </div>
          <div className="record-3">
            <div className="record-1-num">
              <h1>
                <CountUp className="num" start={0} end={count} duration={4} />
              </h1>
            </div>
            <div className="record-1-info">
              <h1>Suites</h1>
              <p>Dolor Sit Amet</p>
            </div>
          </div>
          <div className="record-4">
            <div className="record-1-num">
              <h1>
                <CountUp className="num" start={0} end={count} duration={4} />
              </h1>
            </div>
            <div className="record-1-info">
              <h1>Suites</h1>
              <p>Dolor Sit Amet</p>
            </div>
          </div>
        </div>
        <div className="blend-color-video"></div>
        <div className="gallery-video">
          <video loop autoPlay muted>
            <source src={gallery_video_01} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="gallery-container-04">
        <div className="gallery-container-04-a">
          <h2>FREE WIFI</h2>
          <h1>RELAX AREA</h1>
          <button>VIEW ALL</button>
          <div className="gallery-container-04-img">
            <img src={gallery_14} alt="gallery_14" />
          </div>
        </div>
        <div className="gallery-container-04-b">
          <h2>FREE WIFI</h2>
          <h1>RELAX AREA</h1>
          <button>VIEW ALL</button>
          <div className="gallery-container-04-img">
            <img src={gallery_15} alt="gallery_15" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
