import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoONE from '../images/photo1.png';
import PhotoTWO from '../images/photo2.png';
import PhotoTHREE from '../images/photo3.png';
import PhotoFOUR from '../images/photo4.png';
import PhotoFIVE from '../images/photo5.png';
import PhotoSIX from '../images/photo6.png';
import PhotoSEVEN from '../images/photo7.png';
import PhotoEIGHT from '../images/photo8.png';

const GalView = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const slides = [
    { src: PhotoONE, alt: "image 1" },
    { src: PhotoTWO, alt: "image 2" },
    { src: PhotoTHREE, alt: "image 3" },
    { src: PhotoFOUR, alt: "image 4" },
    { src: PhotoFIVE, alt: "image 5" },
    { src: PhotoSIX, alt: "image 6" },
    { src: PhotoSEVEN, alt: "image 7" },
    { src: PhotoEIGHT, alt: "image 8" },
  ];

  const imageElements = slides.map((slide, index) => (
    <img
      key={index}
      src={slide.src}
      alt={slide.alt}
      onClick={() => openLightbox(index)}
    />
  ));

  return (
    <div className="Galcontainer">
      <div className="gallery">{imageElements}</div>

      <Lightbox
        open={open}
        currentIndex={currentIndex}
        onClose={() => setOpen(false)}
        slides={slides.map((slide) => ({ ...slide }))}
      />
    </div>
  );
};

export default GalView;
