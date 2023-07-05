import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PhotoONE from '../images/photo1.png';
import PhotoTWO from '../images/photo2.png';
import PhotoTHREE from '../images/photo3.png';
import PhotoFOUR from '../images/photo4.png';
import PhotoFIVE from '../images/photo5.png';
import PhotoSIX from '../images/photo6.png';
import PhotoSEVEN from '../images/photo7.png';
import PhotoEIGHT from '../images/photo8.png';
import PhotoNINE from '../images/photo9.png';
import { colors } from "@mui/material";

const GalView = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeLightbox = () => {
    
    setOpen(false);
  };

  const photos = [
    { src: PhotoONE, alt: "image 1", width: 1, height: 1 },
    { src: PhotoTWO, alt: "image 2", width: 1, height: 1 },
    { src: PhotoTHREE, alt: "image 3", width: 1, height: 1 },
    { src: PhotoFOUR, alt: "image 4", width: 1, height: 1 },
    { src: PhotoFIVE, alt: "image 5", width: 1, height: 1 },
    { src: PhotoSIX, alt: "image 6", width: 1, height: 1 },
    { src: PhotoSEVEN, alt: "image 7", width: 1, height: 1 },
    { src: PhotoEIGHT, alt: "image 8", width: 1, height: 1 }, 
    { src: PhotoNINE, alt: "image 8", width: 1, height: 1 }
  ];

  return (
    <div className="Galcontainer">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          onClick={() => openLightbox(index)}
        />
      ))}
      <Modal open={open} onClose={closeLightbox} center classNames={{ closeButton: 'custom-close-button' }}>
        <img src={photos[currentIndex].src} alt={photos[currentIndex].alt} />
      </Modal>
    </div>
  );
};

export default GalView;
